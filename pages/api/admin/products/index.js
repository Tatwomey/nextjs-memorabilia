import { getToken } from "next-auth/jwt";
import Product from "@/Models/Product";
import db from "@/utils/db";
import Joi from 'joi';

// Define a validation schema for product
const productSchema = Joi.object({
  name: Joi.string().required(),
  slug: Joi.string().required(),
  image: Joi.string().uri().required(),
  price: Joi.number().required(),
  category: Joi.string().required(),
  band: Joi.string().required(),
  countInStock: Joi.number().integer().required(),
  description: Joi.string().required(),
  rating: Joi.number().min(0).max(5).required(),
  numReviews: Joi.number().integer().min(0).required()
});

const handler = async (req, res) => {
  const user = await getToken({ req });
  if (!user || !user.isAdmin) {
    return res.status(401).send("admin signin required");
  }
  if (req.method === "GET") {
    return getHandler(req, res);
  } else if (req.method === "POST") {
    return postHandler(req, res);
  } else {
    return res.status(400).send({ message: "Method not allowed" });
  }
};

const postHandler = async (req, res) => {
  await db.connect();

  // Validate product data
  const { error } = productSchema.validate(req.body);
  if (error) {
    await db.disconnect();
    return res.status(400).send({ message: "Validation error", error: error.details });
  }

  const newProduct = new Product(req.body);

  const product = await newProduct.save();
  await db.disconnect();
  res.send({ message: "Product created successfully", product });
};

const getHandler = async (req, res) => {
  await db.connect();
  const products = await Product.find({});
  await db.disconnect();
  res.send(products);
};

export default handler;
