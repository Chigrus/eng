<script>
    export let quoteteaching;
    import { isAdmin } from '../store.js';
    import BtnEdit from '../components/BtnEdit.svelte';
</script>

<div class="content">
    {#each quoteteaching as quoteteaching}
        <div class="quote edit">
            {@html quoteteaching.text}
            {#if $isAdmin}<BtnEdit on:getDat datablock={quoteteaching.text} idline={quoteteaching.id} field={'text'} tedit={'light'} />{/if}
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

    .quote{
        position: relative;
        float: left;
        font-family: Cambria;
        font-size: 18px;
        line-height: 1.2em;
        color: #000;
        box-sizing: border-box;
        background-color: #f9f7f7;
        padding: 25px 40px;
        margin: 30px 0;
        border-left: solid 6px #8d2326;
    }

    .quote::before{
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        margin-top: -10px;
        border: 10px solid transparent; 
        border-left: 10px solid #8d2326;
    }
</style>