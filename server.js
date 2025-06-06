// console.log("I am in the exppress server");
const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const dotenve = require("dotenv").config();

connectDb(); // this is the new way to connect to the database
const app = express();;
const port = process.env.PORT || 5000;

// app.get("/api/contacts", (req, res) => {
//     // res.send({"message":"Get all constcts"}) // this is the old way
//     // res.json({"message":"Get all constcts"}) // this is the new way
//     res.status(200).json({ "message": "Get all contacts" }) // this is the new way
// })
app.use(express.json()); // this is the new way to parse json object from the body
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);

app.listen(port, () => { console.log(`server is running on port ${port}`) });