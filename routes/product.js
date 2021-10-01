const { Router } = require("express");
const { listProduct, searchProducts } = require("../controllers/product");
const router = Router();

// List Product
router.get('/list', listProduct);

// Search Product
router.post('/search', searchProducts);

module.exports = router;