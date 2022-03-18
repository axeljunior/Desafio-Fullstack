<script>
  import qs from 'qs';

  export default {
    name: 'MainPage',
    methods: {
      setDetails(movie){
        this.currentMovie = movie
        
        this.showDetailsModal = true
      },
      async loadHome(){
        const data = await this.$api.$get('/')
        this.moviePerPage = 21
        this.currentPage = 1
        this.movieList = data.movies
        this.maxPage = data.page
      },
      async searchMovie(inputedValue){
        if (!inputedValue) {
          this.loadHome()
          if(this.$route.query.page !== undefined && this.$route.query.filter !== undefined){
            this.$router.replace({name: 'index', query: {page: undefined, filter:undefined}})
          }
          return
        }else if(inputedValue === this.$route.query.filter) return 

        const page = inputedValue && inputedValue !== this.$route.query.filter ?
                    undefined:
                    this.$route.query.page

        const filter = inputedValue;
        
        this.$router.replace({name: this.$router.path, query: {...this.$route.query, page, filter}})

        const data = await this.$api.$get('/' + `?${qs.stringify({page, filter})}`);
        this.movieList = data.movies
        this.maxPage = data.page
      },
      async pageNavigation(navDirection){

        if(navDirection === 'next' && this.currentPage < this.maxPage) this.currentPage += 1
        else if(this.currentPage > 1) this.currentPage -= 1

        const filter = this.$route.query.filter;
        const page = this.currentPage
        
        this.$router.replace({name: this.$router.path, query: {...this.$route.query, page, filter}})
        const data = await this.$api.$get('/' + `?${qs.stringify({page, filter})}`);
        this.movieList = data.movies
        this.maxPage = data.page

      }
    },
    data(){
      return {
        showDetailsModal: false,
        moviePerPage: 21,
        currentPage: 1,
        movieList: '',
        maxPage: Infinity,
        currentMovie: null,
      }
    },
    async mounted() {
      const filter = this.$route.query.filter;
      let page = this.$route.query.page;

      if (page || filter){
        page = page || '1';
        
        const data = await this.$api.$get('/' + `?${qs.stringify({page, filter})}`);
        this.moviePerPage = 21
        this.currentPage = parseInt(page)
        this.movieList = data.movies
        this.maxPage = data.page
        return
      }
      this.loadHome()
    }
  }
</script>

<template>
    <main>
        <NavBar @navigate-page="pageNavigation" @search-movie="searchMovie" v-on="$listeners"/>
        <DetailsModal v-if="showDetailsModal" @close-details-modal="showDetailsModal = false" :movie="currentMovie"/>
        <section>
            <Card
              class="card-movie"
              v-for="movie of movieList.slice(0,this.moviePerPage)" 
              :key="movie.id" 
              :title="movie.originalTitle"
              @click.native="setDetails(movie)"/>
        </section>
    </main>
</template>

<style lang="scss" scoped>
    main {
        width: 100vw;
        margin-left: 3px;
    }
    section {
        min-height: 550px;
        height: calc(100vh - 32px);
        background-color: #eaece5;
        
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        overflow-y: auto;
        .card-movie {
          cursor: pointer;
        }
    }
</style>