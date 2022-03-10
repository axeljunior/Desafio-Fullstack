<script>
export default {
  name: 'Layout',
  methods: {
    showModal(){
      this.showFormModal = true
    },
    teste(){
      console.log("Lero")
    }
  },
  data(){
    return {
      showFormModal: false,
    }
  }
}
</script>

<template>
  <div>
    <div class="container" >
      <SideBar @show-form-modal="showModal()"/>
      <FormModal v-if="showFormModal" @close-form-modal="showFormModal = false"/>
      <Nuxt @show-sidebar="teste()"/>
    </div>
  </div>
</template>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
    
  body, html {
    height: 100%;
    background: #FFFFFF;
  }

  input:focus, textarea:focus, select:focus {
    outline: none;
  }

  .container {
    display: flex;
  }

  @media (max-width: 768px) {
    .side-bar {
      display: none !important;
    }
  }
</style>


