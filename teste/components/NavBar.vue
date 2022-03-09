<template>
    <nav class="nav-bar">
        <div class="search-container">
            <input type="text" placeholder="Search">
            <img src="~/assets/search.png" alt="searcIcon"/>
        </div>
        <div class="button-container">
            <span id="button-previous" class="big">
                <button/>
                <img src="~/assets/arrow.png" alt="searcIcon"/>
            </span>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <span id="button-next" class="big">
                <button/>
                <img src="~/assets/arrow.png" alt="searcIcon"/>
            </span>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
    .nav-bar{
        display: flex;
        justify-content: space-between;
        padding: 0 16px;
        background-color: #b2c2bf;
        height: 2em;
        width: 100%;
        align-items: center;

        .search-container{
            width: 50%;
            position: relative;

            input{
                width: 100%;
                height: 22px;
                padding-left: 5px;
                border-radius: 3px;
                border: 1px solid black;
            }
            img{
                width: 15px;
                height: 15px;
                position: absolute;
                right: 5px;
                top: calc(50% - 8px);

                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
                pointer-events: none;
            }
        }
        .button-container{
            display: flex;
            align-items: center;

            button {
                height: 1rem;
                width: 1rem;
                
                margin: 0 1px;
                border-radius: 50%;
                border: none;
                font-weight: bold;
                color: rgba(46, 46, 46, 0.55);
            }
            .big {
                display: flex;
                justify-content: center;
            }
            .big > button{
                height: 1.5em;
                width: 1.5em;
            }
            .big > img{
                position: absolute;
                width: 15px;
                height: 15px;
            }
            #button-next, #button-previous{
                position: relative;
            }
            #button-previous > img {
                left: calc(50% - 7.5px);
                top: calc(50% - 7.5px);
            }
            #button-next > img {
                right: calc(50% - 7.5px);
                top: calc(50% - 7.5px);
                transform: scaleX(-1)
            }
        }
    }
</style>