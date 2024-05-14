<script>
    import { page } from "$app/stores";
    $: path = $page.url.pathname;
</script>

<nav>
    <ul>
        <li>
            <a href="/" class:active={path === "/"}>
                Home  
            </a>
        </li>
        <li>
            <a href=/pokemon class:active={path === "/pokemon" || path.startsWith("/pokemon")}>
                All Pokemons
            </a>
        </li>
        <li>
            <a href=/add class:active={path === "/add"}>
                Add
            </a>
        </li>
    </ul>
</nav>

<style>
    nav {
        background-color: darkred;
        padding-left: 20px;
        box-shadow: 0 5px 3px lightgray;
    }
    ul {
        list-style: none;
        margin: 0;
        display: flex;
        gap: 10px;
    }
    li {
        padding: 15px;

        &:has(.active) {
            background-color: rgba(255, 255, 255, 0.1);
        }

        &:hover {
            background-color: rgba(255, 255, 255, 0.1);
        }
    }
    a {
        color: white;
        font-size: 1.2rem;
        text-decoration: none;
        padding: 5px;
    }
    .active{
        text-decoration: underline;
    }
</style>