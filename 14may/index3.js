// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// const app = express();
// const port = 3000;
// app.use(express.json());
// app.use(cors());

// const productSchema = new mongoose.Schema({
//   productName: String,
//   price: Number,
// });
// const Product = mongoose.model("Product", productSchema);

// app.get("/", async (req, res) => {
//   const products = await Product.find();
//   res.send(products);
// });
// app.get("/:id", async (req, res) => {
//   const { id } = req.params;
//   const product = await Product.findById(id);
//   res.send(product);
// });
// app.post("/", async (req, res) => {
//   const { body } = req;
//   const product = await Product.create(body);
//   res.send("Created!");
// });
// app.put("/:id", async (req, res) => {
//   const { id } = req.params;
//   const { body } = req;
//   const product = await Product.findByIdAndUpdate(id, body);
//   res.send("Updated!");
// });
// app.delete("/:id", async (req, res) => {
//   const { id } = req.params;
//   const product = await Product.findByIdAndDelete(id);
//   res.send("Deleted!");
// });

// mongoose
//   .connect(
//     "mongodb+srv://aynurahbf206:aynurbf206@cluster0.z1kpoya.mongodb.net/"
//   )
//   .then(() => console.log("Connected!"))
//   .catch((err) => console.log("Not connected"));

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });
