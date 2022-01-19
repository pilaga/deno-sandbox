import { MongoClient, Database } from "https://deno.land/x/mongo@v0.8.0/mod.ts";

let db: Database;

export function connect() {
    const client = new MongoClient();
    client.connectWithUri("mongodb+srv://admin:<password>@cluster0.lrvxm.mongodb.net/denodb?retryWrites=true&w=majority");
    db = client.database('todos');
}

export function getDb() {
    return db;
}