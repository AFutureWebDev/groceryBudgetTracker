let express = require("express");
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://database-user-1:password12345@cluster0-f06bo.mongodb.net/GroceryBudgetTracker', {useNewUrlParser: true},(err)=>{
   console.log(err)
   //start web server
});

let bodyParser = require("body-parser");
let app = express();
let groceryRoute = require('./Routes/groceryRoute');



app.use(bodyParser.json());
app.use(express.static("public"));

const thePort = 4000;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(groceryRoute);


app.listen(thePort, (err) => {
  if (err) {
    return console.log("Error", err);
  }
  console.log("Web server is now listening for messages on port",thePort);
 });


