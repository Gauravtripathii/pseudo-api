import express from "express";
import data from "./data.js";

const app = express();

app.get("/", (req, res) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.json(data);
});



console.log(`Pseudo game details API by gaurav : PORT : 5000`);
app.listen(5000);

module.exports = app;