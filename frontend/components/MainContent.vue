<script>
  export default {
    name: 'MainPage',
    methods: {
      setDetails(movie){
        this.currentMovie = movie
        this.showDetailsModal = true
      },
      async loadHome(){
        const data = await this.$api.$get('/')
        this.moviePerPage = data.perPage
        this.currentPage = data.currentPage
        this.movieList = data.movies
      },
      async searchMovie(params){
        if (!params) {
          await this.loadHome()
          this.$router.replace({name: 'index', query: {}})
          return;
        }
        if(this.$route.query.id === params) return
        this.$router.replace({name: this.$router.path, query: {...this.$route.query, id: params}})
        const data = await this.$api.$get('/' + params)
        this.movieList = data
      }
    },
    data(){
      return {
        showDetailsModal: false,
        moviePerPage: '',
        currentPage: '',
        movieList: '',
        currentMovie: null,
      }
    },
    async mounted() {
      if(this.$route.query.id){
        const data = await this.$api.$get('/' + this.$route.query.id)
        this.moviePerPage = 21
        this.currentPage = 1
        this.movieList = data
        return;
      }
      await this.loadHome()
    }
  }
</script>

<template>
    <main>
        <NavBar @search-movie="searchMovie" v-on="$listeners"/>
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