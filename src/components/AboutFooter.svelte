<script>
    export let aboutfooter;
    export let phone;
    export let mail;
    import { isAdmin } from '../store.js';
    import BtnEdit from '../components/BtnEdit.svelte';

    let isTextShow = false;

    function textShow() {
        isTextShow = !isTextShow;
    }
</script>

<div class="content">
    {#each aboutfooter as aboutline}
        <div class="photo edit">
            <img src={aboutline.image} alt="Марина Науфиловна" />
            {#if $isAdmin}<BtnEdit on:getDat datablock={aboutline.image} idline={aboutline.id} field={'image'} timage={true} cropS = {{width: 424, height: 490}} />{/if}
        </div>
        <div class="about">
            <div class="title edit">
                {@html aboutline.title}
                {#if $isAdmin}<BtnEdit on:getDat datablock={aboutline.title} idline={aboutline.id} field={'title'} tedit={'light'} />{/if}
            </div>
            <div class="subtitle edit">
                {@html aboutline.subtitle}
                {#if $isAdmin}<BtnEdit on:getDat datablock={aboutline.subtitle} idline={aboutline.id} field={'subtitle'} tedit={'light'} />{/if}
            </div>
            <div class="contacts__title">Мои контакты:</div>
            <ul class="contacts__list">
                <li class="contacts__item mail">
                    <div class="contacts__name">E-mail:</div>
                    <a href="mailto:{mail}" class="contacts__value">{mail}</a>
                </li>
                <li class="contacts__item whatsapp">
                    <div class="contacts__name">Whatsapp:</div>
                    <a href="/" class="contacts__value">{phone}</a>
                </li>
                <li class="contacts__item viber">
                    <div class="contacts__name">Viber:</div>
                    <a href="/" class="contacts__value">{phone}</a>
                </li>
            </ul>
            <div class="info edit">
                {@html aboutline.customfield}
                {#if $isAdmin}<BtnEdit on:getDat datablock={aboutline.customfield} idline={aboutline.id} field={'customfield'} tedit={'light'} />{/if}
            </div>
        </div>
        <div class="{isTextShow ? 'text__container open' : 'text__container'}">
            <div class="text edit">
                {@html aboutline.text}
                {#if $isAdmin}<BtnEdit on:getDat datablock={aboutline.text} idline={aboutline.id} field={'text'} tedit={'full'} />{/if}
            </div>
            {#if !isTextShow}<span class="opentext" on:click="{textShow}">Читать дале</span>{/if}
        </div>
    {/each}
</div>

<style>
    .content{
        float: left;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        box-sizing: border-box;
        padding: 0 90px;
    }
    .photo{
        position: relative;
        float: left;
        width: 424px;
    }
    
    .photo::before{
        content: '';
        position: absolute;
        z-index: 0;
        top: -60px;
        left: -70px;
        width: calc(100% - 20px);
        height: calc(100% - 40px);
        max-width: 390px;
        max-height: 438px;
        background-image: url(/svg/bgphotos.svg);
        background-repeat: repeat;
        background-position: top left;
        background-size: 60px 60px;
    }
    
    .photo img{
        position: relative;
        z-index: 1;
        max-width: 100%;
        height: auto;
        border-radius: 5px;
    }
    
    .about{
        float: left;
        width: calc(100% - 424px);
        box-sizing: border-box;
        padding-left: 90px;
    }

    .title{
        position: relative;
        float: left;
        width: 100%;
        font-family: Cambria;
        font-size: 24px;
        line-height: 1.3em;
        font-weight: bold;
    }
    
    .subtitle{
        position: relative;
        float: left;
        width: 100%;
        font-family: Carlito-Italic;
        font-size: 18px;
        color: #636363;
        box-sizing: border-box;
        margin-top: 25px;
    }

    .contacts__title{
        float: left;
        width: 100%;
        font-family: Carlito-Bold;
        font-size: 18px;
        margin-top: 25px;
    }

    .contacts__list{
        float: left;
        margin: 0;
        padding: 0;
        margin-left: 50px;
        list-style-type: none;
    }

    .contacts__item{
        position: relative;
        float: left;
        width: 100%;
        margin-top: 20px;
        box-sizing: border-box;
        padding-left: 70px;
    }

    .contacts__item::before{
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        margin-top: -25px;
        width: 50px;
        height: 50px;
        background-color: #8d2326;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 34px 34px;
        border-radius: 5px;
    }

    .contacts__item.mail::before{
        background-image: url(/svg/mail.svg);
    }

    .contacts__item.whatsapp::before{
        background-image: url(/svg/whatsapp.svg);
    }

    .contacts__item.viber::before{
        background-image: url(/svg/viber.svg);
    }

    .contacts__name{
        font-family: Carlito-Bold;
        font-size: 18px;
    }

    .contacts__value{
        font-family: Carlito-Regular;
        font-size: 16px;
        color: #555555;
    }

    .contacts__value:hover{
        color: #8d2326;
    }

    .info{
        position: relative;
        float: left;
        width: calc(100% - 50px);
        text-align: left;
        font-size: 18px;
        font-family: Carlito-Regular;
        color: #636363;
        margin-left: 50px;
        border-left: 5px solid #8d2326;
        margin-top: 30px;
        box-sizing: border-box;
        padding-left: 15px;
    }

    .text__container{
        position: relative;
        float: left;
        width: 100%; 
        margin-top: 10px;
        padding-bottom: 45px;
    }

    .text__container.open{
        padding-bottom: 0;
    }
    
    .text{
        position: relative;
        float: left;
        width: 100%;
        max-height: 140px;
        overflow: hidden;
        font-family: Cambria;
        font-size: 18px;
        line-height: 1.3em;
    }

    .text__container.open .text{
        max-height: inherit;
    }

    .opentext{
        position: absolute;
        bottom: 0;
        left: 50%;
        display: flex;
        justify-content: center;
        width: 90px;
        margin-left: -45px;
        color: #8d2326;
        font-family: Carlito-Bold;
        font-size: 14px;
        text-transform: uppercase;
        cursor: pointer;
        padding-bottom: 20px;
        outline: none;
    }

    .opentext::after{
        content: '';
        position: absolute;
        left: 50%;
        bottom: 0;
        width: 24px;
        height: 24px;
        margin-left: -12px;
        transform: rotate(90deg);
        transform-origin: center center;
        background-image: url(/svg/right-arrow.svg);
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 24px 24px;
    }

    :global(.text p) {
        margin: 25px 0;
        line-height: 1.5em;
        color: #636363;
        text-align: justify;
    }
    
    :global(.edit:hover .btn){
        display: block;
    }

    @media only screen and (max-width: 1199px){
        .content{
            padding: 0 45px;
        }
        .about{
            padding-left: 40px;
        }
    }
    @media only screen and (max-width: 1023px){
        .content{
            flex-wrap: wrap;
        }

        .about{
            width: 100%;
            padding-left: 0;
            margin-top: 40px;
        }
    }
    @media only screen and (max-width: 767px){
        .info{
            width: 100%;
            margin-left: 0;
        }
    }
    @media only screen and (max-width: 539px){
        .title{
            font-size: 28px;
        }
        .content{
            padding: 0 15px;
        }
        .photo{
            width: 100%;
        }
    }
</style>