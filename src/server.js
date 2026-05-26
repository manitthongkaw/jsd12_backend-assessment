import express from "express";

import { products } from "./data/products.js";

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to JSD12 (Backend Assessment) - 14_Manit (Arm/อาม) (O_o)i')
});

app.get("/products", (req, res) => {
  try {
    return res.status(200).json({ success:true, data:products });
  }
  catch (error) {
    return res.status(400).json({ success:false, error:error });
  }
});
app.get("/products/:id", (req, res) => {
  try {
    const product = products.find((p) => p.id === req.params.id);
    if (!product) {
      return res.status(404).json({ success:false, error:"Product not found" });
    };
    return res.status(200).json({ success:true, data:product });
  }
  catch (error) {
    return res.status(400).json({ success:false, error:error });
  }
});
app.post("/products", (req, res) => {
  const { name, price, quantity } = req.body || {};
  if (!name || price === undefined || quantity === undefined) {
    return res.status(400).json({ error: "Name, price and quantity are required" });
  }
  try {
    const nextId = String( (products.reduce((max, p) => Math.max(max, Number(p.id)), 0) || 0) + 1 );
    const newProduct = { id:nextId, name, price:Number(price), quantity:Number(quantity || 1) };
    products.push(newProduct);
    return res.status(201).json({ success:true, data:newProduct });
  } catch (error) {
    return res.status(400).json({ success:false, error:error.message });
  };
});
app.put("/products/:id", (req, res) => {
  const { name, price, quantity } = req.body || {};
  if (name == undefined && price == undefined && quantity == undefined) {
    return res.status(400).json({ success:false, error:"One field is required to update", });
  }
  try {
    const product = products.find((p) => p.id === req.params.id);
    if (!product) {
      return res.status(404).json({ success:false, error:"Product not found" });
    };
    product.name = name ?? product.name;
    product.price = Number(price) ?? product.price;
    product.quantity = Number(quantity) ?? product.quantity;
    return res.status(200).json({ success:true, data:product });
  } catch (error) {
    return res.status(400).json({ success:false, error:error.message });
  };
});
app.delete("/products/:id", (req, res) => {
  try {
    const product = products.find((p) => p.id === req.params.id);
    if (!product) {
      return res.status(404).json({ success:false, error:"Product not found" });
    };
    products.splice(product, 1);
    return res.status(200).json({ success:true, data:products });
  } catch (error) {
    return res.status(400).json({ success:false, error:error.message });
  };
});

const port = 1414;
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});