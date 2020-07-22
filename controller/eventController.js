var eventModel = require("../sequelize").event;
const {
    Op
} = require("sequelize");


const searchEvent = async function (searchData) {
    for (var key in searchData) {
        if (searchData[key] == null || searchData[key] === undefined) {
            searchData[key] = ""
        }
    }
    var events = await eventModel.findAll({
        where: {
            name: {
                [Op.substring]: searchData.name
            },
            coordinate: {
                [Op.substring]: searchData.coordinate
            },
            startTime: {
                [Op.substring]: searchData.startTime
            },
        },
        raw: true
    })
    return events;
}

module.exports = {
    searchEvent: searchEvent
}