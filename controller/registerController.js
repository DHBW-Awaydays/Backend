const userModel = require("../sequelize").user;
const bcrypt = require("bcrypt");
const BCRYPT_SALTROUNDS = 12;

const postUser = function (req, res) {
    //fill requestBody in local 
    const data = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        driverBiography: req.body.driverBiography
    };
    //check if all fields are valid
    for (var key in data) {
        if (data[key] == null || data[key] == "") {
            if (key == "driverBiography") {
                continue;
            }
            res.status(422).json({
                message: "value in field " + key + " is missing"
            });
        }
    }
    userModel.findOne({
        where: {
            email: data.email
        },
        raw: true
    }).then(async user => {
        if (user != null) {
            res.status(409).json({
                message: "email already registered"
            })
        } else {
            await bcrypt.hash(data.password, BCRYPT_SALTROUNDS).then(hash => {
                userModel.create({
                    name: data.name,
                    password: hash,
                    email: data.email,
                    isPremium: false,
                    driverBiography: data.driverBiography
                }).then(() => {
                    res.status(201).json({
                        message: "Register successfull"
                    })
                })
            })
        }
    })

}

module.exports = {
    register: postUser
};