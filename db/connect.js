const mongoose = require("mongoose");

const connectDB = (url) => {
    return mongoose
    .connect(url)
    .then(() => console.log("データベースと接続中です"))
    .catch((err) => console.log(err));
};

module.exports = connectDB;