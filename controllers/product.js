// const { request, response } = require("express");
const { QueryTypes } = require('sequelize');
const Product = require("../models/Product");


const listProduct = async(req, res) => {
    
    const products = await Product.sequelize.query("SELECT * FROM `product` ORDER BY `category` ASC",{ type: QueryTypes.SELECT });

    // console.log(products);

    try {
        if (!products) {
            res.status(400).json({
                ok: false,
                msg: 'No se encontraron productos'
            });
        }
        res.status(200).json({
            ok: true,
            msg: 'Productos encontrados',
            products
        })
        
    } catch (error) {
        console.log(error);
        res.status(400).json({
            ok: false,
            msg: 'se ha encontrado un error'
        });
    }
}

const searchProducts = async(req, res) => {

    const {name} = req.body;

    const products = await Product.sequelize.query("SELECT * FROM `product` WHERE `name` LIKE :search_name", {replacements: {search_name: `${name}%`}, type: QueryTypes.SELECT });

    // console.log(products);

    try {
        if (!products) {
            res.status(400).json({
                ok: false,
                msg: 'No se encontraron productos'
            });
        }
        res.status(200).json({
            ok: true,
            msg: 'Productos encontrados',
            products
        })
        
    } catch (error) {
        console.log(error);
        res.status(400).json({
            ok: false,
            msg: 'se ha encontrado un error'
        });
    }


    // console.log(name);
    // res.send('datos recibidos');
}

module.exports = {
    listProduct,
    searchProducts
}