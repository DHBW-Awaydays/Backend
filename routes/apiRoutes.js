const router = require("express").Router();
const userRoutes = require("./userRoutes")
const rideRoutes = require("./rideRoutes");
const requestRoutes = require("./requestRoutes");

router.use("/user", userRoutes)
router.use("/ride", rideRoutes)
router.use("/request", requestRoutes)



module.exports = router