var express = require("express");
var router = express.Router();
var db = require("../models");
var passport = require('passport');
var geocoder = require('geocoder');
var script = {
    login: '<script src="javascript/login.js" type="text/javascript"></script>',
    owner: '<script src="javascript/owner.js" type="text/javascript"></script><script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>',
    renter: '<script src="javascript/renter.js" type="text/javascript"></script><script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAkjQIFfTlx7SAlf71jK9wgvWj6-Urkamc&callback=initMap"></script><script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>',
    about: '<script src="javascript/about.js" type="text/javascript"></script>'
};

// ROUTES

router.post('/register', function (req, res) {
    db.Users.register(req.body.email.toLowerCase(), req.body.password, function (err, user) {
        if (err) {
            return res.json(err);
        }
        res.redirect('/login');
    });
});

router.post('/login', passport.authenticate('local', {
        failureRedirect: '/login'
    }),
    function (req, res) {
        // res.json(req.user);
        console.log('loggedin');
        res.redirect('/renter');
    });

router.get('/logout', function (req, res) {
    req.session.destroy(function (err) {
        res.redirect('/login');
    });
});

router.post("/newuser", function (req, res) {
    console.log(req.body);
    db.users.create({
        email: req.body.email,
        password: req.body.password
    });
});

router.post("/login", function (req, res) {
    console.log('success');
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
router.get('/renter', function (req, res) {
    if (req.isAuthenticated()) {
        console.log('user logged in', req.user);
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

router.post("/owner", function(req, res) {
    
    db.Properties.create({
        zipcode: req.body.zipcode,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        price: req.body.price
        
    }).then(function(dbRes) {
        
    db.Schedules.create({
        days: req.body.monday,   
        time_0: req.body.m_zero,
        time_1: req.body.m_one, 
        time_2: req.body.m_two, 
        time_3: req.body.m_three, 
        time_4: req.body.m_four, 
        time_5: req.body.m_five, 
        time_6: req.body.m_six, 
        time_7: req.body.m_seven, 
        time_8: req.body.m_eight, 
        time_9: req.body.m_nine, 
        time_10: req.body.m_ten, 
        time_11: req.body.m_eleven, 
        time_12: req.body.m_twelve, 
        time_13: req.body.m_thirteen, 
        time_14: req.body.m_fourteen, 
        time_15: req.body.m_fifteen, 
        time_16: req.body.m_sixteen, 
        time_17: req.body.m_seventeen, 
        time_18: req.body.m_eighteen, 
        time_19: req.body.m_nineteen, 
        time_20: req.body.m_twenty, 
        time_21: req.body.m_twentyone, 
        time_22: req.body.m_twentytwo, 
        time_23: req.body.m_twentythree 
   });
    }).then(function(dbRes){
         db.Schedules.create({
        days: req.body.tuesday,
        time_0: req.body.t_zero,
        time_1: req.body.t_one, 
        time_2: req.body.t_two, 
        time_3: req.body.t_three, 
        time_4: req.body.t_four, 
        time_5: req.body.t_five, 
        time_6: req.body.t_six, 
        time_7: req.body.t_seven, 
        time_8: req.body.t_eight, 
        time_9: req.body.t_nine, 
        time_10: req.body.t_ten, 
        time_11: req.body.t_eleven, 
        time_12: req.body.t_twelve, 
        time_13: req.body.t_thirteen, 
        time_14: req.body.t_fourteen, 
        time_15: req.body.t_fifteen, 
        time_16: req.body.t_sixteen, 
        time_17: req.body.t_seventeen, 
        time_18: req.body.t_eighteen, 
        time_19: req.body.t_nineteen, 
        time_20: req.body.t_twenty, 
        time_21: req.body.t_twentyone, 
        time_22: req.body.t_twentytwo, 
        time_23: req.body.t_twentythree
    });
    }).then(function(dbRes){
         db.Schedules.create({
        days: req.body.wednesday,
        time_0: req.body.w_zero,
        time_1: req.body.w_one, 
        time_2: req.body.w_two, 
        time_3: req.body.w_three, 
        time_4: req.body.w_four, 
        time_5: req.body.w_five, 
        time_6: req.body.w_six, 
        time_7: req.body.w_seven, 
        time_8: req.body.w_eight, 
        time_9: req.body.w_nine, 
        time_10: req.body.w_ten, 
        time_11: req.body.w_eleven, 
        time_12: req.body.w_twelve, 
        time_13: req.body.w_thirteen, 
        time_14: req.body.w_fourteen, 
        time_15: req.body.w_fifteen, 
        time_16: req.body.w_sixteen, 
        time_17: req.body.w_seventeen, 
        time_18: req.body.w_eighteen, 
        time_19: req.body.w_nineteen, 
        time_20: req.body.w_twenty, 
        time_21: req.body.w_twentyone, 
        time_22: req.body.w_twentytwo, 
        time_23: req.body.w_twentythree
     });
    }).then(function(dbRes){
         db.Schedules.create({
         days: req.body.thursday,
        time_0: req.body.th_zero,
        time_1: req.body.th_one, 
        time_2: req.body.th_two, 
        time_3: req.body.th_three, 
        time_4: req.body.th_four, 
        time_5: req.body.th_five, 
        time_6: req.body.th_six, 
        time_7: req.body.th_seven, 
        time_8: req.body.th_eight, 
        time_9: req.body.th_nine, 
        time_10: req.body.th_ten, 
        time_11: req.body.th_eleven, 
        time_12: req.body.th_twelve, 
        time_13: req.body.th_thirteen, 
        time_14: req.body.th_fourteen, 
        time_15: req.body.th_fifteen, 
        time_16: req.body.th_sixteen, 
        time_17: req.body.th_seventeen, 
        time_18: req.body.th_eighteen, 
        time_19: req.body.th_nineteen, 
        time_20: req.body.th_twenty, 
        time_21: req.body.th_twentyone, 
        time_22: req.body.th_twentytwo, 
        time_23: req.body.th_twentythree
     });
    }).then(function(dbRes){
         db.Schedules.create({
        days: req.body.friday,  
        time_0: req.body.f_zero,
        time_1: req.body.f_one, 
        time_2: req.body.f_two, 
        time_3: req.body.f_three, 
        time_4: req.body.f_four, 
        time_5: req.body.f_five, 
        time_6: req.body.f_six, 
        time_7: req.body.f_seven, 
        time_8: req.body.f_eight, 
        time_9: req.body.f_nine, 
        time_10: req.body.f_ten, 
        time_11: req.body.f_eleven, 
        time_12: req.body.f_twelve, 
        time_13: req.body.f_thirteen, 
        time_14: req.body.f_fourteen, 
        time_15: req.body.f_fifteen, 
        time_16: req.body.f_sixteen, 
        time_17: req.body.f_seventeen, 
        time_18: req.body.f_eighteen, 
        time_19: req.body.f_nineteen, 
        time_20: req.body.f_twenty, 
        time_21: req.body.f_twentyone, 
        time_22: req.body.f_twentytwo, 
        time_23: req.body.f_twentythree
    });
    }).then(function(dbRes) {
        db.Schedules.create({
        days: req.body.saturday,  
        time_0: req.body.sa_zero,
        time_1: req.body.sa_one, 
        time_2: req.body.sa_two, 
        time_3: req.body.sa_three, 
        time_4: req.body.sa_four, 
        time_5: req.body.sa_five, 
        time_6: req.body.sa_six, 
        time_7: req.body.sa_seven, 
        time_8: req.body.sa_eight, 
        time_9: req.body.sa_nine, 
        time_10: req.body.sa_ten, 
        time_11: req.body.sa_eleven, 
        time_12: req.body.sa_twelve, 
        time_13: req.body.sa_thirteen, 
        time_14: req.body.sa_fourteen, 
        time_15: req.body.sa_fifteen, 
        time_16: req.body.sa_sixteen, 
        time_17: req.body.sa_seventeen, 
        time_18: req.body.sa_eighteen, 
        time_19: req.body.sa_nineteen, 
        time_20: req.body.sa_twenty, 
        time_21: req.body.sa_twentyone, 
        time_22: req.body.sa_twentytwo, 
        time_23: req.body.sa_twentythree
  });
    }).then(function(dbRes){
         db.Schedules.create({
        days: req.body.sunday,    
        time_0: req.body.su_zero,
        time_1: req.body.su_one, 
        time_2: req.body.su_two, 
        time_3: req.body.su_three, 
        time_4: req.body.su_four, 
        time_5: req.body.su_five, 
        time_6: req.body.su_six, 
        time_7: req.body.su_seven, 
        time_8: req.body.su_eight, 
        time_9: req.body.su_nine, 
        time_10: req.body.su_ten, 
        time_11: req.body.su_eleven, 
        time_12: req.body.su_twelve, 
        time_13: req.body.su_thirteen, 
        time_14: req.body.su_fourteen, 
        time_15: req.body.su_fifteen, 
        time_16: req.body.su_sixteen, 
        time_17: req.body.su_seventeen, 
        time_18: req.body.su_eighteen, 
        time_19: req.body.su_nineteen, 
        time_20: req.body.su_twenty, 
        time_21: req.body.su_twentyone, 
        time_22: req.body.su_twentytwo, 
        time_23: req.body.su_twentythree
     });
    }).then(function(req, res){
    console.log(req.body);
        // res.json(dbRes);
        res.redirect("/");
        });
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

router.get('/owner', function (req, res) {
    if (req.isAuthenticated()) {
        console.log('user logged in', req.user);
        res.render('owner.handlebars', {
            title: 'TMS | Owner',
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

router.get('/renter/property/:id', function (req, res) {
    db.Properties.findOne({
        where: {
            id: req.params.id
        }
    }).then(function (data) {
        // this gives all info in the DB for the entry clicked
        console.log(data.dataValues);
    });
});


router.post("/", function (req, res) {
    var address = req.body.address + ", " + req.body.city;
    geocoder.geocode(address, function (err, data) {
        db.Properties.create({
            zipcode: req.body.zipcode,
            address: req.body.address,
            city: req.body.city,
            longitude: data.results[0].geometry.location.lng,
            latitude: data.results[0].geometry.location.lat,
            state: req.body.state,
            price: req.body.price,
            monday: req.body.monday,
            0: req.body.zero
        }).then(function (dbRes) {
            // res.json(dbRes);
            res.redirect("/");
        });
    });
});

router.get('/loginerror', function (req, res) {
    res.render('loginerror.handlebars', {
        title: 'TMS | Error'

    });
});

// --------------------------------------put this last---------------------------------
router.use(function (req, res) {
    if (req.user !== undefined) {
        res.render('landingPage.handlebars', {
            title: 'TMS | Welcome',
            scripts: script.login,
            user: "Welcome, " + req.user.email,
            account_owner: "Properties",
            account_renter: "Renting",
            logout: 'Logout'
        });
    } else {
        res.render('landingPage.handlebars', {
            title: 'TMS | Welcome',
            scripts: script.login
        });
    }
});


// Export routes for server.js to use.
module.exports = router;