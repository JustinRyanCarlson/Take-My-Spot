var express = require("express");
var router = express.Router();
var db = require("../models");


// ROUTES
router.use(function(req, res) {
    res.render('login.handlebars');
});


// Export routes for server.js to use.
module.exports = router;
