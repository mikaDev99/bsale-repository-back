const { QueryTypes } = require('sequelize');
const Product = require("../models/Product");


const listProduct = async(req, res) => {
    
    const products = await Product.sequelize.query("SELECT * FROM `product` ORDER BY `category` ASC",{ type: QueryTypes.SELECT });
    
    try {
        if (!products.length) {
            return res.status(400).json({
                ok: false,
                msg: 'No se encontraron productos'
            });
        }
        return res.status(200).json({
            ok: true,
            msg: 'Productos encontrados',
            products
        });
        
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            ok: false,
            msg: 'se ha encontrado un error'
        });
    }
}

const searchProducts = async(req, res) => {

    const {name} = req.body;
    const products = await Product.sequelize.query("SELECT * FROM `product` WHERE `name` LIKE :search_name", {replacements: {search_name: `%${name}%`}, type: QueryTypes.SELECT });

    try {
        if (!products.length) {
            return  res.status(400).json({
                ok: false,
                msg: 'No se encontraron productos'
            });
        }
        return res.status(200).json({
            ok: true,
            msg: 'Productos encontrados',
            products
        });
        
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            ok: false,
            msg: 'se ha encontrado un error'
        });
    }
}

module.exports = {
    listProduct,
    searchProducts
}