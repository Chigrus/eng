<script>
    export let topfaq;
    import { isAdmin } from '../store.js';
    import BtnEdit from '../components/BtnEdit.svelte';
</script>

<div class="content">
    {#each topfaq as topfaq}
        <div class="title edit">
            {@html topfaq.title}
            {#if $isAdmin}<BtnEdit on:getDat datablock={topfaq.title} idline={topfaq.id} field={'title'} tedit={'light'} />{/if}
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
        color: #fff;
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
        background-color: #fff;
        margin-top: -2px;
    }
</style>