//Always import the router (express) and the routers to use on this "path" (api/whatever)...
import { Router } from "express";
import pokemonRouter from "./pokemonsRoute.js";

const router = Router();

//Set your "children path" and associate it to a router
router.use("/pokemons", pokemonRouter);

//API methods (CRUD) for this specific path
router.get("/", (req, res) => {
    res.send("Server and api route is working");
    // res.json({
    //     message: "hello"
    // });
});

//Always export your router so the "parent" can know about it
export default router;