const express = require('express');
const cors = require('cors');
const colors = require('colors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser');

dotenv.config();

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server is running in the port on ${port}`.bgMagenta.bgRed);
});


// 33.07