const sequelize = require("./sequelize");
const bcrypt = require("bcrypt");
const conn = sequelize.conn;


const BCRYPT_SALTROUNDS = 12;

var initdb = function (req, res) {
    globalRes = res;
    conn.drop().then(() => {
        console.log("Dropped");
        conn.sync().then(() => {
            console.log("synced");
            finish();
        });
    });

}


function finish() {
    globalRes.status(201).json({
        message: "Datenbank initialisiert"
    })
}


module.exports = {
    init: initdb
}