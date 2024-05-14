<script>
    export let pokemons;
</script>

<nav>
    <ul>
      {#each pokemons as pokemon}
        <li>
          <a href="/pokemon/{pokemon.id}">{pokemon.name}</a>
        </li>
      {/each}
    </ul>
</nav>

<style>
    nav {
        width: 210px;
    }
    ul {
        display: flex;
        list-style: none;
        flex-direction: column;
        width: 200px;
    }

    a {
        color: white;
        text-decoration: none;
    }
    
    li {
        padding: 10px 0;
        color: white;
        background-color: darkred;
        border: 1px solid gray;
        width: 200px;
        text-align: center;
    }

    ul :nth-child(1) {
        border-radius: 10px 10px 0 0;
    }

    ul :last-child {
        border-radius: 0 0 10px 10px;
    }

    li:nth-child(even) {
        background-color: rgb(211, 208, 208);

        & a {
            color: black;
        }
    }
</style>