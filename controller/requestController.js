var requestModel = require("../sequelize").request;
const REQ_STATUS_PENDING = "PENDING";
const REQ_STATUS_ACCEPTED = "ACCEPTED";
const REQ_STATUS_DECLINED = "DECLINED";



const postRequest = async (req, res) => {
    var userID = await (await req.user).id;
    var data = {
        userID: userID,
        rideID: req.body.rideID,
        driverID: req.body.driverID,
        requestedSeats: req.body.requestedSeats * 1
    }
    for (var key in data) {
        if (data[key] == null || data[key] === undefined) {
            res.status(422).json({
                message: "value in field " + key + " is missing"
            });
            return
        }
    }

    requestModel.create({
        fromUserID: data.userID,
        forUserID: data.driverID,
        forRideID: data.rideID,
        numberRequestedSeats: data.requestedSeats,
        status: REQ_STATUS_PENDING
    }).then(() => {
        res.status(201).send()
    });

}

module.exports = {
    postRequest: postRequest
}