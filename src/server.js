import express from "express";

import { products } from "./data/products.js";

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to JSD12 (Backend Assessment) - 14_Manit (Arm/อาม) (O_o)i')
});

app.get("/products", (req, res) => {
  res.json(products);
});
app.get("/products/:id", (req, res) => {
  const product = products.find((p) => p.id === req.params.id);
  res.json(product);
});
app.post("/products", (req, res) => {
});
app.put("/products/:id", (req, res) => {
});
app.delete("/products/:id", (req, res) => {
});

const port = 1414;
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});