<script>
	import BtnAdd from '../components/BtnAdd.svelte';
	import BtnDel from '../components/BtnDel.svelte';
	import BtnEdit from '../components/BtnEdit.svelte';
	import { isAdmin } from '../store.js';
  	export let reviews;
</script>

{#each reviews as review}
  	<div class="slide-content edit" style="background-image: url({review.image})">
		{#if $isAdmin}
			<BtnAdd on:addDat catData='reviews' imageData={true} cropadd = {{width: 600, height: 400}} />
			<BtnDel on:delDat idData={review.id} />
			<BtnEdit on:getDat datablock={review.image} idline={review.id} field={'image'} timage={true} cropS = {{width: 600, height: 400}} />
		{/if}
	</div>
{/each} 

<style>
.slide-content {
	position: relative;
	width: 100%;
	height: 400px;
	background-color: #fff;
	background-repeat: no-repeat;
	background-position: center center;
}

:global(.slide-content .btn) {
    top: 5px;
}
</style>