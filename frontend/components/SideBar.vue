<script>
export default {
    name: 'SideBar'
}
</script>

<template>
    <aside class="side-bar">
        <Title class="page-title"/>
        <div class="button-container">
            <a href="/"><button href="/">Home</button></a>
            <button @click="$emit('show-form-modal')">Add movie</button>
        </div>
    </aside>
</template>

<style lang="scss" scoped>
    aside, .button-container {
        display: flex;
        flex-direction: column;
        height: 100vh;
        min-height: 582px;
    }
    aside {
        align-items: center;
        background-color: #b2c2bf;
        .button-container {
            min-height: 350px;
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
</style>