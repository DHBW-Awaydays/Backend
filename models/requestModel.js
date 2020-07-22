const requestModel = (sequelize, type) => {
    return sequelize.define("request", {
        id: {
            type: type.CHAR(36),
            primaryKey: true,
            unique: true,
            defaultValue: type.UUIDV1
        },
        fromUserID: {
            type: type.CHAR(36),
            allowNull: false
        },
        forUserID: {
            type: type.CHAR(36),
            allowNull: false
        },
        forRideID: {
            type: type.CHAR(36),
            allowNull: false
        },
        numberRequestedSeats: {
            type: type.INTEGER,
            allowNull: false
        },
        status: {
            type: type.STRING,
            allowNull: false
        }
    });
};

module.exports = requestModel;