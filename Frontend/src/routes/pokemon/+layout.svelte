<script>
    import PokemonList from "$lib/components/PokemonList.svelte"
    export let data;
    let pokeData = data.pokemons;
</script>

<div class="container">
    <PokemonList pokemons={pokeData} /> 
    <div>
        <slot />
    </div>
</div>

<style>
    .container {
        display: grid;
        grid-template-columns: 1fr 3fr;
    }
</style>