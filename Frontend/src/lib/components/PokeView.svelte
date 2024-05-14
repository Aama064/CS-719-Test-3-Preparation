<script>
    export let currentPokemon;
</script>

<div class="container">
    <div>
        <img src={currentPokemon.imageUrl} alt={currentPokemon.name}>
    </div>
    <div>
        <h2>{currentPokemon.name}</h2>
        <h3>#{currentPokemon.dexNumber}</h3>
        <p>{currentPokemon.dexEntry}</p>
    </div>

</div>

<style>
    img {
        display: block;
        width: 300px;
        margin: 10px 10px;
        border-radius: 5px;
        box-shadow: 0 0 5px 5px lightgray;
    }
    h2 {
        margin: 0;
    }
    h3 {
        margin: 0;
    }
    p {
        margin: 0;
    }
    .container {
        margin-top: 20px;
        width: 700px;
        display: flex;
        gap: 20px;
        align-items: center;
    }
    
</style>