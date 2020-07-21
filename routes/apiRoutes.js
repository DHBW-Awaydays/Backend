const router = require("express").Router();
const userController = require("../controller/userController")

router.get("/user", userController.getUser)


module.exports = router