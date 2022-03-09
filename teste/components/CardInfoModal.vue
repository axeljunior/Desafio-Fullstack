<script>
  export default {
    props: ['movie'],
  }
</script>

<template>
  <div class="modal-overlay" 
    @click="$emit('close-modal')">

    <div class="modal" @click.stop>
      <h1>{{movie.primaryTitle}}</h1>
      <h4>{{movie.genres.toString().replaceAll(',',' ')}}</h4>
      <h7>{{movie.isAdult ? 'Classificação: +18' : ''}}</h7>

      <div class="details-container">
        <div class="details">
          <p><span>Titulo Original:</span> {{movie.originalTitle}} &nbsp; 
          <span>Avaliação:</span> {{movie.rating.averageRating}} <br/>
          <span>Ano de Lançamento:</span> {{movie.startYear}} &nbsp; 
          <span>Duração:</span> {{movie.runtimeMinutes}}min</p>
        </div>

      </div>
      <button @click="$emit('close-modal')">Sair</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>

  .modal-overlay {
    position: fixed;
    top: -50px;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    background-color: #000000da;
  }

  .modal {
    text-align: center;
    background-color: #c0ded9;
    height: 75%;
    width: 40vw;
    margin-top: 10%;
    padding: 60px 0;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    h4 {
      margin: 5px 0;
    }
  }
  .details-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
  }

  .details{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    span {
      font-weight: bold;
    }
  }

  p {
    font-size: 1em;
    margin: 20px 0;
  }

  button {
    width: 150px;
    height: 40px;
    border-radius: 16px;
    margin-top: 50px;
    
    font-size: 14px;
    font-weight: bold;
    color: white;
    
    background-color: #b73765;
  }

  @media (max-width: 480px) {
    .modal{
      width: 95%;
    }
  }
</style>
