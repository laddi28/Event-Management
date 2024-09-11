const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Add New Item
router.post('/add-item', (req, res) => {
    const { name, description, price, quantity } = req.body;
    const newProduct = new Product({ name, description, price, quantity });

    newProduct.save()
        .then(product => res.json({ success: true, product }))
        .catch(err => res.json({ success: false, message: 'Failed to add product.' }));
});

// View Products
router.get('/view-products', (req, res) => {
    Product.find()
        .then(products => res.json({ success: true, products }))
        .catch(err => res.json({ success: false, message: 'Failed to fetch products.' }));
});

// Update Product Status
router.put('/update-product-status/:id', (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    Product.findByIdAndUpdate(id, { status }, { new: true })
        .then(product => res.json({ success: true, product }))
        .catch(err => res.json({ success: false, message: 'Failed to update product status.' }));
});

// Delete Item
router.delete('/delete-item/:id', (req, res) => {
    const { id } = req.params;

    Product.findByIdAndDelete(id)
        .then(() => res.json({ success: true, message: 'Product deleted successfully.' }))
        .catch(err => res.json({ success: false, message: 'Failed to delete product.' }));
});

// Handle User Requests for Items
router.post('/user-request', (req, res) => {
    const { productId, userId, requestType } = req.body;

    // Handle user requests for products
    res.json({ success: true, message: `User ${userId} requested ${requestType} for product ${productId}.` });
});

module.exports = router;
