var express = require("express");
var router = express.Router();
var db = require("../models");


// ROUTES

router.post("/newuser", function(req, res) {
    console.log(req.body);
    db.users.create({
        email: req.body.email,
        password: req.body.password,
        name: req.body.name,
        phone: req.body.phone
    });
});

router.post("/login", function(req, res) {
    console.log('success');
});

// need to add a user placeholder to this route
router.get('/renter', function(req, res) {
    res.render('renter.handlebars', { title: 'TMS | Rentals' });
});

router.use(function(req, res) {
    res.render('login.handlebars', { title: 'TMS | Welcome' });
});

// Export routes for server.js to use.
module.exports = router;
