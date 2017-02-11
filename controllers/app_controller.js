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
    propertyList: '<script src="javascript/propertyList.js" type="text/javascript"></script>'
};

// ROUTES

router.post('/register', function(req, res) {
    db.Users.register(req.body.email.toLowerCase(), req.body.password, function(err, user) {
        if (err) {
            return res.json(err);
        } else {
            passport.authenticate('local')(req, res, function() {
                res.redirect('/renter');
            });
        }
    });
});

router.post('/login', passport.authenticate('local', {
        failureRedirect: '/login'
    }),
    function(req, res) {
        // res.json(req.user);
        console.log('loggedin');
        res.redirect('/renter');
    });

router.get('/logout', function(req, res) {
    req.session.destroy(function(err) {
        res.redirect('/login');
    });
});

<<<<<<< HEAD
router.post("/newuser", function(req, res) {
    console.log(req.body);
    db.users.create({
        email: req.body.email,
        password: req.body.password
    });
});

=======
>>>>>>> 19180f2f9d729cc495bd4f5083c969dfde822660
router.post("/login", function(req, res) {
    console.log('success');
});

router.get("/login", function(req, res) {
    if (req.user !== undefined) {
        res.redirect('/renter');
    } else {
        res.render('login.handlebars', {
            title: 'TMS | Login',
            scripts: script.login
        });
    }
});

<<<<<<< HEAD
// router.post('/renter', function(req, res) {
//     console.log(req.body);
//     db.Availabilities.create({

//     });
// });

router.put('/renter/:id', function(req, res) {
    db.Properties.update( 
    {
        where: {
            id: req.params.id
        }
    });
});

// need to add a user placeholder to this route
=======
>>>>>>> 19180f2f9d729cc495bd4f5083c969dfde822660
router.get('/renter', function(req, res) {
    if (req.isAuthenticated()) {
        console.log('user logged in', req.user);
        res.render('renter.handlebars', {
            title: 'TMS | Rentals',
            scripts: script.renter,
            user: "Welcome, " + req.user.email,
            account_owner: "Properties",
            account_owner_url: "/owner/" + req.user.email,
            account_renter: "Renting",
            account_renter_url: "/renter/" + req.user.email,
            logout: 'Logout'
        });
    } else {
        console.log('user not logged in');
        res.redirect('/loginerror');
    }
});

<<<<<<< HEAD
router.post("/", function(req, res) {

    db.Properties.create({
        zipcode: req.body.zipcode,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        price: req.body.price,
        date: req.body.date,
        UserId: req.user.id

    }).then(function(dbRes) {
    
            res.redirect("/");            
        });
    });


=======
>>>>>>> 19180f2f9d729cc495bd4f5083c969dfde822660
router.get('/about', function(req, res) {
    if (req.user !== undefined) {
        res.render('about.handlebars', {
            title: 'TMS | About',
            scripts: script.about,
            user: "Welcome, " + req.user.email,
            account_owner: "Properties",
            account_owner_url: "/owner/" + req.user.email,
            account_renter: "Renting",
            account_renter_url: "/renter/" + req.user.email,
            logout: 'Logout'
        });
    } else {
        res.render('about.handlebars', {
            title: 'TMS | About',
            scripts: script.about
        });
    }
});

<<<<<<< HEAD
=======


router.get('/propertyList', function(req, res) {
    if (req.user !== undefined) {

        db.Owners.findAll({
            where: {
                UserId: req.user.id
            }
        }).then(function(ownerResp) {
            // console.log("HIIIIIIII" + ownerResp);
            res.render('propertyList.handlebars', {
                title: 'TMS | Property',
                scripts: script.propertyList,
                user: "Welcome, " + req.user.email,
                account_owner: "Properties",
                account_renter: "Renting",
                logout: 'Logout',
                Owners: ownerResp
            });
        });

    } else {
        res.render('propertyList.handlebars', {
            title: 'TMS | About',
            scripts: script.about
        });
    }
});

>>>>>>> 19180f2f9d729cc495bd4f5083c969dfde822660
router.get('/owner', function(req, res) {
    if (req.isAuthenticated()) {
        console.log('user logged in', req.user);
        res.render('owner.handlebars', {
            title: 'TMS | Owner',
            scripts: script.owner,
            user: "Welcome, " + req.user.email,
            account_owner: "Properties",
            account_owner_url: "/owner/" + req.user.email,
            account_renter: "Renting",
            account_renter_url: "/renter/" + req.user.email,
            logout: 'Logout'
        });
    } else {
        console.log('user not logged in');
        res.redirect('/loginerror');
    }
});

router.get('/api/locations', function(req, res) {
    db.Properties.findAll({}).then(function(data) {
        res.json(data);
    });
});


router.post('/rentnow', function(req, res) {
    console.log(req.body.id, req.body.date);
    db.Reservations.findOne({
        where: {
            PropertyId: req.body.id,
            date: req.body.date
        }
    }).then(function(data) {
        // this gives all info in the DB for the entry clicked
        console.log(data.dataValues);
    });
});


router.post("/", function(req, res) {
    var address = req.body.address + ", " + req.body.city;
    geocoder.geocode(address, function(err, data) {
        db.Properties.create({
            zipcode: req.body.zipcode,
            address: req.body.address,
            city: req.body.city,
            state: req.body.state,
            price: req.body.price,
            date: req.body.date,
            UserId: req.user.ids
        }).then(function(dbRes) {
            res.redirect("/propertyList");
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
    if (req.user !== undefined) {
        res.render('landingPage.handlebars', {
            title: 'TMS | Welcome',
            scripts: script.landingPage,
            user: "Welcome, " + req.user.email,
            account_owner: "Properties",
            account_owner_url: "/owner/" + req.user.email,
            account_renter: "Renting",
            account_renter_url: "/renter/" + req.user.email,
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
