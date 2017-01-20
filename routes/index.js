var express = require('express');
var router = express.Router();


router.use('/pages', require('./pages'));
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

/* Login Page */


module.exports = router;