// console.log("I am in the exppress server");
const express = require("express");
const dotenve = require("dotenv").config();
const app = express();;
const port = process.env.PORT || 5000;

app.get("/api/contacts", (req, res) => {
    // res.send({"message":"Get all constcts"}) // this is the old way
    // res.json({"message":"Get all constcts"}) // this is the new way
    res.status(200).json({ "message": "Get all contacts" }) // this is the new way
})


app.listen(port, () => { console.log(`server is running on port ${port}`) });