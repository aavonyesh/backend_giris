import mongoose from "mongoose";
import express from "express";
const app = express();
const port = 3000;
app.use(cors())
app.use(express.json());

const usersSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const User = mongoose.model("user", usersSchema);

app.get("/", async (req, res) => {
  const users = await User.find();
  res.send(users);
});

app.get("/:id", async (req, res) => {
  const { id } = req.params;
  const users = await User.findById(id);
  if (!users) {
    return res.status(404).send({ message: "Not Found" });
  } else {
    res.status(200).send(users);
  }
});

app.post("/", async (req, res) => {
  const { body } = req;
  const silence = await User.create(body);
  res.send("Created!");
});

app.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const user = await User.findByIdAndUpdate(id,body);
  res.send("Updated!");
});

app.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const users = await User.findByIdAndDelete(id);
  res.send("Deleted!");
});

mongoose
  .connect(
    "mongodb+srv://aynurahbf206:aynurbf206@cluster0.z1kpoya.mongodb.net/"
  )
  .then(() => console.log("db connected"))
  .catch((err) => console.log("db not connected"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
