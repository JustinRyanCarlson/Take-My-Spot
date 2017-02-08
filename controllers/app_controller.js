var express = require("express");
var router = express.Router();
var db = require("../models");
var geocoder = require('geocoder');
var script = {
    login: '<script src="javascript/login.js" type="text/javascript"></script>',
    owner: '<script src="javascript/owner.js" type="text/javascript"></script>',
    renter: '<script src="javascript/renter.js" type="text/javascript"></script><script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAkjQIFfTlx7SAlf71jK9wgvWj6-Urkamc&callback=initMap"></script>'
};

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
    res.render('renter.handlebars', {
        title: 'TMS | Rentals',
        scripts: script.renter
    });
});

// need to add a user placeholder to this route
router.get('/owner', function(req, res) {
    res.render('owner.handlebars', {
        title: 'TMS | Owner',
        scripts: script.owner
    });
});

router.post("/", function(req, res) {
    console.log(req.body);
    db.Owners.create({
        zipcode: req.body.zipcode,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        price: req.body.price,
        monday: req.body.monday,
        tuesday: req.body.tuesday,
        wednesday: req.body.wednesday,
        thursday: req.body.thursday,
        friday: req.body.friday,
        saturday: req.body.saturday,
        sunday: req.body.sunday,
        0: req.body.zero,
        1: req.body.one,
        2: req.body.two,
        3: req.body.three,
        4: req.body.four,
        5: req.body.five,
        6: req.body.six,
        7: req.body.seven,
        8: req.body.eight,
        9: req.body.nine,
        10: req.body.ten,
        11: req.body.eleven,
        12: req.body.twelve,
        13: req.body.thirteen,
        14: req.body.fourteen,
        15: req.body.fifteen,
        16: req.body.sixteen,
        17: req.body.seventeen,
        18: req.body.eighteen,
        19: req.body.nineteen,
        20: req.body.twenty,
        21: req.body.twentyone,
        22: req.body.twentytwo,
        23: req.body.twentythree
    }).then(function(dbRes) {
        // res.json(dbRes);
        res.redirect("/");
    });
});

router.post("/", function(req, res) {
    geocoder.geocode(req.body.address, function(err, data) {
        db.Owners.create({
            zipcode: req.body.zipcode,
            address: req.body.address,
            city: req.body.city,
            longitude: data.results[0].geometry.location.lng,
            latitude: data.results[0].geometry.location.lat,
            state: req.body.state,
            price: req.body.price
        }).then(function(dbRes) {
            // res.json(dbRes);
            res.redirect("/");
        });
    });
});


// --------------------------------------put this last---------------------------------
router.use(function(req, res) {
    res.render('login.handlebars', {
        title: 'TMS | Welcome',
        scripts: script.login
    });
});


// Export routes for server.js to use.
module.exports = router;
