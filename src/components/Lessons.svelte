<script>
    import { isAdmin } from '../store.js';
    import BtnEdit from '../components/BtnEdit.svelte';
  	
    export let lessons;
</script>

{#each lessons as lesson}
  	<div class="lesson">
        <div class="image edit" style="background-image: url({lesson.image});">
            {#if $isAdmin}<BtnEdit on:getDat datablock={lesson.image} idline={lesson.id} field={'image'} timage={true} cropS = {{width: 370, height: 180}} />{/if}
        </div>
        <div class="text edit">
            {@html lesson.text}
            {#if $isAdmin}<BtnEdit on:getDat datablock={lesson.text} idline={lesson.id} field={'text'} tedit={'light'} />{/if}
        </div>
    </div>
{/each} 

<style>
.lesson{
    height: 100%;
    background-color: #fff;
    border-radius: 10px;
    margin: 0 15px;
    overflow: hidden;
}
.image{
    position: relative;
    float: left;
    width: 100%;
    height: 180px;
    background-color: rgba(0,0,0,0.1);
    background-repeat: no-repeat;
    background-position: top center;
}
.text{
    position: relative;
    float: left;
    width: 100%;
    box-sizing: border-box;
    padding: 30px 20px;
    font-size: 18px;
}
</style>