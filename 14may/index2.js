import mongoose from "mongoose";
import express from "express";
import cors from "cors";
const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());

const WorkerSchema = new mongoose.Schema({
  name: String,
  lastname: String,
  age: Number,
});

const Worker = mongoose.model("Worker", WorkerSchema);

app.get("/", async (req, res) => {
  const workers = await Worker.find();
  res.send(workers);
});

app.get("/:id", async (req, res) => {
  const { id } = req.params;
  const worker = await Worker.findById(id);
  if (!worker) {
    return res.status(404).send({ message: "Not found" });
  }
  res.status(200).send(worker);
});

app.post("/", async (req, res) => {
  const { body } = req;
  const worker = await Worker.create(body);
  res.send("Created!");
});

app.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const worker = await Worker.findByIdAndUpdate(id, body);
  res.send("Updated!");
});

app.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const worker = await Worker.findByIdAndDelete(id);
  res.send("Deleted!");
});

mongoose
  .connect(
    "mongodb+srv://aynurahbf206:aynurbf206@cluster0.z1kpoya.mongodb.net/"
  )
  .then(() => console.log("Db connected"))
  .catch((err) => console.log("Db not connected"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
