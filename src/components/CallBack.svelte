<script>
    //export let topcallback;
    import Button from '../components/Button.svelte';
    import ControlInput from '../components/ControlInput.svelte';
    let un = '';
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
    .textmessage{
        width: 100%;
        height: 140px;
        box-sizing: border-box;
        padding: 20px;
        resize: none;
        outline: none;
        font-size: 18px;
    }

    .cbinp{
        width: calc(100%/2 - 15px);
    }

    .cbinp.r{
        margin-left: 30px;
    }
</style>

<div class="callbackform">
  <div class="callbackline">
    <div class="cbinp">
        <ControlInput placeholder="Ваше имя" />
    </div>
    <div class="cbinp r">
        <ControlInput placeholder="Ваш телефон" />
    </div>
  </div>
  <div class="callbackline">
      <textarea class="textmessage" placeholder="Текст сообщения"></textarea>
  </div>
  <div class="callbackline rb">
    <Button title="отправить сообщение" />
  </div>
</div>