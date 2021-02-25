<script>
    import { createEventDispatcher } from 'svelte';

    export let idData = '';

    const dispatch = createEventDispatcher();

    function clickDel() {
        dispatch('delDat', {
            title: 'Вы действительно подтверждаете удаление записи?',
            delid: idData,
            alert: true
        });
    }
</script>

<span class="btn" on:click="{clickDel}" title="Удалить запись"></span>

<style>
    .btn{
        position: absolute;
        z-index: 10;
        top: 5px;
        right: 30px;
        width: 20px;
        height: 20px;
        background-image: url(/svg/del.svg);
        background-repeat: no-repeat;
        background-position: center center;
        background-size: contain;
        cursor: pointer;
        display: none;
    }
</style>