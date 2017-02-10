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

// router.post('/renter', function(req, res) {
//     console.log(req.body);
//     db.Availabilities.create({

//     });
// });

// router.put('/renter/:id', function(req, res) {
//     db.Owners.delete({}, 
//     {
//         where: {
//             id: req.params.id
//         }
//     });
// });

// need to add a user placeholder to this route
router.get('/owner', function(req, res) {
    res.render('owner.handlebars', {
        title: 'TMS | Owner',
        scripts: script.owner
    });
});

router.post("/owner", function(req, res) {
    console.log(req.body);
    db.Properties.create({
        zipcode: req.body.zipcode,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        price: req.body.price
    }).then(function(dbRes) {
        
    db.Schedules.create({
        days: req.body.monday,
        time_0: req.body.zero,
        time_1: req.body.one, 
        time_2: req.body.two, 
        time_3: req.body.three, 
        time_4: req.body.four, 
        time_5: req.body.five, 
        time_6: req.body.six, 
        time_7: req.body.seven, 
        time_8: req.body.eight, 
        time_9: req.body.nine, 
        time_10: req.body.ten, 
        time_11: req.body.eleven, 
        time_12: req.body.twelve, 
        time_13: req.body.thirteen, 
        time_14: req.body.fourteen, 
        time_15: req.body.fifteen, 
        time_16: req.body.sixteen, 
        time_17: req.body.seventeen, 
        time_18: req.body.eighteen, 
        time_19: req.body.nineteen, 
        time_20: req.body.twenty, 
        time_21: req.body.twentyone, 
        time_22: req.body.twentytwo, 
        time_23: req.body.twentythree 
    });

        var result;
         for(i=0; i<db.Schedules.findAll({
            where: {time_0: 0}}).length; i++){
         result = db.Schedules.time_[i];
    }
    console.log('rows: ' + result);
        // res.json(dbRes);
        res.redirect("/owner");
    });
});

router.post("/", function(req, res) {
    geocoder.geocode(req.body.address, function(err, data) {
        db.Properties.create({
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
