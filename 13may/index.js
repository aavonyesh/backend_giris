import express from "express";
import mongoose from "mongoose";
const app = express();
const port = 3000;

// const requestTime = function (req, res, next) {
//     req.requestTime = Date.now()
//     console.log(Date.now());
//     next()
// }

// app.use(requestTime)

// app.use(cors());
app.use(express.json());
mongoose
.connect("mongodb+srv://aynurahbf206:aynur206@cluster0.z1kpoya.mongodb.net/")
.then(() => console.log("connected"))
.catch(() => console.log("not connected"));
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
