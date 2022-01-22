<script>
    export let companyname;
</script>

<style>
.companyname{
	font-size: 24px;
	font-weight: bold;
	font-family: Cambria;
	line-height: 1em;
}

@media only screen and (max-width: 539px){
    .companyname{
        font-size: 16px;
    }
}

@media only screen and (max-width: 349px){
    .companyname{
        font-size: 14px;
    }
}
</style>

<div class="companyname">{@html companyname}</div>