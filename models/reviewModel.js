const reviewModel = (sequelize, type) => {
    return sequelize.define("review", {
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
        stars: {
            type: type.DECIMAL(10, 1),
            allowNull: false
        },
        titel: {
            type: type.STRING,
            allowNull: false
        },
        text: {
            type: type.STRING,
            allowNull: false
        },
        timePosted: {
            type: type.DATE,
            allowNull: false
        }
    });
};

module.exports = reviewModel;