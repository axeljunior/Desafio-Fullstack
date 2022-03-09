<script>
    export default {
        name: 'Card',
        props: ["title"],
        computed: {
            setColor() {
                return this.color
            }
        }
    }
</script>

<template>
    <div class="card">
        <div class="card-container">
            <content class="card-data">
                <slot/>
            </content>
            <div class="title-container">
                <h1>{{this.title}}</h1>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .card {
        min-width: 140px;
        min-height: 160px;
        max-height: 180px;

        margin: 10px;
        border-radius: 5px;
        border: 1px solid #000;
        background-color: #c0ded9;
        padding: 10px;
    }
    .card-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;

        height: 100%;
        .card-data{
            width: 100%;
            border-bottom: 1px solid black;
        }
        .title-container{
            justify-self: flex-end;
            h1{
                padding: 0 10px;
                font-size: 12px;
                max-width: 118px;
                word-wrap: break-word;
            }
        }
    }


    @media (max-width: 480px) {
        .card{
            width: 100%;
            height: 50vh;
            max-height: none;
            .title-container > h1{
                max-width: 440px;

            }
        }
    }

</style>