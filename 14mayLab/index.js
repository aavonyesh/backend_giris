import express from "express";
import mongoose from "mongoose";
import cors from "cors";
const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());

const ProductSchema = new mongoose.Schema({
  title: String,
  price: Number,
  description: String,
  categor: String,
  image: String,
});
const Product = mongoose.model("Product", ProductSchema);

app.get("/", async (req, res) => {
  const products = await Product.find()
  res.send(products);
});
app.get("/:id", async (req, res) => {
    const product = await Product.findById(id)
  res.send(product);
});
app.put("/id", async (req, res) => {
    const {id}=req.params
    const {body}=req
    const updatedProduct = await Product.findByIdAndUpdate(id,body)
  res.send("Updated");
});
app.delete("/:id", async (req, res) => {
    const {id}= req.params
    const deletedProduct = await Product.findByIdAndDelete(id)
  res.send("Deleted!");
});

app.post("/", async (req, res) => {
    const {body}=req
    const newProduct = await Product.create(body)
  res.send("Created!");
});

mongoose.connect(
  "mongodb+srv://aynurahbf206:aynurbf206@cluster0.z1kpoya.mongodb.net/")
  .then(()=>console.log("connected"))
  .catch((err)=>console.log("not connected"))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
