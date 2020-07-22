const sequelize = require("./sequelize");
const bcrypt = require("bcrypt");
const conn = sequelize.conn;
const BCRYPT_SALTROUNDS = 12;
const userModel = require("./sequelize").user;
const eventModel = require("./sequelize").event;
const reviewModel = require("./sequelize").review;
const requestModel = require("./sequelize").request;
const rideModel = require("./sequelize").ride;
const offeredRidesModel = require("./sequelize").offeredRides;
const reqestedRides = require("./sequelize").reqestedRides;


var user1ID;
var user2ID;
var user3ID;
var user4ID;

var event1ID;
var event2ID;
var event3ID;
var event4ID;

var ride1ID;
var ride2ID;
var ride3ID;
var ride4ID;

var initdb = async function (req, res) {
    globalRes = res;
    conn.drop().then(async () => {
        console.log("Dropped");
        conn.sync().then(async () => {
            console.log("synced");
            user1Anlegen()
        });
    });

}
//User anlegen
async function user1Anlegen() {
    var name = "Sebastian";
    var email = "sebastian@sileachim.de";
    var password = "hans";
    var driverBiography = "SGE!";
    var avgStars = 4.526
    var reviewCount = 25
    await bcrypt.hash(password, BCRYPT_SALTROUNDS).then(hash => {
        userModel.create({
            name: name,
            password: hash,
            email: email,
            isPremium: false,
            driverBiography: driverBiography,
            avgStars: avgStars,
            reviewCount: reviewCount
        }).then(result => {
            user1ID = result.id;
            user2Anlegen();
        })
    })
}

async function user2Anlegen() {
    var name = "Tobias";
    var email = "info@elaspix.com";
    var password = "MrMdeal";
    var driverBiography = "Hallo ich bin Tobias!";
    var avgStars = 5
    var reviewCount = 56
    await bcrypt.hash(password, BCRYPT_SALTROUNDS).then(hash => {
        userModel.create({
            name: name,
            password: hash,
            email: email,
            isPremium: false,
            driverBiography: driverBiography,
            avgStars: avgStars,
            reviewCount: reviewCount
        }).then(result => {
            user2ID = result.id;
            user3Anlegen();
        })
    })
}

async function user3Anlegen() {
    var name = "Eric";
    var email = "ericrissler@gmail.com";
    var password = "Mannheim";
    var driverBiography = "RAMMSTEIN!!!";
    var avgStars = 3.45
    var reviewCount = 8
    await bcrypt.hash(password, BCRYPT_SALTROUNDS).then(hash => {
        userModel.create({
            name: name,
            password: hash,
            email: email,
            isPremium: false,
            driverBiography: driverBiography,
            avgStars: avgStars,
            reviewCount: reviewCount
        }).then(result => {
            user3ID = result.id;
            user4Anlegen();
        })
    })
}

async function user4Anlegen() {
    var name = "Dominik";
    var email = "domnik@gmail.com";
    var password = "hoffehoffe96";
    var driverBiography = "HOFFENHEIM!!!!";
    var avgStars = 2.4785
    var reviewCount = 48
    await bcrypt.hash(password, BCRYPT_SALTROUNDS).then(hash => {
        userModel.create({
            name: name,
            password: hash,
            email: email,
            isPremium: false,
            driverBiography: driverBiography,
            avgStars: avgStars,
            reviewCount: reviewCount
        }).then(result => {
            user4ID = result.id;
            createEvent1()
        })
    })
}

//Events anlegen
async function createEvent1() {
    var name = "Rammsteinkonzert Zürich"
    var coordinate = "Zürich"
    var startTime = new Date(2021, 8, 23, 21)
    eventModel.create({
        name: name,
        coordinate: coordinate,
        startTime: startTime
    }).then(result => {
        event1ID = result.id;
        createEvent2()
    })
}

async function createEvent2() {
    var name = "SGE - Hoffenheim"
    var coordinate = "Frankfurt"
    var startTime = new Date(2020, 10, 25, 18)
    eventModel.create({
        name: name,
        coordinate: coordinate,
        startTime: startTime
    }).then(result => {
        event2ID = result.id;
        createEvent3()
    })
}
async function createEvent3() {
    var name = "Hoffenheim - FC Bayern"
    var coordinate = "Sinsheim"
    var startTime = new Date(2020, 11, 19, 15, 30)
    console.log(startTime)
    eventModel.create({
        name: name,
        coordinate: coordinate,
        startTime: startTime
    }).then(result => {
        event3ID = result.id;
        createEvent4()
    })
}
async function createEvent4() {
    var name = "Rammsteinkonzert Berlin"
    var coordinate = "Berlin"
    var startTime = new Date(2020, 09, 22, 20)
    eventModel.create({
        name: name,
        coordinate: coordinate,
        startTime: startTime
    }).then(result => {
        event4ID = result.id;
        createRide1()
    })
}

async function createRide1() {
    var targetEventID = event1ID;
    var startCoordinate = "Mannheim";
    var startTime = new Date(2021, 8, 23, 15);
    var driverID = user4ID;
    var numberOfferedSeats = 3;
    var freeSeats = 1;
    var pricepP = 10.5;
    var rideBiography = "Ich bin ein großer Ramstein-Fan! In meinem Ramsteinmobil fahren wir nahc Zrich!"
    var occupiedSeats = "[" + user3ID + ", " + user1ID + "]"
    rideModel.create({
        targetEventID: targetEventID,
        startCoordinate: startCoordinate,
        startTime: startTime,
        driverID: driverID,
        numberOfferedSeats: numberOfferedSeats,
        freeSeats: freeSeats,
        pricepP: pricepP,
        rideBiography: rideBiography,
        occupiedSeats: occupiedSeats
    }).then(result => {
        ride1ID = result.id;
        createRide2()
    })
}
async function createRide2() {
    var targetEventID = event3ID;
    var startCoordinate = "Frankfurt";
    var startTime = new Date(2020, 11, 19, 12, 30)
    var driverID = user2ID;
    var numberOfferedSeats = 2;
    var freeSeats = 1;
    var pricepP = 8;
    var rideBiography = "Der größte Eintracht-Fan aller Zeit hat noch Plätze frei!"
    var occupiedSeats = "[" + user3ID + "]"
    rideModel.create({
        targetEventID: targetEventID,
        startCoordinate: startCoordinate,
        startTime: startTime,
        driverID: driverID,
        numberOfferedSeats: numberOfferedSeats,
        freeSeats: freeSeats,
        pricepP: pricepP,
        rideBiography: rideBiography,
        occupiedSeats: occupiedSeats
    }).then(result => {
        ride1ID = result.id;
        createRide3()
    })
}
async function createRide3() {
    var targetEventID = event4ID;
    var startCoordinate = "Mannheim";
    var startTime = new Date(2020, 09, 22, 12)
    var driverID = user3ID;
    var numberOfferedSeats = 5;
    var freeSeats = 5;
    var pricepP = 15;
    var rideBiography = "Ich bin ein großer Ramstein-Fan! In meinem Ramsteinmobil fahren wir nahc Zrich!"
    var occupiedSeats = "[]"
    rideModel.create({
        targetEventID: targetEventID,
        startCoordinate: startCoordinate,
        startTime: startTime,
        driverID: driverID,
        numberOfferedSeats: numberOfferedSeats,
        freeSeats: freeSeats,
        pricepP: pricepP,
        rideBiography: rideBiography,
        occupiedSeats: occupiedSeats
    }).then(result => {
        ride1ID = result.id;
        finish()
    })
}




function finish() {
    globalRes.status(201).json({
        message: "Datenbank initialisiert"
    })
}

module.exports = {
    init: initdb
}