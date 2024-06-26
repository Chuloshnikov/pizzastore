import dbConnect from "../../../utils/mongo.js";
import Product from "../../../models/Product.js";

export default async function handler(req, res) {
    const { method, cookies } = req;

    const token = cookies.token;


    dbConnect();

    if (method === "GET") {
        try {
            const products = await Product.find();
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json(error);
        }
    }
    if (method === "POST") {
        if (!token || token !== process.env.token) {
            return res.status(401).json("Not autentificated!");
        }
        try {
            const product = await Product.create(req.body);
            res.status(201).json(product);
        } catch (error) {
            res.status(500).json(error);
        }
    }
  }
  