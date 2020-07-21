const requestedRidesModel = (sequelize, type) => {
    return sequelize.define("requestedRides", {
        rideID: {
            type: type.CHAR(36),
            allowNull: false
        },
        userID: {
            type: type.CHAR(36),
            allowNull: false
        },
        requestID: {
            type: type.CHAR(36),
            allowNull: false
        }
    });
};

module.exports = requestedRidesModel;