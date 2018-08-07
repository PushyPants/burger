let express = require('express');
let burgers = require('../models/burger');

let router = express.Router();

//api route
router.get('/api/', function (req, res) {
    burgers.all(function (data) {
        res.json(data);
    });
});

//Get route for html output w/hbs
router.get('/', function (req, res) {
    burgers.all(function (data) {
        let hbsObj = {
            burger: data
        };

        res.render('index', hbsObj);
    });
});

router.post('/')

module.exports = router