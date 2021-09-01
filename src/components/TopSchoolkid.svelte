<script>
    export let topschoolkids;
    import { isAdmin } from '../store.js';
    import BtnEdit from '../components/BtnEdit.svelte';
</script>

{#each topschoolkids as topschoolkid}
<div class="content">
    <div class="title edit">
        {@html topschoolkid.title}
        {#if $isAdmin}<BtnEdit on:getDat datablock={topschoolkid.title} idline={topschoolkid.id} field={'title'} tedit={'light'} />{/if}
    </div>
    <div class="text edit">
        {@html topschoolkid.text}
        {#if $isAdmin}<BtnEdit on:getDat datablock={topschoolkid.text} idline={topschoolkid.id} field={'text'} tedit={'light'} />{/if}
    </div>
</div>
{/each} 


<style>
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
.text{
    position: relative;
    display: inline-block;
    font-size: 16px;
    line-height: 24px;
    color: #fff;
    margin-top: 45px;
}
</style>