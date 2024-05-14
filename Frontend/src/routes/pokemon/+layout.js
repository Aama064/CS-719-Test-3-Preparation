export async function load({ fetch }) {
    const response = await fetch("http://localhost:3000/api/pokemons")
    const pokemons = await response.json();
    return {pokemons};
}


//INTERNALLLY

//(FIND THIS JS FILE LOOK FOR LOAD. MUST BE ASYNC & RETURN OBJECT TO MERGE)