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
    .textcontrol{
        width: 100%;
        height: 140px;
        box-sizing: border-box;
        padding: 20px;
        resize: none;
        outline: none;
        font-size: 18px;
    }
</style>

<textarea class="textcontrol" placeholder={ph} bind:value={text} on:focus="{delPlaceholder}" on:blur="{outfocus}"></textarea>