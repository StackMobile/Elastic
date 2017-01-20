var express = require('express');
var router = express.Router();
// var async = require('async');
// var path = require('path');

router.get('/', (req, res, next) => {
    res.render('pages/login/register', { title: 'Express' });
});

module.exports = router;