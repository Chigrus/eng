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
    .textcontrol{
        width: 100%;
        height: 140px;
        box-sizing: border-box;
        padding: 20px;
        resize: none;
        outline: none;
        font-size: 18px;
        font-family: Carlito;
    }
    .textcontrol.error{
        border-color: red;
    }
</style>

<textarea class="textcontrol" class:error={isError} placeholder={ph} bind:value={text} on:focus="{delPlaceholder}" on:blur="{outfocus}"></textarea>