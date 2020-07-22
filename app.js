//Import
var express = require("express");
var passport = require("passport");
var apiroutes = require("./routes/apiRoutes");
var session = require("express-session");
var methodOverride = require("method-override");

var initializePassport = require("./auth/passport-config");
var checkAuth = require("./auth/checkAuth");
var init = require("./initdb").init;
var register = require("./controller/registerController").register;

//Setup Express-App
require("dotenv").config()
var app = express();
initializePassport(passport)
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride("_method"));
app.use((req, res, next) => {
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;
    console.log(dateTime + " " + req.method + " " + req.url);
    next()
})


//Routes
app.get("/init", init);
app.use("/api", apiroutes);

//LoginLogoutRegisterRoutes
app.post("/login", checkAuth.isLoggedOut, passport.authenticate("local"), (req, res) => {
    //Login was succesfull
    res.status(200).json({
        message: "Login succesfull"
    })
});

app.delete("/logout", (req, res) => {
    req.logOut();
    res.status(200).send();
})

app.post("/register", checkAuth.isLoggedOut, register);

app.get("/checkedIsLogin", (req, res) => {
    if (req.isAuthenticated()) {
        res.status(200).json({
            message: "logged in"
        });
    } else {
        res.status(404).json({
            message: "logged out"
        });
    }
})

app.get("/get_test", (req, res) => {
    console.log(req.body)
    res.status(200).json({
        result: "get_test succesfull"
    })
})

app.post("/post_test", (req, res) => {
    console.log(req.body)
    var data = {
        add1: req.body.add1 * 1,
        add2: req.body.add2 * 1
    }
    var result = data.add1 + data.add2;
    res.status(200).json({
        result: result
    })
})

module.exports = app;