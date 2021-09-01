<script>
    //import BtnAdd from '../components/BtnAdd.svelte';
	import BtnDel from '../components/BtnDel.svelte';
	//import BtnEdit from '../components/BtnEdit.svelte';
	import { isAdmin } from '../store.js';

  	export let newreviews;
</script>

{#each newreviews as review}
  	<div class="slide-content edit">
        {#if !review.status}
            <BtnDel on:delDat idData={review.id} tableName="reviews" titleAlert='Вы действительно подтверждаете размещение отзыва?' btnName='Разместить отзыв' nameEvent='modify' />
        {/if}
        {#if $isAdmin}
            <BtnDel on:delDat idData={review.id} tableName="reviews" titleAlert='Вы действительно подтверждаете удаление отзыва?' btnName='Удалить отзыв' nameEvent='del' />
        {/if}
        <div class="text">{review.text}</div>
        <div class="user">{review.user}</div>
	</div>
{/each} 

<style>
.slide-content{
	position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
	width: 100%;
    min-height: 340px;
    box-sizing: border-box;
    padding: 20px 40px;
	background-color: #fff;
	background-repeat: no-repeat;
	background-position: center center;
}
.text{
    float: left;
    width: 100%;
    text-align: center;
    font-size: 16px;
    line-height: 1.6em;
}
.user{
    float: left;
    width: 100%;
    text-align: center;
    font-size: 16px;
    line-height: 1.6em;
    font-weight: bold;
    margin-top: 30px;
    font-style: italic;
}

:global(.slide-content .btn) {
    top: 5px;
}
</style>