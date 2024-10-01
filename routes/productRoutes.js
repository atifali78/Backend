// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const { validateProduct, handleValidationErrors } = require('../validations/productValidation');

// Define your routes
router.post('/create', validateProduct, handleValidationErrors, productController.createProduct);
router.get('/get', productController.getAllProducts);
router.get('/product/:id', productController.getProductById);
router.put('/update/:id', validateProduct, handleValidationErrors, productController.updateProduct);
router.delete('/delete/:id', productController.deleteProduct);

module.exports = router;
