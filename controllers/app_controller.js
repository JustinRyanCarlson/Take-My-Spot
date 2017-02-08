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
        zero: req.body.zero,
        one: req.body.one,
        two: req.body.two,
        three: req.body.three,
        four: req.body.four,
        five: req.body.five,
        six: req.body.six,
        seven: req.body.seven,
        eight: req.body.eight,
        nineine: req.body.nine,
        ten: req.body.ten,
        eleven: req.body.eleven,
        twelve: req.body.twelve,
        thirteen: req.body.thirteen,
        fourteen: req.body.fourteen,
        fifteen: req.body.fifteen,
        sixteen: req.body.sixteen,
        seventeen: req.body.seventeen,
        eighteen: req.body.eighteen,
        nineteen: req.body.nineteen,
        twenty: req.body.twenty,
        twentyone: req.body.twentyone,
        twentytwo: req.body.twentytwo,
        twentythree: req.body.twentythree
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
