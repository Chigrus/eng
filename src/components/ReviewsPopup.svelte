<script>
    import { onMount } from 'svelte';

    import Button from '../components/Button.svelte';
    import ControlInput from '../components/ControlInput.svelte';
    import ControlTextarea from '../components/ControlTextarea.svelte';

    export 	let reviewdata = {
		isOpen: false,
		user: '',
		text: ''
	};

    let errorName = false;
    let errorReview = false;
    let isSuccess = false;

    onMount(async () => {
		if(localStorage.getItem('setreview')){
            isSuccess = true; 
        }
	});

    function close(){
        reviewdata.isOpen = false;
        reviewdata.user = '';
        reviewdata.text = '';
    }

    function addreview(){
        if(reviewdata.user == ''){
            errorName = true;
        }
        if(reviewdata.text == ''){
            errorReview = true;
        }
        if(reviewdata.user != '' && reviewdata.text != ''){
            fetch('/addreview', 
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        data: reviewdata
                    })
                })
                .then(response => response.json())
                .then(data => {
                    isSuccess = true;
                    localStorage.setItem('setreview', 'success'); 
                });
        }
    }
</script>

<div class="glass" class:open={reviewdata.isOpen}>
    <div class="popup">
        <span class="close" on:click={close}></span>
        <div class="bgpopup"></div>
        <div class="form">
            <div class="title">Оставить отзыв</div>
            {#if !isSuccess}
            <div class="process">
                <div class="line">
                    <ControlInput bind:text={reviewdata.user} bind:isError={errorName} placeholder="Ваше имя" />
                </div>
                <div class="line">
                    <ControlTextarea bind:text={reviewdata.text} bind:isError={errorReview} placeholder="Ваш отзыв" />
                </div>
                <Button title="Оставить отзыв" on:click="{addreview}"/>
            </div>
            {/if}
            {#if isSuccess}
                <div class="success">Спасибо за Ваш отзыв, после модерации я размещу его на сайте!</div>
            {/if}
        </div>
    </div>
</div>

<style>
.glass{
    position: fixed;
    z-index: 110;
    top: 0;
    left: 0;
    display: none;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: rgba(255,255,255,0.97);
}
.glass.open{
    display: flex;
}
.popup{
    position: relative;
    width: calc(100% - 40px);
    max-width: 760px;
    height: calc(100vh - 40px);
    max-height: 640px;
    background-color: #fff;
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid rgba(0,0,0,0.2);
    -webkit-box-shadow: 0px 0px 25px 0px rgba(50, 50, 50, 0.4);
    -moz-box-shadow: 0px 0px 25px 0px rgba(50, 50, 50, 0.4);
    box-shadow: 0px 0px 25px 0px rgba(50, 50, 50, 0.4);
}
.close{
    position: absolute;
    top: 10px;
    right: 10px;
    width: 18px;
    height: 18px;
    cursor: pointer;
    background-image: url(/svg/cancel.svg);
}
.bgpopup{
    float: left;
    width: 320px;
    height: 100%;
    max-height: 640px;
    background-image: url(/img/bgreview.jpg);
    background-repeat: no-repeat;
    background-position: 0 0;
}
.form{
    float: left;
    width: calc(100% - 320px);
    height: 100%;
    max-height: 640px;
    box-sizing: border-box;
    padding: 40px;
}
.title{
    float: left;
    width: 100%;
    text-align: center;
    font-size: 24px;
    font-family: Cambria;
}
.process{
    float: left;
    width: 100%;
}
.line{
    float: left;
    width: 100%;
    margin: 10px 0;
}
.success{
    float: left;
    width: 100%;
    text-align: center;
    font-size: 20px;
    font-family: Cambria;
    color: green;
    margin-top: 200px;
}
:global(.line .inputcontrol){
    height: 42px;
    padding: 0;
    border: none;
    border-bottom: 1px solid rgba(0,0,0,0.2);
    font-size: 16px;
}
:global(.line .textcontrol){
    height: calc(100vh - 293px);
    max-height: 387px;
    padding: 10px;
    border: 1px solid rgba(0,0,0,0.2);
    font-size: 16px;
}

@media only screen and (max-width: 767px){
    .bgpopup{
        display: none;
    }  
    .form{
        width: 100%;
    } 
}
</style>