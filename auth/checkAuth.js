function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next()
    }
    res.status(404).send();
}//sadas

function isLoggedOut(req, res, next) {
    if (req.isAuthenticated()) {
        if (req.url == "/register") {
            res.status(200);
        } else {
            res.status(200);
        }
        res.json({
            message: "User already authenticated"
        });
    }
    if ((req.url == "/login" || req.url == "/register") && req.isAuthenticated()) {
        return;
    }
    next();
}

module.exports = {
    isLoggedIn: isLoggedIn,
    isLoggedOut: isLoggedOut
}