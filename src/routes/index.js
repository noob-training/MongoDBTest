var router = require('express').Router();

router.route('/')
    .get(function (req, res) {
        res.render('index', {
            'title': 'Title from express',
            'header': 'header from express',
            'para': 'Para from express'
        });
    });

module.exports = router;