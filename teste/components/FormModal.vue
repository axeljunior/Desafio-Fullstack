<template>
  <div class="modal-overlay">
      <section class="modal">
          
          <div class="form-container">
              <div class="form-title-container">
                <h1>Add new movie</h1>
              </div>
              <FormInputText class="form-txt-input" :config="{label:'Id'}"/>
              <FormInputText class="form-txt-input" :config="{label:'Primary title'}"/>
              <FormInputText class="form-txt-input" :config="{label:'Original title'}"/>
              <FormInputText class="form-txt-input" :config="{label:'Running time'}"/>
              <FormInputText class="form-txt-input" :config="{label:'Release year'}"/>
              <FormInputSelect class="form-slc-input" :config="{options:['Yes','No']}"/>
              <div class="form-button-container">
                  <button class="form-button" type="submit" @click="$emit('close-form-modal')">Send</button>
              </div>
          </div>
      </section>
  </div>
</template>

<style lang="scss" scoped>
  .modal-overlay {
    z-index: 1;
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
    margin-top: 10%;
    padding: 60px 0;
    border-radius: 20px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

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
        .form-title-container{
          display: flex;
          justify-content: center;
          margin-bottom: 20px;
        }
        .form-button-container {
            display: flex;
            justify-content: center;
            margin-bottom: 10px;

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