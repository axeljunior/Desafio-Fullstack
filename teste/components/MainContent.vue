<script>
  export default {
    name: 'MainPage',
    watch: {
      '$route.query': function() {
        console.log(this.$router.query)
      },
    },
    methods: {
      setDetails(movie){
        this.currentMovie = movie
        this.showDetailsModal = true
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
      console.log('/id=' + this.$route.query.id)

      const data = await this.$api.$get('/' + this.$route.query.id)
      console.log(data.movies)
      this.moviePerPage = data.perPage
      this.currentPage = data.currentPage
      this.movieList = data.movies
    }
  }
</script>

<template>
    <main>
        <NavBar/>
        <DetailsModal v-if="showDetailsModal" @close-details-modal="showDetailsModal = false" :movie="currentMovie"/>
        <section>
            <Card
              class="card-movie"
              v-for="movie of movieList" 
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