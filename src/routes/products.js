const express = require('express');
const productsController = require('../controllers/products');

const route = express.Router();

// get -> getproduct : localhost:4000/v1/customer/products
route.get('/products', productsController.getProducts);

// post -> createproduct : localhost:4000/v1/customer/product
route.post('/product', productsController.createProduct);

module.exports = route;
