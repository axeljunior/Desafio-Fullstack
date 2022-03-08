<template>
    <nav class="top-bar">
        <div class="search-container">
            <input type="text">
            <img src="~/assets/search.png" alt="searcIcon"/>
        </div>
        <div class="button-container">
            <button id="button-previous" class="big"/>
            <button/>
            <button/>
            <button/>
            <button id="button-next" class="big"/>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
    .top-bar{
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
                height: 1em;
                width: 1em;
            }

            .big{
                height: 1.5em;
                width: 1.5em;
            }
        }
    }
</style>