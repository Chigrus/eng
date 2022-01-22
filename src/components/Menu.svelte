<script>
    import * as animateScroll from "svelte-scrollto";

    export let menu;
    export let isOpenMenu = false;

    function menuClick(id, url){
        animateScroll.scrollTo({element: '#'+url, offset: -100});
        menu.forEach(function(item, i) {
            item.active = false;
        });
        menu[id-1].active = true;
        isOpenMenu = false;
    }

    function closeMenu(){
        isOpenMenu = false;
    }
</script>

<nav class="menu" class:open={isOpenMenu}>
    <span class="close" on:click={closeMenu}></span>
    <ul class="list">
        {#each menu as item}
            <li class="item" class:active={item.active}>
                <a href="#{item.url}" class="link" on:click|preventDefault={() => menuClick(item.position, item.url)}>{item.title}</a>
            </li>
        {/each}
    </ul>
</nav>

<style>
    .menu{
        height: 100%;
    }
    .list{
        float: left;
        width: 100%;
        height: 100%;
        list-style-type: none;
        padding: 0;
        margin: 0;
    }
    .item{
        position: relative;
        float: left;
        height: 100%;
        display: flex;
        align-items: center;
        margin-right: 20px;
    }
    .item.active::before{
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 3px;
        background-color: #8d2326;
    }
    .link{
        font-size: 16px;
        color: #646464;
        text-decoration: none;
        font-family: Carlito-Regular;
    }
    .link:hover{
        color: #8d2326;
    }
    .item.active .link{
        color: #8d2326;
    }

    .close{
        display: none;
    }
    
    @media only screen and (max-width: 1199px){
        .menu{
            position: fixed;
            z-index: 100;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100vh;
            background-color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            transition-property: left;
            transition-duration: .5s;
        }

        .menu.open{
            left: 0;
            transition-property: left;
            transition-duration: .5s;
        }
    
        .list{
            width: 100%;
            max-width: 300px;
            height: auto;
        }
    
        .item{
            width: 100%;
            height: auto;
            margin: 6px 0;
        }
    
        .link{
            display: block;
            width: 100%;
            padding: 5px 0;
            text-align: center;
            font-size: 20px;
        }

        .close{
            display: block;
            position: absolute;
            top: 20px;
            right: 20px;
            width: 40px;
            height: 40px;
            background-image: url(/svg/cancel.svg);
            background-position: center center;
            background-repeat: no-repeat;
            background-size: 75% 75%;
        }

        .item.active::before{
            content: none;
        }
    }

</style>