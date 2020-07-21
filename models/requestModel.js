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
        forDriveID: {
            type: type.CHAR(36),
            allowNull: false
        },
        NumberRequestedSeats: {
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