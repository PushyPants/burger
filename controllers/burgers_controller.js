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

router.post('/add/burger', function (req, res) {
    let newBurger = req.body.name;

    burgers.create(newBurger, function (data) {
        console.log(data)
        if (data.affectedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.post('/update/burger', function (req, res) {
    let burgerId = req.body.id;

    burgers.devour(burgerId, function (data) {
        console.log(data)
        if (data.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete('/delete/burger/:id', function(req,res) {
    //create delete function if time
})

module.exports = router