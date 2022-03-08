<script>
  export default {
    name: 'MainPage',
    methods: {
      setDetails(movie){
        console.log(arguments)
        this.currentMovie = movie
        this.showModal = true
      }
    },
    data(){
      return {
        showModal: false,
        moviePerPage: '',
        currentPage: '',
        movieList: '',
        currentMovie: null,
      }
    },
    async mounted() {
      const jsonMovies = await this.$api.$get('/movies')
      this.moviePerPage = jsonMovies.perPage
      this.currentPage = jsonMovies.currentPage
      this.movieList = jsonMovies.movies
    }
  }
</script>

<template>
    <main>
        <NavBar/>
        <CardInfoModal v-if="showModal" @close-modal="showModal = false" :movie="currentMovie"/>
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