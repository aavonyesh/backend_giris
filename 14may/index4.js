import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
const app = express()
const port = 3000

app.use(express.json())
app.use(cors())

const booksSchema = new mongoose.Schema({
    name: String,
    age:Number
});
const Books = mongoose.model('Books', booksSchema);

app.get('/', async (req, res) => {
    const books = await Books.find()
    res.send(books)
})
app.get('/:id', async (req, res) => {
    const {id}=req.params
    const book = await Books.findById()
    if (!book) {
        return res.status(404).send({message:"Not found"}) 
    }
    res.send(book)
})
app.post('/', async (req, res) => {
    const {body}=req
    const newBook = await Books.create(body)
    res.send('Created!')
})
app.put('/:id', async (req, res) => {
    const {id}=req.params
    const {body} = req
    const updatedBook = await Books.findByIdAndUpdate(id,body)
    res.send('Hello World!')
})
app.delete('/:id', async (req, res) => {
    const {id} =req.params
    const book = await Books.findByIdAndDelete(id)
    res.send('Deleted!')
})
mongoose.connect('mongodb+srv://aynurahbf206:aynurbf206@cluster0.z1kpoya.mongodb.net/')
.then(()=>console.log("connected"))
.catch((err)=>console.log("not connected"))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
