const offeredRidesModel = (sequelize, type) => {
    return sequelize.define("offeredRides", {
        rideID: {
            type: type.CHAR(36),
            allowNull: false
        },
        userID: {
            type: type.CHAR(36),
            allowNull: false
        }
    });
};

module.exports = offeredRidesModel;