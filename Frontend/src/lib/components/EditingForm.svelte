<script>
  import { POKEMONS_URL } from "$lib/js/important-urls.js"

  let name;
  let dexNumber;
  let dexEntry;

  async function handleAdd() {
    console.log(name);
    console.log(dexNumber);
    console.log(dexEntry);
    const response = await fetch(POKEMONS_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, dexNumber, dexEntry })
    });
  }

</script>

<form on:submit|preventDefault={handleAdd}>
  <label for="pokemonName">Pokemon name:</label>
  <input type="text" name="pokemonName" bind:value={name} required />
  <label for="dexNumber">Pokedex number:</label>
  <input type="text" name="dexNumber" bind:value={dexNumber} required />
  <label for="dexEntry">Description:</label>
  <textarea name="dexEntry" rows="5" bind:value={dexEntry} required />
  <button type="submit">Add</button>
</form>

<style>
  form {
    max-width: 500px;
    border: 1px dashed green;
    padding: 10px;
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 10px;
  }

  button, textarea {
    grid-column: 1 / 3;
  }
</style>