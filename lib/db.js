import env from "dotenv";
env.config();
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGO_URI);

const promise = client.connect();

export default promise;
