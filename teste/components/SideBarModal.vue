<script>
export default {
    name: 'SideBarMobile'
}
</script>

<template>
<div class="modal-overlay"
    @click="$emit('close-sidebar-modal')">
    <div class="modal" @click.stop> 
        <aside class="side-bar-mobile">
            <Title class="page-title"/>
            <div class="button-container">
                <a href="/"><button href="/">Home</button></a>
                <button @click="$emit('show-form-modal')">Add movie</button>
            </div>
        </aside>
    </div>
</div>

</template>

<style lang="scss" scoped>
  .modal-overlay {
    z-index: 1;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    background-color: #000000da;
  }
  .modal {
    border-radius: 20px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .side-bar-mobile, .button-container {
        display: flex;
        flex-direction: column;
        min-height: 582px;
    }

    .side-bar-mobile {
        align-items: center;
        background-color: #b2c2bf;
        height: 100vh;
        .button-container {
            a {
                height: 50px;
                margin-bottom: 50%;
            }
        }
        button {
            width: 140px;
            height: 50px;
            margin-bottom: 50%;
            border-radius: 5px;
            background-color: #b73765;
            border-color: #d7497c;
            font-size: 1em;
            font-weight: bold;
            color: beige;
        }
    }
  }
  @media (max-height: 580px) {
    .side-bar-mobile {
      padding-top: 45vh;
    }
  }
</style>