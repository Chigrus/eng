<script>
    export let skills;
    import { isAdmin } from '../store.js';
    import BtnEdit from '../components/BtnEdit.svelte';
</script>

<div class="content">
    {#each skills as skill}
        <div class="skill">
            <div class="title edit">
                {@html skill.title}
                {#if $isAdmin}<BtnEdit on:getDat datablock={skill.title} idline={skill.id} field={'title'} tedit={'light'} />{/if}
            </div>
            <div class="text edit">
                {@html skill.text}
                {#if $isAdmin}<BtnEdit on:getDat datablock={skill.text} idline={skill.id} field={'text'} tedit={'full'} />{/if}
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
        margin-top: 25px;
    }
    .skill{
        float: left;
        width: calc(100%/2);
        box-sizing: border-box;
        padding: 0 35px;
        margin-top: 30px;
    }
    .title{
        position: relative;
        float: left;
        display: flex;
        align-items: center;
        width: 100%;
        min-height: 54px;
        font-size: 20px;
        text-transform: uppercase;
        color: #1b1b1b;
        font-family: Carlito-Bold;
        box-sizing: border-box;
        padding-left: 70px;
    }
    .title::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 54px;
        height: 54px;
        background-color: #8d2326;
        background-image: url(/svg//skills/star.svg);
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 24px auto;
    }
    .title::after{
        content: '';
        position: absolute;
        top: 50%;
        left: 43px;
        margin-top: -20px;
        border: 20px solid transparent; 
        border-left: 20px solid #8d2326;
    }
    .text{
        position: relative;
        float: left;
        width: 100%;
        font-size: 16px;
        color: #1b1b1b;
        font-family: Carlito-Regular;
        line-height: 1.2em;
    }
    @media only screen and (max-width: 767px){
        .skill{
            width: 100%;
            padding: 0 20px;
        }
    }
</style>