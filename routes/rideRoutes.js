const router = require("express").Router();
const rideController = require("../controller/rideController")

router.get("/", rideController.searchRides);

module.exports = router