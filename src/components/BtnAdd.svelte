<script>
    import { createEventDispatcher } from 'svelte';

    export let titleData = false;
    export let subtitleData = false;
    export let textData = false;
    export let imageData = false;
    export let customfieldData = false;
    export let catData = '';
    export let cropadd = {};

    const dispatch = createEventDispatcher();

    function clickAdd() {
        dispatch('addDat', {
            popup: true,
            title: titleData,
            subtitle: subtitleData,
            text: textData,
            image: imageData,
            customfield: customfieldData,
            cat: catData,
            crop: cropadd
        });
    }
</script>

<span class="btn" on:click="{clickAdd}" title="Добавить запись"></span>

<style>
    .btn{
        position: absolute;
        z-index: 10;
        top: 5px;
        right: 60px;
        width: 20px;
        height: 20px;
        background-image: url(/svg/add.svg);
        background-repeat: no-repeat;
        background-position: center center;
        background-size: contain;
        cursor: pointer;
        display: none;
    }
</style>