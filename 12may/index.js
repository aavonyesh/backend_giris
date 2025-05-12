// console.log("My first node.js file")
// const arr = [
//   {
//     id: 2,
//     description: "Sweet and savory sauces relishes spreads and seasonings",
//     name: "Condiments",
//   },
//   {
//     id: 1,
//     description: "Soft drinks coffees teas beers and ales",
//     name: "Beverages",
//   },
//   {
//     id: 3,
//     description: "Desserts candies and sweet breads",
//     name: "Confections",
//   },
//   {
//     id: 4,
//     description: "Cheeses",
//     name: "Dairy Products",
//   },
//   {
//     id: 5,
//     description: "Breads crackers pasta and cereal",
//     name: "Grains/Cereals",
//   },
//   {
//     id: 6,
//     description: "Prepared meats",
//     name: "Meat/Poultry",
//   },
//   {
//     id: 7,
//     description: "Dried fruit and bean curd",
//     name: "Produce",
//   },
//   {
//     id: 8,
//     description: "Seaweed and fish",
//     name: "Seafood",
//   },
// ];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i].id > 5) {
//     console.log(arr[i]);
//   }
// }
// const filtered = arr.filter((item) => item.id > 5);
// console.log(filtered);
const express = require('express')
const app = express()
const port = 3000

// app.get('/ainur', (req, res) => {
//   res.send('Hello Ainur!')
// })
// app.get('/ainurblog', (req, res) => {
//   res.send('Hello ainurblog!')
// })
// app.get('/about', (req, res) => {
//   res.send('About Ainur business')
// })
// app.delete('/ainur', (req, res) => {
//   res.send('deleted data')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

const arr = [
    {
      "id": 2,
      "description": "Sweet and savory sauces relishes spreads and seasonings",
      "name": "Condiments"
    },
    {
      "id": 1,
      "description": "Soft drinks coffees teas beers and ales",
      "name": "Beverages"
    }
]
app.get('/ainur', (req, res) => {
  res.send(arr)
})
app.get('/ainur/:id',(req,res) =>{
    const {id} = req.params
    const element = arr.find((x)=>x.id === +id)
    res.send(element)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})