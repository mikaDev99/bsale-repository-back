const express = require('express');
const { conectionDB } = require('./config/conection');
const cors = require('cors')
const app = express();
const path = require('path');
require('dotenv').config();

bodyParser = require('body-parser');

//connection Data Base
conectionDB();

//CORS
app.use(cors());

//Public route
app.use(express.static(path.join(__dirname,'public')));

// Reading and parsing body
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));


//Private route
app.use('/api/product', require('./routes/product'));


app.listen(process.env.PORT, () => {
    console.log(`Corriendo en el puerto: ${process.env.PORT}`)
});