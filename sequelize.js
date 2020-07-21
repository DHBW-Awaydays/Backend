const Sequelize = require("sequelize");
const eventModel = require("./models/eventModel");
const offeredRidesModel = require("./models/offeredRidesModel");
const requestedRidesModel = require("./models/requestedRidesModel");
const requestModel = require("./models/requestModel");
const reviewModel = require("./models/reviewModel");
const rideModel = require("./models/rideModel")
const userModel = require("./models/userModel");
require("dotenv").config()



const conn = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_URL,
    dialect: process.env.DB_DIALECT,
    logging: false
});

const event = eventModel(conn, Sequelize);
const offeredRides = offeredRidesModel(conn, Sequelize);
const reqestedRides = requestedRidesModel(conn, Sequelize);
const request = requestModel(conn, Sequelize);
const review = reviewModel(conn, Sequelize);
const ride = rideModel(conn, Sequelize)
const user = userModel(conn, Sequelize);

conn.sync().then(() => {
    console.log("Connected and synced to database");
}).catch((err) => {
    console.log('Unable to connect to the database:', err);
});

module.exports = {
    conn: conn,
    event: event,
    offeredRides: offeredRides,
    reqestedRides: reqestedRides,
    request: request,
    review: review,
    ride: ride,
    user: user
};