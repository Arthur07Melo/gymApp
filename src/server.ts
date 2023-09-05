import express from "express";


const PORT = 3000;

const app = express();

app.get("/", (req, res) => {
    res.send("Hello world!");
});

app.listen(PORT, ()=> {
    console.log("Server running on port 3000\nhttp://localhost:3000");
});