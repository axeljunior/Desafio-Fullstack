<script>
  export default {
    props: ['movie'],
  }
</script>

<template>
  <div class="modal-overlay" 
    @click="$emit('close-modal')"
    @clicked="onClickChild">


    <div class="modal" @click.stop>
      <h6>{{movie.originalTitle}}</h6>
      <p>Detalhes do Fi</p>
      <button @click="$emit('close-modal')">Sair</button>
    </div>
  </div>
</template>

<style scoped>

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
  background-color: white;
  height: 500px;
  width: 500px;
  margin-top: 10%;
  padding: 60px 0;
  border-radius: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
}

h6 {
  font-weight: 500;
  font-size: 28px;
  margin: 20px 0;
}

p {
  font-size: 16px;
  margin: 20px 0;
}

button {
  background-color: #b73765;
  width: 150px;
  height: 40px;
  color: white;
  font-size: 14px;
  border-radius: 16px;
  margin-top: 50px;
  font-weight: bold;
}
</style>
