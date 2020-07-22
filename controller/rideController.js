var rideModel = require("../sequelize").ride;
var searchEvent = require("./eventController").searchEvent;
const {
    Op
} = require("sequelize");


const searchRides = async function (req, res) {
    var data = {
        event: {
            name: req.body.event_name,
            startTime: req.body.event_date,
            coordinate: req.body.event_location
        },
        search: {
            startCoordinate: req.body.start_location,
            seats: req.body.searched_seats * 1
        }
    }
    for (var key in data.search) {
        if (data.search[key] == null || data.search[key] === undefined) {
            data.search[key] = ""
        }
    }
    var eventIDS = []
    //var events = await searchEvent(data.event);
    await (await searchEvent(data.event)).forEach(element => {
        eventIDS.push(element.id)
    });
    var rides = await rideModel.findAll({
        where: {
            targetEventID: eventIDS,
            startCoordinate: {
                [Op.substring]: data.search.startCoordinate
            },
            freeSeats: {
                [Op.gte]: data.search.seats
            }
        },
        raw: true
    })
    res.status(200).json(rides)


}

module.exports = {
    searchRides: searchRides
}