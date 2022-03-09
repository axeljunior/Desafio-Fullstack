<script>
export default {
    props: ['config'],
}
</script>
<template>
    <div class="form-group"> 
    <label class="control-label">Adult movie?</label>
        <div class="select-container">
            <div class="input-group">
                <span class="input-group-addon"></span>
                <select name="state" class="form-control selectpicker" >
                    <option value=" " >Please select a option</option>
                    <option 
                        v-for="opt of config.options" 
                        :key="opt"
                        :value="opt">{{opt}}</option>
                </select>
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
        .select-container {
            margin-left: 3px;
            select {
                padding-left: 3px;
                height: 2em;
                border: 1px solid rgba(68, 68, 68, 0.596);
                border-radius: 5px;
            }
        }
    }
</style>