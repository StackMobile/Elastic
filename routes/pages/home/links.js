var express = require('express');
var router = express.Router();
var async = require('async');
// var path = require('path');


Link = require('../../../models/link');

router.get('/', (req, res, next) => {


    if (req.cookies.email && req.cookies.password) {
        res.render('pages/home/links', { title: 'links' });
    } else {
        res.redirect('/pages/login');
    }

});


router.post('/', (req, res, next) => {

    Link.find(function(err, links) {

        if (err) return res.status(500).send({ error: 'database failure' });

        res.json(links);
    })

});

module.exports = router;