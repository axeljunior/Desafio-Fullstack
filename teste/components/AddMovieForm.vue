<template>
    <main>
        <section>
            <div class="form-container">
                <FormInputText class="form-txt-input" :config="{label:'Id'}"/>
                <FormInputText class="form-txt-input" :config="{label:'Primary title'}"/>
                <FormInputText class="form-txt-input" :config="{label:'Original title'}"/>
                <FormInputText class="form-txt-input" :config="{label:'Running time'}"/>
                <FormInputText class="form-txt-input" :config="{label:'Release year'}"/>
                <FormInputText class="form-txt-input" :config="{label:'Release year'}"/>
                <FormInputSelect class="form-slc-input" :config="{options:['Yes','No']}"/>
                <div class="form-button-container">
                    <button class="form-button" type="submit">Send</button>
                </div>
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>
    main {
        width: 100vw;
        margin-left: 3px;
    }
    section {
        min-height: 550px;
        height: 100vh;
        background-color: #eaece5;

        display: flex;
        justify-content: center;
        align-items: center;

        .form-container {
            display: flex;
            flex-direction: column;
            justify-content: center;

            width: 300px;
            height: 550px;
            
            border: 2px solid #b73765;
            border-radius: 10px;
        
            background-color: #b2c2bf;
            padding-right: 12px;
            .form-button-container {
                display: flex;
                justify-content: center;
                .form-button {
                    width: 150px;
                    height: 40px;
                    border-radius: 16px;
                    margin-top: 50px;
                    
                    font-size: 0.87em;
                    font-weight: bold;
                    color: white;
                    
                    background-color: #b73765;
                }
            }
        }
    }

</style>