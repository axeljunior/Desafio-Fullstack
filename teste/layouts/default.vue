<script>
export default {
  name: 'HomePage',
}
</script>

<template>
  <div>
    <div class="container">
      <SideBar/>
      <Nuxt/>
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


