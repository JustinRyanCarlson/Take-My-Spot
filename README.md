# Take My Spot

Take-My-Spot allows users who wish to travel to parts of the city that have scarce parking available, the option to rent garage properties to park their car. 
Take-MY-Spot also allows the user to rent out their underutilized parking spot. Allowing you to be both owner and renter.

# Screenshots

  Take-My-Spot takes away the hassle of driving around in circles looking for a parking spot. It also makes you feel more secure knowing that you are not just leaving your car in a location where damage can occur
  
![Alt text] (/screenshots/screenshot1.png?raw=true)

# Technology Used
* Node
* Express
* Handlebars
* Passport
* Sequelize
* Bootstrap
* MySQL

# Getting Started

Clone copy of app locally and run node server.js to get app up and running.

### Prerequisites

npm install the following packages:
```
npm install body-parser --save
npm install express --save
npm install express-handlebars --save
npm install geocode --save
npm install geocoder --save
npm install mysql --save
npm install sequelize --save
npm install serve-favicon --save
```
# Built With
* Bootstrap
* Passport
* HTML
* JS
* CSS
* Node
* Express
* Handlebars
* Google Map API
* Body-parser
* MVC

# Walk Through Of Some Interesting Code

Creation of the user code using Passport
```
db.Users.register(req.body.email.toLowerCase(), req.body.password, function(err, user) {
        if (err) {
            return res.json(err);
        } else {
            passport.authenticate('local')(req, res, function() {
                res.redirect('/renter');
            });
        }
    });
```


# Authors
* Justin Carlson
* Poornima Sewak
* Terence Ro
* Maria Garcia
