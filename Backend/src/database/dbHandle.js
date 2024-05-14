import sqlite3 from "sqlite3";
import { open } from "sqlite";
import fs from "fs";

let db;

//Return the database if it already exists, if not, it will run the open so it is created
export async function getDatabase() {
    if (!db) {
        db = await openDatabase();
    }
    return db;
}

//Open/create the database
async function openDatabase() {

    //Checks if the database provided as parameter exists or not
    const dbExists = fs.existsSync(process.env.DB_NAME);

    const db = await open({
        filename: `${process.env.DB_NAME}`,
        driver: sqlite3.Database
    });
    
    // Enable foreign keys
    await db.exec("PRAGMA foreign_keys = ON");

    //Check if the database already exists to initialize it again or just open it
    if (!dbExists) {
        await initDatabase(db);
    }

    return db;
}

//Runs the SQL script to initialize the database values
async function initDatabase(db) {
    const initScript = `${process.env.DB_INITIALIZATION}`;
    const sql = fs.readFileSync(initScript).toString();
    await db.exec(sql);
}