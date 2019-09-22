require('dotenv').config()

const express = require("express");
const bodyParser = require("body-parser");
const groceriesRoutes = require("./routes/Groceries");

const app = express();
app.use(bodyParser.json());
app.use(groceriesRoutes)

app.listen(3002, (err) => {
 if (err) {
   return console.log("Error", err);
 }
 console.log("Web server is now listening for messages", err);
});




