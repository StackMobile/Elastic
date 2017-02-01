var express = require('express');
var router = express.Router();
// var async = require('async');
// var path = require('path');

router.get('/', (req, res, next) => {

    if (req.cookies.email && req.cookies.password) {
        console.log("redirected to home page");

        res.render('pages/home/home', { title: 'home' });
    } else {

        console.log("redirected to login page");
        res.redirect('/pages/login');
    }

});

module.exports = router;