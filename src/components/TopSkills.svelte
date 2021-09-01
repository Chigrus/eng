<script>
    export let topskills;
    import { isAdmin } from '../store.js';
    import BtnEdit from '../components/BtnEdit.svelte';
</script>

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
        color: #8d2326;
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
        background-color: #8d2326;
        margin-top: -2px;
    }

    .line{
        display: flex;
        justify-content: center;
        width: 100%;
        margin-top: 40px;
    }

    .text{
        position: relative;
        width: 100%;
        max-width: 840px;
        color: #010101;
        font-size: 22px;
        line-height: 1.3em;
        font-family: Cambria;
        text-align: center;
        box-sizing: border-box;
    }
</style>

<div class="content">
    {#each topskills as topskill}
        <div class="title edit">
            {@html topskill.title}
            {#if $isAdmin}<BtnEdit on:getDat datablock={topskill.title} idline={topskill.id} field={'title'} tedit={'light'} />{/if}
        </div>
        <div class="line">
            <div class="text edit">
                {@html topskill.text}
                {#if $isAdmin}<BtnEdit on:getDat datablock={topskill.text} idline={topskill.id} field={'text'} tedit={'light'} />{/if}
            </div>
        </div>
    {/each}    
</div>