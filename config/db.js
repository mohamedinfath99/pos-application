const mongoose = require('mongoose');
const colors = require('colors');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log(`Connected mongodb server ${mongoose.connection.host}`.bgYellow.bgWhite);
    }
    catch (error) {
        console.log(`MongoDB server is error : ${error}`.bgRed.bgCyan);
    };
};

module.exports = connectDB;