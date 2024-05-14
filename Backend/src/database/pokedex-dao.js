import { getDatabase } from "./dbHandle.js";
import yup from "yup";

// export const pokemon_array = [
//     {
//         id: 9,
//         name: "Dragonite",
//         dexNumber: 149,
//         dexEntry:
//             "An extremely rarely seen marine Pokémon. Its intelligence is said to match that of humans.",
//         imageUrl:
//             "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/149.png",
//         maxHp: 100
//     },
//     {
//         id: 10,
//         name: "Mewtwo",
//         dexNumber: 150,
//         dexEntry:
//             "It was created by a scientist after years of horrific gene splicing and DNA engineering experiments.",
//         imageUrl:
//             "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/150.png",
//         maxHp: 100
//     } */
// ];

let pokeImage = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/";
let defaultHp = 100;

export async function getAllPokemons() {
    const db = await getDatabase();
    const pokemons = await db.all("SELECT * FROM pokemons");
    return pokemons;
}

export async function findPokemonById(id) {
    const db = await getDatabase();
    const currentPokemon = await db.all("SELECT * FROM pokemons WHERE id = ?", id);
    return currentPokemon[0];
}

const createPokemonSchema = yup.object({
    name: yup.string().min(3).required(),
    dexNumber: yup.number().test("dexNumber", (dexNum) => dexNum > 0 && dexNum <= 1025).required(),
    dexEntry: yup.string().optional()
});

export async function createPokemon(userInput) {
    const newPokemon = createPokemonSchema.validateSync(userInput, {
        abortEarly: false,
        stripUnknown: true
    });

    const db = await getDatabase();
    const dbResult = await db.run(
        "INSERT INTO pokemons (name, dexNumber, dexEntry, imageUrl, maxHp) VALUES (?,?,?,?,?)",
        newPokemon.name,
        newPokemon.dexNumber,
        newPokemon.dexEntry,
        newPokemon.imageUrl = `${pokeImage}${newPokemon.dexNumber}.png`,
        newPokemon.maxHp = defaultHp
    );

    newPokemon.id = dbResult.lastID
    return newPokemon;
}