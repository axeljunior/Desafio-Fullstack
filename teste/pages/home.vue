<script>
export default {
  name: 'HomePage',
  methods: {
    showModalForm(){
      this.showFormModal = true
    },
    showModalSidebar(){
      console.log("lero")
      this.showSideBar = true
    }
  },
  data(){
    return {
      showFormModal: false,
      showSideBar: false
    }
  }
}
</script>

<template>
  <div>
    <div class="container" >
      <SideBar @show-form-modal="showModalForm()"/>
      <SideBarModal @close-sidebar-modal="showSideBar=false" v-if="showSideBar" @show-form-modal="showModalForm()"/>
      <FormModal v-if="showFormModal" @close-form-modal="showFormModal = false"/>
      <MainContent @show-sidebar="showModalSidebar()"/>
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


