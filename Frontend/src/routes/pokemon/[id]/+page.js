export async function load ({ fetch, params }) {
    const response = await fetch(`http://localhost:3000/api/pokemons/${params.id}`);
    const pokemonToBeDisplayed = await response.json();
    return { pokemonToBeDisplayed };
};