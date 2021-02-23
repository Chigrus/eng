<script context="module">
	export function preload() {
		const req1 = this.fetch('menu.json').then(r => r.json())
		const req2 = this.fetch('general.json').then(r => r.json())
		const req3 = this.fetch('content.json').then(r => r.json())
		return 	Promise.all([
			req1, req2, req3
		])
		.then(([menu, general, content]) => {
			return { menu, general, content };
		})
	}
</script>

<script>
	import Menu from '../components/Menu.svelte';
	import Phone from '../components/Phone.svelte';
	import CompanyName from '../components/CompanyName.svelte';
	import CompanySubName from '../components/CompanySubName.svelte';
	import About from '../components/About.svelte';
	import Advantages from '../components/Advantages.svelte';
	import TopPrices from '../components/TopPrices.svelte';
	import Prices from '../components/Prices.svelte';
	import PostEditor from '../components/PostEditor.svelte';
	import TopReviews from '../components/TopReviews.svelte';
	import Reviews from '../components/Reviews.svelte';

	import Carousel from '@beyonk/svelte-carousel';

	export let menu;
	export let general;
	export let content;
	let about = content.filter(dataline => dataline.category === 'about');
	let advantages = content.filter(dataline => dataline.category === 'advantages');
	let topprices = content.filter(dataline => dataline.category === 'topprices');
	let prices = content.filter(dataline => dataline.category === 'prices');
	let topreviews = content.filter(dataline => dataline.category === 'topreviews');
	let reviews = content.filter(dataline => dataline.category === 'reviews');
	let phone = general[0].phone;
	let companyname = general[0].name;
	let companysubname = general[0].subname;
	let masspopup = {};

	
</script>
<style>
.wrap{
	position: relative;
	float: left;
	width: 100%;
}
.work{
	width: 100%;
	max-width: 1200px;
	margin: auto;
}

.emptyFlex{
 flex-grow: 1;
}

.work__header{
	height: 100%;
}
.wrap__about{
	padding: 90px 0;
}
.wrap__advantages{
	padding: 40px 0;
	border-bottom: 3px solid #8d2326;
	background-color: #f9f7f7;
	background-image: url(/svg/advantages/bg.svg);
	background-repeat: no-repeat;
    background-position: top center;
    background-size: 100% auto;
}
.wrap__prices{
	padding: 90px 0;
	background-color: #000000;
}
.wrap__prices .work{
	position: relative;
	z-index: 1;
}
.wrap__prices::before{
	content: '';
	position: absolute;
	z-index: 0;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-image: url(/svg/prices/bg.svg);
	background-repeat: no-repeat;
    background-position: bottom center;
    background-size: 100% auto;
	opacity: 0.25;
}

.wrap__reviews{
	padding: 90px 0;
}
.flyheader{
	position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
	background-color: #fff2f2;
	box-shadow: 0px 0px 10px 0px rgba(50, 50, 50, 0.12);
}
.header{
	float: left;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
}

.logo{
	width: 64px;
	height: 64px;
	background-image: url(/svg/logo.svg);
	background-repeat: no-repeat;
	background-position: center center;
	background-size: contain;
}

.company{
	margin-left: 20px;
}

.slider{
	position: relative;
	z-index: 1;
	float: left;
	width: 100%;
	height: 500px;
	background: rgba(255,255,255,1);
	margin-top: 50px;
	box-sizing: border-box;
	padding: 60px 300px;
	padding-bottom: 40px;
	overflow: hidden;
}
:global(.slider .carousel){
	box-sizing: border-box;
  	border: 1px solid rgba(0,0,0,0.1);
}
:global(.slider .carousel::before){
	content: '';
	position: absolute;
	z-index: 0;
	top: -60px;
	right: -80px;
	width: 260px;
	height: 260px;
	background-image: url(/svg/bgphotos.svg);
    background-repeat: repeat;
    background-position: top left;
    background-size: 50px 50px;
}
:global(.slider .carousel .left),
:global(.slider .carousel .right){
	width: 60px;
	height: 60px;
	border-radius: 50%;
	cursor: pointer;
	background-color: #8d2326;
	background-repeat: no-repeat;
	background-position: 16px center;
	background-image: url(/svg/reviews/next.svg);
	background-size: 32px auto;
}

:global(.slider .carousel .left){
	left: -175px;
	transform: rotate(180deg);
}
:global(.slider .carousel .right){
	right: -175px;
}
:global(.slider .carousel > ul){
	bottom: -50px;
}
:global(.slider .carousel > ul li),
:global(.slider .carousel > ul li:hover){
	background-color: rgba(0,0,0,0.2);
	cursor: pointer;
}
:global(.slider .carousel > ul li.active){
	background-color: #8d2326;
}

@media only screen and (max-width: 1200px){
	.work{
		max-width: calc(100% - 20px);
	}
}
@media only screen and (max-width: 1199px){
	.wrap__prices::before{
		background-size: cover;
	}
}
@media only screen and (max-width: 1023px){
	.wrap__advantages{
		background-size: cover;
	}
	.wrap__about{
		padding-bottom: 40px;
	}
}
</style>

<svelte:head>
	<title>Английский язык. Репетитор по скайпу для школьников и взрослых</title>
	<meta name="description" content="Сайт репетитора по английскому языку по скайпу. Дистанционные уроки английского для детей и взрослых. Понятные объяснения. Результат после первых занятий." />
</svelte:head>

<PostEditor {masspopup} bind:urlI={about[0].image} />

<div class="flyheader">
	<div class="work work__header">
		<div class="header">
			<div class="logo"></div>
			<div class="company">
				<CompanyName {companyname} />
				<CompanySubName {companysubname} />
			</div>
			<div class="emptyFlex"></div>
			<Menu {menu} />
			<div class="emptyFlex"></div>
			<Phone {phone} />
		</div>
	</div>
</div>
<div class="wrap wrap__about">
	<div class="work">
		<About on:getDat={(event) => { masspopup = event.detail; }} {about} />
	</div>
</div>
<div class="wrap wrap__advantages">
	<div class="work">
		<Advantages on:getDat={(event) => { masspopup = event.detail; }} {advantages} />
	</div>
</div>
<div class="wrap wrap__prices">
	<div class="work">
		<TopPrices on:getDat={(event) => { masspopup = event.detail; }} {topprices} />
		<Prices on:getDat={(event) => { masspopup = event.detail; }} {prices} />
	</div>
</div>
<div class="wrap wrap__reviews">
	<div class="work">
		<TopReviews on:getDat={(event) => { masspopup = event.detail; }} {topreviews} />
		<div class="slider">
			<Carousel perPage=1>
				<Reviews {reviews} />
			</Carousel>
		</div>
	</div>
</div>