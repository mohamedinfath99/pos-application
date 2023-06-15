const express = require('express');
const cors = require('cors');
const colors = require('colors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');

const itemRoutes = require('./routes/itemRoutes');

dotenv.config();

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());

app.use('/api/v1/item', itemRoutes)

const port = process.env.PORT;

app.listen(port, () => {
    connectDB();
    console.log(`Server is running in the port on ${port}`.bgMagenta.bgRed);
});


// 01.04.00