const express = require("express");
const app = express();
const port = 3000;

let articles = [
  {
    id: 1,
    title: "Understanding JavaScript Closures",
    content:
      "A closure is a function that has access to its outer function's scope...",
    author: "John Doe",
    isPublished: true,
    coverImage: "https://example.com/js-closures.jpg",
    category: "Programming",
    summary: "Learn the concept of closures in JavaScript with clear examples.",
  },
  {
    id: 2,
    title: "The Ultimate Guide to React Router",
    content: "React Router is a powerful routing library for React...",
    author: "Jane Smith",
    isPublished: false,
    coverImage: "https://example.com/react-router.jpg",
    category: "Frontend Development",
    summary: "Explore the core concepts of React Router for better navigation.",
  },
  {
    id: 3,
    title: "Mastering CSS Flexbox and Grid",
    content: "Flexbox and Grid are modern CSS layout systems...",
    author: "Alice Johnson",
    isPublished: true,
    coverImage: "https://example.com/css-layouts.jpg",
    category: "Web Design",
    summary: "Become an expert in modern CSS layouts with Flexbox and Grid.",
  },
  {
    id: 4,
    title: "Node.js Best Practices for Beginners",
    content: "Node.js is a popular runtime environment for JavaScript...",
    author: "Michael Brown",
    isPublished: false,
    coverImage: "https://example.com/nodejs-best.jpg",
    category: "Backend Development",
    summary: "Get started with Node.js by following these best practices.",
  },
  {
    id: 5,
    title: "Exploring Python Decorators",
    content: "Decorators are a powerful tool in Python...",
    author: "Emma Wilson",
    isPublished: true,
    coverImage: "https://example.com/python-decorators.jpg",
    category: "Programming",
    summary: "Understand how decorators work in Python with examples.",
  },
  {
    id: 6,
    title: "A Guide to Responsive Web Design",
    content: "Responsive design makes websites look great on any device...",
    author: "Chris Lee",
    isPublished: true,
    coverImage: "https://example.com/responsive-design.jpg",
    category: "Web Design",
    summary:
      "Learn how to create responsive websites using CSS and media queries.",
  },
  {
    id: 7,
    title: "Effective Git Workflows for Teams",
    content: "Collaborating on code requires a good Git workflow...",
    author: "Sophia Clark",
    isPublished: false,
    coverImage: "https://example.com/git-workflows.jpg",
    category: "Version Control",
    summary: "Discover the best Git workflows for team collaboration.",
  },
  {
    id: 8,
    title: "Introduction to Docker Containers",
    content: "Docker is a popular tool for containerization...",
    author: "Daniel Martin",
    isPublished: true,
    coverImage: "https://example.com/docker-intro.jpg",
    category: "DevOps",
    summary: "Get started with Docker containers and their uses.",
  },
  {
    id: 9,
    title: "Understanding RESTful APIs",
    content: "RESTful APIs are a fundamental part of web development...",
    author: "Olivia Davis",
    isPublished: true,
    coverImage: "https://example.com/rest-apis.jpg",
    category: "Backend Development",
    summary: "Learn the basics of RESTful APIs with practical examples.",
  },
  {
    id: 10,
    title: "Advanced JavaScript: Asynchronous Programming",
    content: "JavaScript offers several ways to handle asynchronous code...",
    author: "Ethan White",
    isPublished: false,
    coverImage: "https://example.com/async-js.jpg",
    category: "Programming",
    summary:
      "Master asynchronous JavaScript with Promises, Async/Await, and Callbacks.",
  },
];
let nextId = 10;
app.use(express.json());
app.get("/blog", (req, res) => {
  res.send(articles);
});
app.get("/blog/:id", (req, res) => {
  const { id } = req.params;
  const element = articles.find((x) => x.id === +id);
  res.send(element);
});
app.delete("/blog/:id", (req, res) => {
  const { id } = req.params;
  articles = articles.filter((x) => x.id !== +id);
  res.send("success");
});
app.post("/blog", (req, res) => {
  try {
    const obj = req.body;
    if (!obj.title || !obj.content || !obj.author) {
      return res.status(400).send("Missing required fields");
    }
    obj.id = nextId++;
    articles.push(obj);

    console.log("Added article:", obj);
    res.status(201).send(obj);
  } catch (e) {
    console.log("Bad JSON", e);
    res.sendStatus(400);
  }
});
app.put('/blog/:id', (req, res) => {
    const {id} = req.params;
    const updatedData = req.body;
    if (data.id !== +id) {
      return res.status(404).send("Data not found");
    }
    data = { ...articles, ...updatedData };
    res.send(articles);
  });
app.listen(3000, () => {
  console.log(`Example app listening on port ${port}..`);
});
