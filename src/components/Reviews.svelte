<script>
	import BtnDel from '../components/BtnDel.svelte';
	import { isAdmin } from '../store.js';
  	export let reviews;
</script>

{#each reviews as review}
  	<div class="slide-content" style="background-image: url({review.image})">
		{#if $isAdmin}<BtnDel on:delDat idData={review.id} />{/if}
	</div>
{/each} 

<style>
.slide-content {
	position: relative;
	width: 100%;
	height: 400px;
	background-color: #fff;
}
</style>