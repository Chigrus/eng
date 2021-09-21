<script>
    export let schoolkids;
    import { isAdmin } from '../store.js';
    import BtnEdit from '../components/BtnEdit.svelte';
</script>

<div class="schoolkid__list">
    {#each schoolkids as schoolkid}
    <div class="schoolkid__item edit">
        {@html schoolkid.text}
        {#if $isAdmin}<BtnEdit on:getDat datablock={schoolkid.text} idline={schoolkid.id} field={'text'} tedit={'light'} />{/if}
    </div>
    {/each}
</div>

<style>
.schoolkid__list{
    float: left;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}

.schoolkid__item{
    position: relative;
    float: left;
    width:  calc(100%/2 - 40px);
    margin: 20px;
    padding-bottom: 20px;
    margin-bottom: 0;
    color: #fff;
    font-size: 16px;
    line-height: 1.4em;
}

.schoolkid__item::before{
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: rgba(255,255,255,0.2);
}

.schoolkid__item::after{
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 2px;
    background-color: #ff0000;
}

@media only screen and (max-width: 479px){
    .schoolkid__item{
        width:  calc(100% - 40px);
    }
}
</style>