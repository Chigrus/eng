<script>
    export let textteaching;
    import { isAdmin } from '../store.js';
    import BtnEdit from '../components/BtnEdit.svelte';
</script>

<div class="content">
    {#each textteaching as textteaching}
        <div class="text edit">
            {@html textteaching.text}
            {#if $isAdmin}<BtnEdit on:getDat datablock={textteaching.text} idline={textteaching.id} field={'text'} tedit={'full'} />{/if}
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

    .text{
        position: relative;
        float: left;
        width: 50%;
        box-sizing: border-box;
    }

    .text:nth-child(1){
        padding-right: 50px;
        border-right: 1px solid rgba(0,0,0,0.15);
    }

    .text:nth-child(1)::before{
        content: "";
        position: absolute;
        top: 50%;
        right: -5px;
        width: 9px;
        height: 9px;
        margin-top: -4px;
        background-color: rgb(145, 80, 82);
        border-radius: 50%;
    }

    .text:nth-child(2){
        padding-left: 50px;
    }
</style>