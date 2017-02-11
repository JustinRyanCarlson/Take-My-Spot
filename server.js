var express = require('express');
var passport = require('passport');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var app = express();
var exphbs = require("express-handlebars");
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var PORT = process.env.PORT || 8000;

// Requiring our models for syncing
var db = require("./models");

// Looks at available engines and sets the view engine to Handlebars.
app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// Middleware to parse the body of the request from the client side and middleware to
// set the path to static files.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(require('connect-multiparty')());
app.use(session({
    secret: 'super-secret'
}));
app.use(cookieParser());
app.use(bodyParser.text());
app.use(bodyParser.json({
    type: "application/vnd.api+json"
}));
app.use(express.static(__dirname + '/public/assets'));
app.use(favicon(__dirname + '/public/assets/img/favicon.ico'));
app.use(passport.initialize());
app.use(passport.session());

passport.use(db.Users.createStrategy());
passport.serializeUser(db.Users.serializeUser());
passport.deserializeUser(db.Users.deserializeUser());

// Requires the routes from the app_controller.js file and sets the middleware
// to use these routes.
var routes = require("./controllers/app_controller.js");
app.use("/", routes);

// Syncing our sequelize models and then starting our express app
db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
        console.log('Listening on port: ' + PORT);
    });
});
