<script>
    import Button from '../components/Button.svelte';
    import ControlInput from '../components/ControlInput.svelte';
    import ControlTextarea from '../components/ControlTextarea.svelte';

    let senddata = {
        name: '',
        mail: '',
        message: ''
    }

    let isShowSuccess = false;

    let errorName = false;
    let errorMail = false;
    let isMessage = false;

    function sendmessage(){
        if(senddata.name == ''){
            errorName = true;
        }
        if(senddata.mail == ''){
            errorMail = true;
        }
        if(senddata.message == ''){
            isMessage = true;
        }
        if(senddata.name != '' && senddata.mail != '' && senddata.message != ''){
            fetch('/sendmessage', 
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    data: senddata
                })
            })
            .then(response => response.json())
            .then(data => {
                console.log(data.status);
                if(data.status){
                    isShowSuccess = true;
                }
            });
        }
    }
</script>

<div class="callbackform">
    <div class="callbackinputs">
        <div class="infosend" class:show={isShowSuccess}>Ваше сообщение отправлено.<br> Спасибо за обращение!</div>
        <div class="callbackline">
            <div class="cbinp">
                <ControlInput placeholder="Ваше имя" bind:text={senddata.name} bind:isError={errorName} />
            </div>
            <div class="cbinp r">
                <ControlInput placeholder="Ваш e-mail или телефон" bind:text={senddata.mail} bind:isError={errorMail} />
            </div>
        </div>
        <div class="callbackline">
            <ControlTextarea placeholder="Текст сообщения" bind:text={senddata.message} bind:isError={isMessage} />
        </div>
    </div>
    <div class="callbackline rb">
        <Button on:click="{sendmessage}" title="отправить сообщение" />
    </div>
</div>

<style>
.callbackform{
    float: left;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.callbackinputs{
    position: relative;
    width: 100%;
}
.infosend{
    position: absolute;
    z-index: 1;
    top: 30px;
    left: 0;
    display: none;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: calc(100% - 30px);
    background-color: #fff;
    color: green;
    font-size: 20px;
    text-align: center;
}
.infosend.show{
    display: flex;
}
.callbackline{
    display: flex;
    width: 100%;
    margin-top: 30px;
}
.callbackline.rb{
    justify-content: flex-end;
}
.cbinp{
    width: calc(100%/2 - 15px);
}

.cbinp.r{
    margin-left: 30px;
}

@media only screen and (max-width: 480px){

    .callbackline{
        flex-wrap: wrap;
    }
    .cbinp{
        width: calc(100%);
    }

    .cbinp.r{
        margin-top: 30px;
        margin-left: 0;
    }
}
</style>