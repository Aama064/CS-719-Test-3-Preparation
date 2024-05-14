<script>
	import PokeView from "../../../lib/components/PokeView.svelte";
    export let data;
    $: pokeInfo = data.pokemonToBeDisplayed;
</script>

<PokeView currentPokemon={pokeInfo} />