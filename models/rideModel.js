const rideModel = (sequelize, type) => {
    return sequelize.define("ride", {
        id: {
            type: type.CHAR(36),
            primaryKey: true,
            unique: true,
            defaultValue: type.UUIDV1
        },
        targetEventID: {
            type: type.CHAR(36),
            allowNull: false
        },
        startCoordinate: {
            type: type.STRING,
            allowNull: false
        },
        startTime: {
            type: type.DATE,
            allowNull: false
        },
        driverID: {
            type: type.CHAR(36),
            allowNull: false
        },
        numberOfferedSeats: {
            type: type.INTEGER,
            allowNull: false
        },
        pricepP: {
            type: type.DECIMAL(10, 2),
            allowNull: false
        },
        rideBiography: {
            type: type.STRING,
            allowNull: false
        },
        occupiedSeats: {
            type: type.STRING(500),
            allowNull: false
        }
    });
};

module.exports = rideModel;