const userModel = (sequelize, type) => {
    return sequelize.define("user", {
        id: {
            type: type.CHAR(36),
            primaryKey: true,
            unique: true,
            defaultValue: type.UUIDV1
        },
        name: {
            type: type.STRING,
            allowNull: false
        },
        email: {
            type: type.STRING,
            allowNull: false
        },
        password: {
            type: type.STRING,
            allowNull: false
        },
        isPremium: {
            type: type.BOOLEAN,
            allowNull: false
        },
        driverBiography: {
            type: type.STRING,
            allowNull: false
        },
        avgStars: {
            type: type.DOUBLE,
            allowNull: false
        },
        reviewCount: {
            type: type.INTEGER,
            allowNull: false
        }
    });
};

module.exports = userModel;