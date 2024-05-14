//Importing the router (express) and everyhting else needed in this file to process the info
import { Router } from "express";
import { getAllPokemons, findPokemonById, createPokemon } from "../database/pokedex-dao.js";

const router = Router();

//API methods (CRUD) for this specific path
router.get("/", async (req, res) => {
    const pokemons = await getAllPokemons();
    res.json(pokemons);
});

router.post("/", async (req, res) => {
  try {
    const newPokemon = await createPokemon(req.body);
    const location = `api/pokemons/${newPokemon.id}`;
    return res.status(201).location(location).json(newPokemon);
  }
  catch (err) {
    return res.status(422).json(err.errors);
  }
});

router.get("/:id", async (req,res) => {
  const id = req.params.id;
  const currentPokemon = await findPokemonById(id);

  if (!currentPokemon) {
    res.sendStatus(400);
    return;
  }
  res.json(currentPokemon);
  return;
});

//Always export your router so the "parent" can know about it
export default router;
