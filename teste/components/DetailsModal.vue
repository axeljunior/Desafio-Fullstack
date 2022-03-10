<script>
  export default {
    props: ['movie'],
  }
</script>

<template>
  <div class="modal-overlay" 
    @click="$emit('close-details-modal')">

    <div class="modal" @click.stop>

      <div class="details-container">
        <h1>{{movie.primaryTitle}}</h1>
        <h4>{{movie.genres.toString().replaceAll(',',' - ')}}</h4>
        <h6>{{movie.isAdult ? 'Classificação: +18' : ''}}</h6>
        <div class="details">
          <p><span>Titulo Original:</span> {{movie.originalTitle}} <br/>
          <span>Duração:</span> {{movie.runtimeMinutes}}min<br/>
          <span>Ano de Lançamento:</span> {{movie.startYear}} <br/> 
          <span>Avaliação:</span> {{movie.rating.averageRating}}</p>
        </div>
        <div class="details-button-container">
          <button class="details-button" @click="$emit('close-details-modal')">Sair</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

  .modal-overlay {
    z-index: 1;
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
    margin: 5% 0;
    padding: 60px 0;
    border-radius: 20px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .details-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      width: 335px;
      height: 550px;
      padding: 20px 10px;
      
      border: 2px solid #b73765;
      border-radius: 10px;
    
      background-color: #b2c2bf;
      .details{
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top: 5%;
        p {
          font-size: 1em;
          margin: 20px 0;
        }
        span {
          font-weight: bold;
          margin: 5px 0;
        }
      }
    }
    .details-button-container {
			display: flex;
			justify-content: center;
			align-items: flex-end;

			height: 50%;
			margin-bottom: 10px;

			.details-button {
				width: 150px;
				height: 40px;
				border-radius: 16px;
				
				font-size: 0.87em;
				font-weight: bold;
				color: white;
				
				background-color: #b73765;
				border-color: #d7497c;
			}
		}
  }
  @media (max-width: 480px) {
    .modal{
      width: 95%;
    }
  }
</style>

