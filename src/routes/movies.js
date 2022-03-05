const { Router } = require('express');
const router = new Router();

const movies = require('../movies.json');

router.get('/', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.json(movies);
});

module.exports = router;