//Import express and cors to succesfully run the server
import express from "express";
import cors from "cors";

//Import dotenv to use environment variables
import dotenv from "dotenv";
dotenv.config();

//Import the routers to use them
import apiRouter from "./routes/apiRoute.js";

const app = express();

const PORT = process.env.PORT ?? 3000

//So the localhost can show the info in JSON and allow the communication to the server (CORS)
app.use(express.json());
app.use(cors());

//Using routers to practice and better organize the code
app.use("/api", apiRouter);

//Initializing the server to Port 3000
app.listen(PORT, () => {
    console.log("Express server listening on port 3000");
});