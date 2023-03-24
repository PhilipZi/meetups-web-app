import { MongoClient } from "mongodb";

function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const { title, image, address, description } = data;

    MongoClient.connect(
      "mongodb+srv://philip:<password>@cluster0.cihy4.mongodb.net/?retryWrites=true&w=majority"
    );
  }
}
export default handler;
