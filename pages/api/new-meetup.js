import env from "dotenv";
env.config();
import { MongoClient } from "mongodb";

function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const { title, image, address, description } = data;

    MongoClient.connect(process.env.MONGO_URI);
  }
}
export default handler;
