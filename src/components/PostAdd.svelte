<script>
    import Button from '../components/Button.svelte';
    import ButtonUploadFile from '../components/ButtonUploadFile.svelte';
    import Cropper from "svelte-easy-crop";

    export let massadd;

    let imgf, cropData;

    function closePopup(){
        massadd.popup = false;
        imgf = '';
    }
</script>

<div class="glass" class:open={massadd.popup}>
    <div class="popup">
        <div class="close" on:click={closePopup}></div>
        {#if massadd.title}
        <div class="linedata">
            <div class="label">Введите заголовок:</div>
            <input class="input" type="text" />
        </div>
        {/if}
        {#if massadd.subtitle}
        <div class="linedata">
            <div class="label">Введите подзаголовок:</div>
            <input class="input" type="text" />
        </div>
        {/if}
        {#if massadd.text}
        <div class="linedata">
            <div class="label">Введите текст:</div>
            <input class="input" type="text" />
        </div>
        {/if}
        {#if massadd.image}
        <div class="linedata">
            <div class="imagefield">
                <Cropper
                    image={imgf}
                    crop={{ x: 0, y: 0 }}
                    zoom={1}
                    minZoom={0.8}
                    maxZoom={2}
                    cropSize = {massadd.crop}
                    zoomSpeed={0.1}
                    restrictPosition={false}
                    on:cropcomplete={(event) => cropData = event.detail.pixels}
                />
            </div>
        </div>
        <ButtonUploadFile title={'Загрузить'} bind:imgf />
        {/if}
        {#if massadd.customfield}
        <div class="linedata">
            <div class="label">Введите дополнительный текст:</div>
            <input class="input" type="text" />
        </div>
        {/if}
        <div class="line">
            <Button title="Сохранить" />
        </div>
    </div>
</div>

<style>
.glass{
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    display: none;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
}

.glass.open{
    display: flex;
}

.popup{
    position: relative;
    width: calc(100% - 20px);
    max-width: 800px;
    height: auto;
    max-height: calc(100% - 40px);
    overflow-y: auto;
    background-color: #fff;
    border-radius: 3px;
    box-sizing: border-box;
    padding: 50px 20px 20px 20px;
}

.close{
    position: absolute;
    top: 10px;
    right: 10px;
    width: 18px;
    height: 18px;
    cursor: pointer;
    background-image: url(/svg/cancel.svg);
}

.linedata{
    float: left;
    width: 100%;
    margin-bottom: 15px;    
}

.line{
    float: left;
    width: 100%;
    display: flex;
    justify-content: flex-end;
}

.label{
    float: left;
    width: 100%;
}

.input{
    float: left;
    width: 100%; 
    height: 34px;
    box-sizing: border-box;
    padding: 0 10px;
}

.imagefield{
    position: relative;
    float: left;
    width: 100%;
    height: 530px;
    overflow: hidden;
}
</style>