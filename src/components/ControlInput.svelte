<script>
    export let text = '';
    export let placeholder = '';

    let ph = placeholder;

    function delPlaceholder(){
        ph = '';
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
}
</style>

<input class="inputcontrol" placeholder={ph} type="text" bind:value={text} on:focus="{delPlaceholder}" on:blur="{outfocus}" />