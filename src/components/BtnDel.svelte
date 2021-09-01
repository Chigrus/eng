<script>
    import { createEventDispatcher } from 'svelte';

    export let btnName = '';
    export let titleAlert = '';
    export let tableName = '';
    export let idData = '';
    export let nameEvent = '';

    const dispatch = createEventDispatcher();

    function clickDel() {
        dispatch('delDat', {
            title: titleAlert,
            table: tableName,
            delid: idData,
            event: nameEvent,
            alert: true
        });
    }
</script>

<span class="btn {nameEvent}" on:click="{clickDel}" title={btnName}>{btnName}</span>

<style>
    .btn{
        position: absolute;
        z-index: 10;
        cursor: pointer;
        display: none;
        font-size: 0;
    }
    .btn.del{
        top: 5px;
        left: 5px;
        width: 20px;
        height: 20px;
        background-image: url(/svg/del.svg);
        background-repeat: no-repeat;
        background-position: center center;
        background-size: contain;
    }
    .btn.modify{
        display: block;
        top: 5px;
        right: 5px;
        font-size: 14px;
        background-image: url(/svg/addwhite.svg);
        background-repeat: no-repeat;
        background-position: left 8px center;
        background-color: green;
        background-size: 16px auto;
        color: #fff;
        padding: 6px 12px;
        padding-left: 34px;
    }
</style>