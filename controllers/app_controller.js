var express = require("express");
var router = express.Router();
var db = require("../models");
var script = {
    login: '<script src="javascript/login.js" type="text/javascript"></script>',
    owner: '<script src="javascript/owner.js" type="text/javascript"></script><script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAkjQIFfTlx7SAlf71jK9wgvWj6-Urkamc&libraries=places&callback=initAutocomplete" async defer></script>',
    renter: '<script src="javascript/renter.js" type="text/javascript"></script><script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAkjQIFfTlx7SAlf71jK9wgvWj6-Urkamc&callback=initMap"></script>'
};

// ROUTES

router.post("/newuser", function (req, res) {
    console.log(req.body);
    db.users.create({
        email: req.body.email,
        password: req.body.password,
        name: req.body.name,
        phone: req.body.phone
    });
});

router.post("/login", function (req, res) {
    console.log('success');
});

// need to add a user placeholder to this route
router.get('/renter', function (req, res) {
    res.render('renter.handlebars', {
        title: 'TMS | Rentals',
        scripts: script.renter
    });
});

// need to add a user placeholder to this route
router.get('/owner', function (req, res) {
    res.render('owner.handlebars', {
        title: 'TMS | Owner',
        scripts: script.owner
    });
});



// owner model routes -------------------------------------------------------------------------
// router.get("/", function(req, res) {

//     db.owners.findAll({}).then(function(dbresp) {
//         res.render("owner", { title: 'TMS | Owner', scripts: script.owner }, {
//             owners: dbresp
//         });
//     });
// });

router.post("/", function (req, res) {
    console.log(req.body);
    db.owners.create({
        zipcode: req.body.zipcode,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        price: req.body.price,
        monday: req.body.monday,
        0: req.body.zero
    }).then(function (dbRes) {
        // res.json(dbRes);
        res.redirect("/");
    });
});

// --------------------------------------put this last---------------------------------
router.use(function (req, res) {
    res.render('login.handlebars', {
        title: 'TMS | Welcome',
        scripts: script.login
    });
});


// Export routes for server.js to use.
module.exports = router;