const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Product = require("./models/Product");
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost/yofuel", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/api/products", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

app.post("/api/products", async (req, res) => {
  const newProduct = new Product(req.body);
  const savedProduct = await newProduct.save();
  res.json(savedProduct);
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
