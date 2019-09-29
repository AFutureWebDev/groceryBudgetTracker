const express = require("express");
const router = express.Router();
const {list,show,create} = require("../Controllers/groceryController")


// VEHICLES
router.get('/groceries', list)
router.get('/groceries/:groceryId', show)  
router.post('/groceries', create)

  module.exports = router;