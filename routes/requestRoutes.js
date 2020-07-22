const router = require("express").Router();
const requestController = require("../controller/requestController")

router.post("/", requestController.postRequest);

module.exports = router