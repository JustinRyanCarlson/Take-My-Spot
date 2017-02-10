var express = require("express");
var router = express.Router();
var db = require("../models");
var passport = require('passport');
var geocoder = require('geocoder');
var script = {
    login: '<script src="javascript/login.js" type="text/javascript"></script>',
    owner: '<script src="javascript/owner.js" type="text/javascript"></script>',
    renter: '<script src="javascript/renter.js" type="text/javascript"></script><script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAkjQIFfTlx7SAlf71jK9wgvWj6-Urkamc&callback=initMap"></script>'
};

// ROUTES

router.post('/register', function(req, res) {
    db.Users.register(req.body.email, req.body.password, function(err, user) {
        if (err) {

            return res.json(err);
        }
        console.log(user);
        res.json(user);
    });
});

router.post('/login', passport.authenticate('local', {
        failureRedirect: '/login'
    }),
    function(req, res) {
        // If this function gets called, authentication was successful.
        // `req.user` contains the authenticated user.
        // res.json(req.user);
        console.log('loggedin');
        res.redirect('/renter');
    });

router.post("/newuser", function(req, res) {
    console.log(req.body);
    db.users.create({
        email: req.body.email,
        password: req.body.password
    });
});

router.post("/login", function(req, res) {
    console.log('success');
});

router.get("/login", function(req, res) {
    res.render('login.handlebars', {
        title: 'TMS | Login',
        user: 'login',
        loginurl: "/login",
        scripts: script.login
    });
});

// need to add a user placeholder to this route
router.get('/renter', function(req, res) {
    if (req.isAuthenticated()) {
        console.log('user logged in', req.user);
        res.render('renter.handlebars', {
            title: 'TMS | Rentals',
            scripts: script.renter
        });
    } else {
        console.log('user not logged in');
        res.redirect('/loginerror');
    }
});

router.get('/renterForm', function(req, res) {
    res.render('renterForm.handlebars', {
        title: 'TMS | Rentals Form',
        scripts: script.renter
    });
});

router.get('/about', function(req, res) {
    res.render('about.handlebars', {
        title: 'TMS | About'
    });
});

router.get('/owner', function(req, res) {
    res.render('owner.handlebars', {
        title: 'TMS | Owner',
        scripts: script.owner
    });
});

router.get('/api/locations', function(req, res) {
    db.Owners.findAll({}).then(function(data) {
        res.json(data);
    });
});

router.get('/renter/property/:id', function(req, res) {
    db.Owners.findOne({
        where: {
            id: req.params.id
        }
    }).then(function(data) {
        // this gives all info in the DB for the entry clicked
        console.log(data.dataValues);
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
            price: req.body.price,
            monday: req.body.monday,
            0: req.body.zero
        }).then(function(dbRes) {
            // res.json(dbRes);
            res.redirect("/");
        });
    });

});

router.get('/loginerror', function(req, res) {
    res.render('loginerror.handlebars', {
        title: 'TMS | Error'
    });
});

// --------------------------------------put this last---------------------------------
router.use(function(req, res) {
    res.render('landingPage.handlebars', {
        title: 'TMS | Welcome',
    });
});


// Export routes for server.js to use.
module.exports = router;
