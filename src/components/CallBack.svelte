<script>
    import Button from '../components/Button.svelte';
    import ControlInput from '../components/ControlInput.svelte';
    import ControlTextarea from '../components/ControlTextarea.svelte';
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
      <ControlTextarea placeholder="Текст сообщения" />
  </div>
  <div class="callbackline rb">
    <Button title="отправить сообщение" />
  </div>
</div>