const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

router.get('/search/:searchText', (req, res) => {
    console.log('groceries router')
    console.log(req.params.searchText)
    const apiKey = process.env.API_KEY;
    const apiId = process.env.API_ID;
    fetch(`https://api.edamam.com/api/food-database/parser?ingr=${req.params.searchText.trim()}&app_id=${apiId}&app_key=${apiKey}`) 
    .then(res => res.json())
    .then(data => {
        console.log(data);
        res.json(data);
    })
    .catch(console.log);
});

module.exports = router;