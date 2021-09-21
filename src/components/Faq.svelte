<script>
    export let faq;
    import { isAdmin } from '../store.js';
    import BtnEdit from '../components/BtnEdit.svelte';

    let openItem = 0;

    function openFaq(id){
        openItem = id;
    }
</script>

<div class="content">
    {#each faq as faq, i}
    <div class="{i === openItem ? 'faqblock open' : 'faqblock'}">
        <div class="title edit">
            {@html faq.title}
            {#if $isAdmin}<BtnEdit on:getDat datablock={faq.title} idline={faq.id} field={'title'} tedit={'light'} />{/if}
            <div class="btn" on:click={openFaq.bind(this, i)}></div>
        </div>
        <div class="text edit">
            {@html faq.text}
            {#if $isAdmin}<BtnEdit on:getDat datablock={faq.text} idline={faq.id} field={'text'} tedit={'full'} />{/if}
        </div>
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
        margin-top: 50px;
    }

    .faqblock{
        width: 100%;
        max-width: 860px;
    }

    .title{
        position: relative;
        float: left;
        width: 100%;
        font-family: Carlito-Bold;
        font-size: 18px;
        color: #fff;
        box-sizing: border-box;
        padding: 16px 0;
        padding-right: 50px;
        border-bottom: solid 1px rgba(255,255,255,0.2);
    }

    .title::before{
        content: '';
        position: absolute;
        bottom: -1px;
        left: 0;
        width: 50px;
        height: 2px;
        background-color: #ff0000;
    }

    .btn{
        position: absolute;
        top: 14px;
        right: 0;
        width: 30px;
        height: 30px;
        cursor: pointer;
    }

    .btn::before{
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        height: 3px;
        background-color: #fff;
        margin-top: -1px;
    }

     .btn::after{
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        width: 3px;
        height: 100%;
        background-color: #fff;
        margin-left: -1px;
    }

    .faqblock.open .btn::after{
        content: none;
    }

    .text{
        position: relative;
        float: left;
        width: 100%;
        color: #b6b6b6;
        font-size: 16px;
        line-height: 1.5em;
        padding-top: 15px;
        display: none;
        padding-right: 50px;
        box-sizing: border-box;
    }

    .faqblock.open  .text{
        display: block;
    }
</style>