const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../config/conection');


const Product = sequelize.define('product', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    name:{
        type: DataTypes.STRING
    },
    url_image:{
        type: DataTypes.STRING
    },
    price:{
        type: DataTypes.FLOAT
    },
    discount:{
        type: DataTypes.INTEGER
    },
    category:{
        type: DataTypes.INTEGER
    },
},
{
    //ES OBLIGATORIO PARA NO TENER ERRORES!!!
    //Atributos por defecto que trae sequelize
    createdAt: false,
    updatedAt: false,
    freezeTableName: true,
});

module.exports = Product;