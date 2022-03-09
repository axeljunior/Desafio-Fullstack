<script>
export default {
    props: ['config']
}
</script>
<template>
    <div class="form-group">
        <label class="control-label">{{config.label}}</label>  
        <div class="input-container">
            <div class="input-group">
                <input class="form-text-input" :placeholder="config.label" type="text">
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .form-group{
        display: flex;
        align-items: center;
        justify-content: flex-end;

        margin-bottom: 10px;
        label {
            font-weight: bold;
            font-size: 1em;
        }
        .input-container {
            margin-left: 3px;
            input {
                padding-left: 3px;
                height: 2em;
                border: 1px solid rgba(68, 68, 68, 0.596);
                border-radius: 5px;
            }
            input::placeholder {
                color: rgba(68, 68, 68, 0.45);
            }
        }
    }
</style>