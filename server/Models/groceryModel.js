const mongoose = require('mongoose');

var grocerySchema = new mongoose.Schema({
    item: String,
    price: String,
});

var Grocery = mongoose.model('grocery', grocerySchema);

module.exports = Grocery


