<script>
    export let text = '';
    export let placeholder = '';
    export let isError = false;

    let ph = placeholder;

    function delPlaceholder(){
        ph = '';
        if (isError){
            isError = !isError;
        }
    }

    function outfocus(){
        if (text == ''){
            ph = placeholder;
        }
    }
</script>

<style>
.inputcontrol{
    width: 100%;
    height: 50px;
    box-sizing: border-box;
    padding: 0 20px;
    outline: none;
    font-size: 18px;
    margin: 0;
    font-family: Carlito;
}
.inputcontrol.error{
    border-color: red;
}
</style>

<input class="inputcontrol" class:error={isError} placeholder={ph} type="text" bind:value={text} on:focus="{delPlaceholder}" on:blur="{outfocus}" />