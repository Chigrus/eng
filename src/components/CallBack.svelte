<script>
    //export let topcallback;
    import Button from '../components/Button.svelte';
    let name = 'Ваше имя';
    let username = '';
    
    function delPlaceholder(){
        name = '';
    }

    function outfocus(){
        if (username == ''){
            name = 'Ваше имя';
        }
    }
</script>

<style>
    .callbackform{
        float: left;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .callbackline{
        display: flex;
        width: 100%;
        margin-top: 30px;
    }
    .callbackline.rb{
       justify-content: flex-end;
    }

    .callbackinput{
        width: calc(100%/2 - 15px);
        height: 50px;
        box-sizing: border-box;
        padding: 0 20px;
        outline: none;
        font-size: 18px;
        margin: 0;
    }

    .callbackinput.right{
        margin-left: 30px;
    }

    .textmessage{
        width: 100%;
        height: 140px;
        box-sizing: border-box;
        padding: 20px;
        resize: none;
        outline: none;
        font-size: 18px;
    }
</style>

<div class="callbackform">
  <div class="callbackline">
    <input class="callbackinput" placeholder={name} type="text" bind:value={username} on:focus="{delPlaceholder}" on:blur="{outfocus}" />
    <input class="callbackinput right" placeholder="Ваш телефон" type="text" />
  </div>
  <div class="callbackline">
      <textarea class="textmessage" placeholder="Текст сообщения"></textarea>
  </div>
  <div class="callbackline rb">
    <Button title="отправить сообщение" />
  </div>
</div>