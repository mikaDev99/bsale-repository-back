const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/conection');


const Category = sequelize.define('category', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    name:{
        type: DataTypes.STRING
    },
},
{
   //ES OBLIGATORIO PARA NO TENER ERRORES!!!
    //Atributos por defecto que trae sequelize
    createdAt: false,
    updatedAt: false, 
});

module.exports = Category;