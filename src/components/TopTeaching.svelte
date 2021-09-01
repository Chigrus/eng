<script>
    export let topteaching;
    import { isAdmin } from '../store.js';
    import BtnEdit from '../components/BtnEdit.svelte';
</script>

<div class="content">
    {#each topteaching as topteaching}
        <div class="title edit">
            {@html topteaching.title}
            {#if $isAdmin}<BtnEdit on:getDat datablock={topteaching.title} idline={topteaching.id} field={'title'} tedit={'light'} />{/if}
        </div>
    {/each}    
</div>

<style>
    .content{
        float: left;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .title{
        position: relative;
        float: left;
        font-family: Carlito-Bold;
        font-size: 18px;
        text-transform: uppercase;
        color: #000;
        box-sizing: border-box;
        padding-left: 70px;
        padding-right: 30px;
    }

    .title::before{
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        width: 50px;
        height: 1px;
        background-color: #000;
        margin-top: -2px;
    }
</style>