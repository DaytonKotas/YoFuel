const mongoose = require("mongoose");
const Product = require("./models/Product");

mongoose.connect("mongodb://localhost/YoFuel", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const products = [
  {
    name: "Cookies and Cream",
    description: "Delicious Greek yogurt with cookies and cream flavor.",
    price: 5.99,
    imageUrl: "https://example.com/cookies-and-cream.jpg",
  },
  {
    name: "Vanilla",
    description: "Smooth and creamy Greek yogurt with vanilla flavor.",
    price: 4.99,
    imageUrl: "https://example.com/vanilla.jpg",
  },
  {
    name: "Caramel",
    description: "Rich and tasty Greek yogurt with caramel flavor.",
    price: 5.49,
    imageUrl: "https://example.com/caramel.jpg",
  },
];

Product.insertMany(products)
  .then(() => {
    console.log("Products inserted successfully");
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error("Error inserting products:", err);
    mongoose.connection.close();
  });
