function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next()
    }
    res.status(404).send();
}

function isLoggedOut(req, res, next) {
    if (req.isAuthenticated()) {
        res.status(200).json({
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