<script>
    import Button from '../components/Button.svelte';

    export let massdel={};

    function cancelf(){
        massdel.alert = false;
    }

    function delf(){
        fetch('/deldata', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                data: massdel
            })
        })
        .then(response => response.json())
        .then(data => {               
            location.reload();
        });
    }
</script>

<div class="glass" class:open={massdel.alert}>
    <div class="alert">
        <div class="message">{massdel.title}</div>
        <div class="line">
            <Button title='Да' on:click={delf} />
            <Button title='Нет' on:click={cancelf} />
        </div>
    </div>
</div>

<style>
.glass{
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    display: none;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
}

.glass.open{
    display: flex;
}

.alert{
    position: relative;
    width: calc(100% - 20px);
    max-width: 300px;
    height: auto;
    max-height: calc(100% - 40px);
    overflow-y: auto;
    background-color: #fff;
    border-radius: 3px;
    box-sizing: border-box;
    padding: 20px;
}

:global(.alert .btn) {
    margin: 0 5px;
}

.message{
    float: left;
    width: 100%;
    text-align: center;
    margin-bottom: 10px;
    font-weight: bold;
}

.line{
    display: flex;
    justify-content: center;
    float: left;
    width: 100%;
}
</style>