<script context="module">
	export function preload() {
		const req1 = this.fetch('menu.json').then(r => r.json())
		const req2 = this.fetch('general.json').then(r => r.json())
		const req3 = this.fetch('content.json').then(r => r.json())
		const req4 = this.fetch('token').then(r => r.json())
		return 	Promise.all([
			req1, req2, req3, req4
		])
		.then(([menu, general, content, user]) => {
			const req5 = this.fetch('newreviews.json?status=' + user.isAdmin).then(r => r.json())
			return Promise.all([
				menu, general, content, user, req5
			])
			.then(([menu, general, content, user, newreviews]) => {
				return { menu, general, content, user, newreviews };
			});
		});
	}
</script>

<script>
	import { isAdmin } from '../store.js';
	
	import Menu from '../components/Menu.svelte';
	import Phone from '../components/Phone.svelte';
	import CompanyName from '../components/CompanyName.svelte';
	import CompanySubName from '../components/CompanySubName.svelte';
	import About from '../components/About.svelte';
	import Advantages from '../components/Advantages.svelte';
	import TopPrices from '../components/TopPrices.svelte';
	import Prices from '../components/Prices.svelte';
	import PostEditor from '../components/PostEditor.svelte';
	import Alert from '../components/Alert.svelte';
	import PostAdd from '../components/PostAdd.svelte';
	import TopReviews from '../components/TopReviews.svelte';
	import Reviews from '../components/Reviews.svelte';
	import NewReviews from '../components/NewReviews.svelte';
	import ReviewsPopup from '../components/ReviewsPopup.svelte';
	import TopCallBack from '../components/TopCallBack.svelte';
	import CallBack from '../components/CallBack.svelte';
	import TopSkills from '../components/TopSkills.svelte';
	import TopLessons from '../components/TopLessons.svelte';
	import Lessons from '../components/Lessons.svelte';
	import Skills from '../components/Skills.svelte';
	import TopSchoolkid from '../components/TopSchoolkid.svelte';
	import ContentSchoolkid from '../components/ContentSchoolkid.svelte';
	import TopTeaching from '../components/TopTeaching.svelte';
	import Teaching from '../components/Teaching.svelte';
	import QuoteTeaching from '../components/QuoteTeaching.svelte';
	import TextTeaching from '../components/TextTeaching.svelte';
	import TopDocs from '../components/TopDocs.svelte';
	import Docs from '../components/Docs.svelte';
	import LightBox from '../components/LightBox.svelte';
	import TopFaq from '../components/TopFaq.svelte';
	import Faq from '../components/Faq.svelte';
	import AboutFooter from '../components/AboutFooter.svelte';

	import Carousel from '@beyonk/svelte-carousel';

	export let menu;
	export let general;
	export let content;
	export let newreviews;
	//let newreviews = {};

	export let user;
	isAdmin.set(user.isAdmin);
	
	let about = content.filter(dataline => dataline.category === 'about');
	let advantages = content.filter(dataline => dataline.category === 'advantages');
	let topprices = content.filter(dataline => dataline.category === 'topprices');
	let prices = content.filter(dataline => dataline.category === 'prices');
	let topreviews = content.filter(dataline => dataline.category === 'topreviews');
	let reviews = content.filter(dataline => dataline.category === 'reviews');
	let topcallback = content.filter(dataline => dataline.category === 'topcallback');
	let topskills = content.filter(dataline => dataline.category === 'topskills');
	let skills = content.filter(dataline => dataline.category === 'skills');
	let toplessons = content.filter(dataline => dataline.category === 'toplessons');
	let lessons = content.filter(dataline => dataline.category === 'lessons');
	let topschoolkids = content.filter(dataline => dataline.category === 'topschoolkid');
	let schoolkids = content.filter(dataline => dataline.category === 'schoolkid');
	let experience = content.filter(dataline => dataline.category === 'experience');
	let topteaching = content.filter(dataline => dataline.category === 'topteaching');
	let teachings = content.filter(dataline => dataline.category === 'teaching');
	let quoteteaching = content.filter(dataline => dataline.category === 'quoteteaching');
	let textteaching = content.filter(dataline => dataline.category === 'textteaching');
	let topdocs = content.filter(dataline => dataline.category === 'topdocs');
	let docs = content.filter(dataline => dataline.category === 'docs');
	let topfaq = content.filter(dataline => dataline.category === 'topfaq');
	let faq = content.filter(dataline => dataline.category === 'faq');
	let aboutfooter = content.filter(dataline => dataline.category === 'aboutfooter');
	let phone = general[0].phone;
	let mail = general[0].email;
	let companyname = general[0].name;
	let companysubname = general[0].subname;
	let masspopup = {};
	let massdel = {};
	let massadd = {};
	let reviewdata = {};

	function addReview(){
		reviewdata.isOpen = true;
	}

	let isOpenMenu = false;

	function openMenu(){
		isOpenMenu = true;
	}

	let lightbox = {
        isOpen: false,
        content: '',
    };

</script>

<svelte:head>
	<title>Репетитор по английскому языку по скайпу для школьников и взрослых | Engwell</title>
	<meta name="description" content="Сайт репетитора по английскому языку по скайпу. Дистанционные онлайн-уроки английского для детей и взрослых. Понятные объяснения. Результат после первых занятий." />
</svelte:head>

<PostEditor {masspopup} bind:urlI={about[0].image} />
<Alert {massdel} />
<PostAdd {massadd} />
<ReviewsPopup {reviewdata} />

<LightBox {lightbox} />

<div class="flyheader">
	<div class="work work__header">
		<div class="header">
			<div class="logo"></div>
			<div class="company">
				<CompanyName {companyname} />
				<CompanySubName {companysubname} />
			</div>
			<div class="emptyFlex"></div>
			<Menu {menu} bind:isOpenMenu={isOpenMenu} />
			<div class="emptyFlex"></div>
			<Phone {phone} />
			<div class="mobMenu" on:click={openMenu}></div>
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
<div id="services" class="wrap wrap__prices">
	<div class="work">
		<TopPrices on:getDat={(event) => { masspopup = event.detail; }} {topprices} />
		<Prices on:getDat={(event) => { masspopup = event.detail; }} {prices} />
	</div>
</div>
<div id="reviews" class="wrap wrap__reviews">
	<div class="work">
		<TopReviews on:getDat={(event) => { masspopup = event.detail; }} {topreviews} />
		<div class="slider rw">
			<span class="addReview" on:click="{addReview}">Добавить отзыв</span>
			<Carousel perPage=1>
				<NewReviews 
					{newreviews} 
					on:delDat={(event, args) => { massdel = event.detail; }}
				/>
			</Carousel>
		</div>
	</div>
</div>
<div id="registration" class="wrap wrap__prices">
	<div class="work">
		<TopCallBack on:getDat={(event) => { masspopup = event.detail; }} {topcallback} />
		<CallBack />
	</div>
</div>
<div id="advantages" class="wrap wrap__reviews">
	<div class="work">
		<TopSkills on:getDat={(event) => { masspopup = event.detail; }} {topskills} />
		<Skills on:getDat={(event) => { masspopup = event.detail; }} {skills} />
	</div>
</div>
<div id="gallery" class="wrap wrap__lessons">
	<div class="work">
		<TopLessons on:getDat={(event) => { masspopup = event.detail; }} {toplessons} />
		<div class="slider_lessons">
			<Carousel perPage={{ 1200: 3, 768: 2 }}>
				<Lessons on:getDat={(event) => { masspopup = event.detail; }} {lessons} />
			</Carousel>
		</div>
	</div>
</div>
<div class="wrap wrap__prices">
	<div class="work">
		<div class="schoolkid__left">
			<TopSchoolkid on:getDat={(event) => { masspopup = event.detail; }} {topschoolkids} />
		</div>
		<div class="schoolkid__right">
			<ContentSchoolkid on:getDat={(event) => { masspopup = event.detail; }} {schoolkids} />
		</div>
	</div>
</div>
<div id="experience" class="wrap wrap__experience">
	<div class="work">
		<About on:getDat={(event) => { masspopup = event.detail; }} about = {experience} />
	</div>
</div>
<div class="wrap">
	<div class="work">
		<TopTeaching on:getDat={(event) => { masspopup = event.detail; }} {topteaching} />
		<Teaching on:getDat={(event) => { masspopup = event.detail; }} {teachings} />
	</div>
</div>
<!-- <div class="wrap">
	<div class="work">
		<QuoteTeaching on:getDat={(event) => { masspopup = event.detail; }} {quoteteaching} />
	</div>
</div> -->
<div class="wrap wrap__textteaching">
	<div class="work">
		<TextTeaching on:getDat={(event) => { masspopup = event.detail; }} {textteaching} />
	</div>
</div>
<div class="wrap wrap__lessons">
	<div class="work">
		<TopDocs on:getDat={(event) => { masspopup = event.detail; }} {topdocs} />
		<div class="slider_docs">
			<Carousel perPage={{ 1200: 3, 768: 2 }}>
				<Docs on:setLightBox={(event) => { lightbox = event.detail; }} on:getDat={(event) => { masspopup = event.detail; }} {docs} />
			</Carousel>
		</div>
	</div>
</div>
<div class="wrap wrap__prices">
	<div class="work">
		<TopFaq on:getDat={(event) => { masspopup = event.detail; }} {topfaq} />
		<Faq on:getDat={(event) => { masspopup = event.detail; }} {faq} />
	</div>
</div>
<div class="wrap wrap__about">
	<div class="work">
		<AboutFooter on:getDat={(event) => { masspopup = event.detail; }} {aboutfooter} {phone} {mail} />
	</div>
</div>
<div class="wrap wrap__footer">
	<div class="work">
		<div class="footer">© 2021 www.engwell.ru</div>
	</div>
</div>

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

	.mobMenu{
		display: none;
	}

	.addReview{
		position: absolute;
		top: 5px;
		left: 50%;
		margin-left: -300px;
		display: flex;
		align-items: center;
		height: 30px;
		cursor: pointer;
		padding-left: 32px;
		font-size: 16px;
	}
	.addReview:hover{
		color: #8d2326;
	}
	.addReview::before{
		content: '+';
		position: absolute;
		top: 50%;
		left: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 24px;
		height: 24px;
		margin-top: -12px;
		border-radius: 3px;
		background-color: #8d2326;
		font-size: 20px;
		color: #fff;
		transition-duration: 0.4s;
	}
	.addReview:hover::before{
		transform: rotate(45deg);
		transform-origin: center center;
		transition-duration: 0.4s;
	}
	
	.work__header{
		height: 100%;
	}
	.wrap__about{
		padding: 90px 0;
	}
	.wrap__experience{
		padding-top: 90px;
	}
	.wrap__advantages, .wrap__lessons{
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

	.wrap__footer{
		padding: 30px 0;
		background-color: #000000;
	}
	.wrap__prices .work,
	.wrap__footer .work{
		position: relative;
		z-index: 1;
	}
	.wrap__prices::before,
	.wrap__footer::before{
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
	
	.footer{
		float: left;
		width: 100%;
		box-sizing: border-box;
		color: #fff;
		font-size: 16px;
		text-align: center;
	}
	.wrap__reviews{
		padding: 90px 0;
	}
	.wrap__lessons{
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

	.slider.rw{
		height: auto;
	}

	:global(.slider.rw .slides > div){
		display: flex;
		background-color: #fff;
	}

	:global(.slider.rw .slides > div > div){
		display: flex;
		align-items: center;
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
	:global(.slider .carousel > ul li){
		border-radius: 50%;
		width: 10px;
		height: 10px;
	}
	:global(.slider .carousel > ul li),
	:global(.slider .carousel > ul li:hover){
		background-color: rgba(0,0,0,0.2);
		cursor: pointer;
	}
	:global(.slider .carousel > ul li.active){
		background-color: #8d2326;
	}
	.slider_lessons{
		position: relative;
		z-index: 1;
		float: left;
		width: 100%;
		margin-top: 20px;
		box-sizing: border-box;
		padding-bottom: 50px;
	}

	:global(.slider_lessons .carousel .left),
	:global(.slider_lessons .carousel .right){
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
	
	:global(.slider_lessons .carousel .left){
		left: -75px;
		transform: rotate(180deg);
	}
	:global(.slider_lessons .carousel .right){
		right: -75px;
	}
	:global(.slider_lessons .carousel > ul){
		bottom: -50px;
	}
	:global(.slider_lessons .carousel > ul li){
		border-radius: 50%;
		width: 10px;
		height: 10px;
	}
	:global(.slider_lessons .carousel > ul li),
	:global(.slider_lessons .carousel > ul li:hover){
		background-color: rgba(0,0,0,0.2);
		cursor: pointer;
	}
	:global(.slider_lessons .carousel > ul li.active){
		background-color: #8d2326;
	}
	:global(.slider_lessons .carousel .slides > div){
		display: flex;
	}

	.slider_docs{
		position: relative;
		z-index: 1;
		float: left;
		width: 100%;
		margin-top: 50px;
		box-sizing: border-box;
		padding-bottom: 50px;
	}

	:global(.slider_docs .carousel .left),
	:global(.slider_docs .carousel .right){
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
	
	:global(.slider_docs .carousel .left){
		left: -75px;
		transform: rotate(180deg);
	}
	:global(.slider_docs .carousel .right){
		right: -75px;
	}
	:global(.slider_docs .carousel > ul){
		bottom: -50px;
	}
	:global(.slider_docs .carousel > ul li){
		border-radius: 50%;
		width: 10px;
		height: 10px;
	}
	:global(.slider_docs .carousel > ul li),
	:global(.slider_docs .carousel > ul li:hover){
		background-color: rgba(0,0,0,0.2);
		cursor: pointer;
	}
	:global(.slider_docs .carousel > ul li.active){
		background-color: #8d2326;
	}
	:global(.slider_docs .carousel .slides > div){
		display: flex;
	}
	.schoolkid__left{
		float: left;
		width: 460px;
	}
	.schoolkid__right{
		float: left;
		width: calc(100% - 460px);
		box-sizing: border-box;
		padding-top: 54px;
		padding-left: 100px;
	}

	.wrap__textteaching{
		padding-bottom: 75px;
	}

	@media only screen and (max-width: 1365px){
		.wrap__lessons .work{
			max-width: calc(100% - 200px);
		}
		.wrap__advantages, .wrap__lessons{
			background-size: cover;
		}
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
		:global(.slider .carousel .left){
			left: -75px;
			transform: rotate(180deg);
		}
		:global(.slider .carousel .right){
			right: -75px;
		}
		.schoolkid__right{
			padding-left: 50px;
		}
		.slider{
			padding: 150px;
		}
		.mobMenu{
			display: block;
			width: 40px;
			min-width: 40px;
			height: 40px;
			margin-left: 40px;
			background-image: url(/svg/menu.svg);
			background-position: center center;
			background-repeat: no-repeat;
			background-size: contain;
		}
	}
	@media only screen and (max-width: 1023px){
		.wrap__advantages{
			background-size: cover;
		}
		.wrap__about{
			padding-bottom: 40px;
		}
		.schoolkid__left{
			width: 100%;
			padding: 0 20px;
			box-sizing: border-box;
		}
		.schoolkid__right{
			width: 100%;
			padding-top: 0;
			padding-left: 0;
			margin-top: 40px;
		}
	}
	@media only screen and (max-width: 767px){
		.slider{
			padding: 75px;
		}
	}

	@media only screen and (max-width: 639px){
		.wrap .slider{
			padding: 75px 20px;
		}

		:global(.wrap .slider .carousel .left){
			left: -20px;
		}
		:global(.wrap .slider .carousel .right){
			right: -20px;
		}

		.addReview{
			left: 0;
			margin-left: 0;
		}
		.wrap__lessons .work{
			max-width: calc(100% - 160px);
		}

		:global(.slider_docs .carousel .left){
			left: -20px;
		}
		:global(.slider_docs .carousel .right){
			right: -20px;
		}
	}

	@media only screen and (max-width: 599px){
		.mobMenu{
			margin-left: 20px;
		}
	}

	@media only screen and (max-width: 539px){
		:global(.wrap .slider .carousel .left),
		:global(.wrap .slider .carousel .right),
		:global(.slider_docs .carousel .left),
		:global(.slider_docs .carousel .right),
		:global(.slider_lessons .carousel .left),
		:global(.slider_lessons .carousel .right){
			display: none;
		}

		.wrap__lessons .work{
			max-width: calc(100% - 40px);
		}

		:global(.slider .carousel::before){
			content: none;
		}
	}

	@media only screen and (max-width: 480px){
		.wrap__advantages{
			background: none;
		}
	}

	@media only screen and (max-width: 349px){
		.company{
			margin-left: 10px;
		}

		:global(.slider_docs .carousel > ul li){
			margin: 5px 3px;
		}
	}
	</style>