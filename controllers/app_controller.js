var express = require("express");
var router = express.Router();
var db = require("../models");
var passport = require('passport');
var geocoder = require('geocoder');
var script = {
    login: '<script src="javascript/login.js" type="text/javascript"></script>',
    owner: '<script src="javascript/owner.js" type="text/javascript"></script><script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>',
    renter: '<script src="javascript/renter.js" type="text/javascript"></script><script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAkjQIFfTlx7SAlf71jK9wgvWj6-Urkamc&callback=initMap"></script><script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>',
    about: '<script src="javascript/about.js" type="text/javascript"></script>',
    landingPage: '<script src="javascript/landingpage.js" type="text/javascript"></script>',
    propertyList: '<script src="javascript/propertyList.js" type="text/javascript"></script>',
    renterList: '<script src="javascript/renterList.js" type="text/javascript"></script>'
};



// ROUTES



// --------------------------------------POST Routes--------------------------------
router.post('/register', function (req, res) {
    db.Users.register(req.body.email.toLowerCase(), req.body.password, function (err, user) {
        if (err) {
            console.log(err);
            res.redirect('/login');
        } else {
            passport.authenticate('local')(req, res, function () {
                res.redirect('/renter');
            });
        }
    });
});

router.post('/login', passport.authenticate('local', {
    failureRedirect: '/login'
}),
    function (req, res) {
        res.redirect('/renter');
    });

router.post("/login", function (req, res) {
    console.log('success');
});

router.post("/", function (req, res) {
    var address = req.body.address + ", " + req.body.city;
    geocoder.geocode(address, function (err, data) {
        db.Properties.create({
            zipcode: req.body.zipcode,
            address: req.body.address,
            city: req.body.city,
            state: req.body.state,
            price: req.body.price,
            longitude: data.results[0].geometry.location.lng,
            latitude: data.results[0].geometry.location.lat,
            UserId: req.user.id
        }).then(function () {
            res.redirect("/propertyList");
        });
    });
});

router.post('/rentnow', function (req, res) {
    console.log(req.body.id, req.body.date);
    db.Reservations.count({
        where: {
            PropertyId: req.body.id,
            date: req.body.date
        }
    }).then(function (count) {
        if (count === 1) {
            res.send('fail');
        } else {
            db.Properties.findOne({
                where: {
                    id: req.body.id
                }
            }).then(function (data) {
                console.log(data.dataValues.address);
                db.Reservations.create({
                    UserId: req.user.id,
                    PropertyId: req.body.id,
                    date: req.body.date,
                    revAddress: data.dataValues.address,
                    revCity: data.dataValues.city,
                    revPrice: data.dataValues.price,
                    revZipcode: data.dataValues.zipcode
                }).then(function () {
                    res.send('pass');
                });
            });
        }
    });
});



// --------------------------------------GET Routes--------------------------------
router.get('/logout', function (req, res) {
    req.session.destroy(function (err) {
        res.redirect('/login');
    });
});

router.get("/login", function (req, res) {
    if (req.user !== undefined) {
        res.redirect('/renter');
    } else {
        res.render('login.handlebars', {
            title: 'TMS | Login',
            scripts: script.login
        });
    }
});


router.get('/renterList', function (req, res) {
    if (req.user !== undefined) {
        db.Reservations.findAll({
            where: {
                UserId: req.user.id
            }
        }).then(function (ownerResp) {
            res.render('renterList.handlebars', {
                title: 'TMS | Rental List',
                scripts: script.renterList,
                user: "Welcome, " + req.user.email,
                account_owner: "Properties",
                account_renter: "Renting",
                logout: 'Logout',
                Owners: ownerResp
            });
        });
    } else {
        res.redirect('/loginerror');
    }
});



router.get('/renter', function (req, res) {
    if (req.isAuthenticated()) {
        res.render('renter.handlebars', {
            title: 'TMS | Rentals',
            scripts: script.renter,
            user: "Welcome, " + req.user.email,
            account_owner: "Properties",
            account_renter: "Renting",
            logout: 'Logout'
        });
    } else {
        console.log('user not logged in');
        res.redirect('/loginerror');
    }
});


router.get('/about', function (req, res) {
    if (req.user !== undefined) {
        res.render('about.handlebars', {
            title: 'TMS | About',
            scripts: script.about,
            user: "Welcome, " + req.user.email,
            account_owner: "Properties",
            account_renter: "Renting",
            logout: 'Logout'
        });
    } else {
        res.render('about.handlebars', {
            title: 'TMS | About',
            scripts: script.about
        });
    }
});



router.get('/propertyList', function (req, res) {
    if (req.user !== undefined) {
        db.Properties.findAll({
            where: {
                UserId: req.user.id
            }
        }).then(function (ownerResp) {
            res.render('propertyList.handlebars', {
                title: 'TMS | Property List',
                scripts: script.propertyList,
                user: "Welcome, " + req.user.email,
                account_owner: "Properties",
                account_renter: "Renting",
                logout: 'Logout',
                Owners: ownerResp
            });
        });

    } else {
        res.redirect('/loginerror');
    }
});


router.get('/owner', function (req, res) {
    if (req.isAuthenticated()) {
        console.log('user logged in', req.user);
        res.render('owner.handlebars', {
            title: 'TMS | Owner Form',
            scripts: script.owner,
            user: "Welcome, " + req.user.email,
            account_owner: "Properties",
            account_renter: "Renting",
            logout: 'Logout'
        });
    } else {
        console.log('user not logged in');
        res.redirect('/loginerror');
    }
});

router.get('/api/locations', function (req, res) {
    db.Properties.findAll({}).then(function (data) {
        res.json(data);
    });
});





router.get('/loginerror', function (req, res) {
    res.render('loginerror.handlebars', {
        title: 'TMS | Error'

    });
});



// --------------------------------------Default USE Route--------------------------------
router.use(function (req, res) {
    if (req.user !== undefined) {
        res.render('landingPage.handlebars', {
            title: 'TMS | Welcome',
            scripts: script.landingPage,
            user: "Welcome, " + req.user.email,
            account_owner: "Properties",
            account_renter: "Renting",
            logout: 'Logout'
        });
    } else {
        res.render('landingPage.handlebars', {
            title: 'TMS | Welcome',
            scripts: script.landingPage
        });
    }
});


// Export routes for server.js to use.
module.exports = router;
