<script>
    export let teachings;
    import { isAdmin } from '../store.js';
    import BtnEdit from '../components/BtnEdit.svelte';
</script>

<div class="content">
    {#each teachings as teaching}
        <div class="block">
            <div class="title edit">
                {@html teaching.title}
                {#if $isAdmin}<BtnEdit on:getDat datablock={teaching.title} idline={teaching.id} field={'title'} tedit={'light'} />{/if}
            </div>
            <div class="text edit">
                {@html teaching.text}
                {#if $isAdmin}<BtnEdit on:getDat datablock={teaching.text} idline={teaching.id} field={'text'} tedit={'light'} />{/if}
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
        margin-top: 45px;
    }

    .block{
        position: relative;
        width: calc(100%/3);
        box-sizing: border-box;
        padding-left: 70px;
        padding-right: 25px;
        padding-bottom: 25px;
    }

    .block:nth-child(2){
        padding-left: 120px;
        border-left: 1px solid rgba(0,0,0,0.15);
        border-right: 1px solid rgba(0,0,0,0.15);
        width: calc(100%/3 - 45px);
        margin-right: 45px;
    }

    .block:nth-child(2):before{
        content: '';
        position: absolute;
        top: 0;
        left: -5px;
        width: 9px;
        height: 9px;
        border-radius: 50%;
        background-color: #915052;
    }

    .block:nth-child(2):after{
        content: '';
        position: absolute;
        top: 0;
        right: -5px;
        width: 9px;
        height: 9px;
        border-radius: 50%;
        background-color: #915052;
    }

    .title{
        position: relative;
        float: left;
        font-family: Carlito-Bold;
        font-size: 16px;
        color: #8d2326;
        box-sizing: border-box;
    }

    .title::before{
        content: '';
        position: absolute;
        top: 0;
        left: -70px;
        width: 45px;
        height: 45px;
        background-image: url(/svg/stars.svg);
        background-repeat: no-repeat;
        background-position: center center;
        background-size: contain;
    }

    .text{
        position: relative;
        float: left;
        width: 100%;
        margin-top: 15px;
        box-sizing: border-box;
        font-family: Carlito-Regular;
        font-size: 18px;
        color: #000;
        line-height: 1.3em;
    }
    @media only screen and (max-width: 1023px){
        .block{
            width: 100%;
            padding-left: 70px;
            padding-right: 0;
            padding-bottom: 25px;
        }
        .block:nth-child(2){
            padding-left: 70px;
            border: none;
            border-top: 1px solid rgba(0,0,0,0.15);
            border-bottom: 1px solid rgba(0,0,0,0.15);
            width:100%;
            margin: 20px 0;
            padding-top: 40px;
            padding-bottom: 40px;
        }
        .block:nth-child(2):before{
            top: -5px;
            left: 50%;
            margin-left: -5px;
        }

        .block:nth-child(2):after{
            top: auto;
            right: auto;
            bottom: -5px;
            left: 50%;
            margin-left: -5px;
        }
    }
</style>