const router = require("express").Router();
const userRoutes = require("./userRoutes")
const rideRoutes = require("./rideRoutes");

router.use("/user", userRoutes)
router.use("/ride", rideRoutes)



module.exports = router