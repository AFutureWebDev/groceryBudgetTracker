const router = express.Router();
const fetch = require('node-fetch');

router.get('/search/:searchText', (req, res) => {
    const apiKey = process.env.API_KEY;
    const apiId = process.env.API_ID;
    fetch(`https://api.edamam.com/api/food-database/parser?ingr=${searchText.trim()}&app_id=${apiId}&app_key=${apiKey}`) 
    .then(res => res.json())
    .then(data => {
        res.json(data);
    })
    .catch(console.log);
});