const mongoose = require('mongoose');
const colors = require('colors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const Items = require('./models/itemSchema');
const itemsData = require('./utils/itemsData')

dotenv.config();
connectDB();

const importData = async () => {
    try {
        await Items.deleteMany();

        await Items.insertMany(itemsData);
        console.log("All items added in the database".bgWhite.bgCyan);
        process.exit();
    }
    catch (error) {
        console.log(`import data failed - ${error}`.bgRed.bgWhite);
        process.exit();
    };
};


importData();