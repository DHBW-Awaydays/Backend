const eventModel = (sequelize, type) => {
    return sequelize.define("event", {
        id: {
            type: type.CHAR(36),
            primaryKey: true,
            unique: true,
            defaultValue: type.UUIDV1
        },
        name: {
            type: type.CHAR(36),
            allowNull: false
        },
        coordinate: {
            type: type.STRING,
            allowNull: false
        },
        startTime: {
            type: type.DATE,
            allowNull: false
        }
    });
};

module.exports = eventModel;