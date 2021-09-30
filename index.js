const express = require('express');
const { conectionDB } = require('./config/conection');
const cors = require('cors')
const app = express();
const path = require('path');
require('dotenv').config();

bodyParser = require('body-parser');

//conection Data Base
conectionDB();


//Ruta publica
app.use(express.static(path.join(__dirname,'public')));

// Lectura y parseo del body
app.use(express.json());

// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//CORS
app.use(cors());

//Rutas privadas
app.use('/api/product', require('./routes/product'));


app.listen(process.env.PORT, () => {
    console.log(`Corriendo en el puerto: ${process.env.PORT}`)
});