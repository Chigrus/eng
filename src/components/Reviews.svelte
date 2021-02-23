<script>
  export let reviews;
</script>

{#each reviews as review}
  <div class="slide-content" style="background-image: url({review.image})"></div>
{/each} 

<style>
.slide-content {
	width: 100%;
	height: 400px;
	background-color: #fff;
}
</style>