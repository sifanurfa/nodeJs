// const fs = require('fs');

// bikin file, klo file udh ada, bakal replace isinya
// fs.writeFileSync('index.txt', 'Hello, world!');
/*
fs.writeFileSync('index.txt',
    JSON.stringify({
        name: 'John Doe'
    })
);
*/

/*
const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;

    if (url == "/") {
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify({
            message: 'Hello, World!'
        }));
    } else if (url == "/profile") {
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify({
            message: 'Profile'
        }));
    } else {
        res.writeHead(500, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({
            message: 'Not Found'
        }));
    }
});

server.listen(8000, ()=>{
    console.log('App listen on port 8000');
});
*/

// pake express
const express = require("express");
const userRouter = require("./router/user.router");
const app = express();

// app.use(express.urlencoded({extended: false}));
app.use(express.json());
// routing
app.get("/", (req, res) => {
  res.status(200).send({ message: "Welcome" });
});

app.get("/profile", (req, res) => {
  res.json({ message: "Profile" });
});

app.use(userRouter);
app.listen(8000, () => {
  console.log("App listen on port 8000");
});
