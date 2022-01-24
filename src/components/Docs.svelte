<script>
    import { createEventDispatcher } from 'svelte';
    import { isAdmin } from '../store.js';
    import BtnEdit from '../components/BtnEdit.svelte';
  	
    export let docs;

    const dispatch = createEventDispatcher();
</script>

{#each docs as doc}
  	<div class="doc">
        <div class="title edit">
            {@html doc.title}
            {#if $isAdmin}<BtnEdit on:getDat datablock={doc.title} idline={doc.id} field={'title'} tedit={'light'} />{/if}
        </div>
        <div class="text edit">
            {@html doc.text}
            {#if $isAdmin}<BtnEdit on:getDat datablock={doc.text} idline={doc.id} field={'text'} tedit={'full'} />{/if}
        </div>
        <div class="look" on:click={() => dispatch('setLightBox', {isOpen: true, content: doc.image})}>Смотреть</div>
    </div>
{/each} 

<style>
.doc{
    position: relative;
    height: 100%;
    border-radius: 10px;
    margin: 0 20px;
    overflow: hidden;
    box-sizing: border-box;
    padding-left: 85px;
}
.doc::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 62px;
    height: 74px;
    background-image: url(/svg/doc.svg);
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: contain;
}
.title{
    position: relative;
    float: left;
    width: 100%;
    text-transform: uppercase;
    font-family: Carlito-Bold;
    font-size: 18px;
    line-height: 1.3em;
}
.text{
    position: relative;
    float: left;
    width: 100%;
    box-sizing: border-box;
    font-size: 14px;
    color: #606060;
    margin: 15px 0;
}
.look{
    font-family: Carlito-Bold;
    font-size: 16px;
    color: #8d2326;
    cursor: pointer;
}

.look:hover{
    text-decoration: underline;
}

@media only screen and (max-width: 1023px){
    .doc{
        padding-left: 70px;
    } 
}
</style>