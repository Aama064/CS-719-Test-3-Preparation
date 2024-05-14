import { PUBLIC_API_URL } from "$env/static/public";

export const BASE_URL = PUBLIC_API_URL;

// Used for getting / updating info about the pokemons
export const POKEMONS_URL = `${BASE_URL}/pokemons`;