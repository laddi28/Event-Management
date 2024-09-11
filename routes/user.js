const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// Vendor selection
router.post('/select-vendor', (req, res) => {
    const { vendor } = req.body;
    // Save vendor selection logic (you can save this in a session or user profile)
    res.json({ success: true, message: `Vendor ${vendor} selected.` });
});

// Checkout (Payment)
router.post('/checkout', (req, res) => {
    // Payment processing logic
    // Add code to process payment and update order status
    res.json({ success: true, message: 'Payment processed successfully.' });
});

// Cancel Order
router.post('/cancel-order', (req, res) => {
    // Logic to cancel order
    // Typically, you will find the user's active order and mark it as canceled
    res.json({ success: true, message: 'Order has been canceled.' });
});

// Update Guest List
router.put('/update-guest-list', (req, res) => {
    // Logic to update the guest list
    // Example: req.body could contain the updated guest list which should be saved to the user's account
    res.json({ success: true, message: 'Guest list updated successfully.' });
});

// Delete Guest
router.delete('/delete-guest', (req, res) => {
    // Logic to delete a guest from the guest list
    // You can pass guest information in req.body and remove it from the guest list
    res.json({ success: true, message: 'Guest deleted successfully.' });
});

// Check Order Status
router.post('/order-status', (req, res) => {
    const { orderId } = req.body;
    Order.findOne({ orderId })
        .then(order => {
            if (order) {
                res.json({ success: true, status: order.status });
            } else {
                res.json({ success: false, message: 'Order not found.' });
            }
        })
        .catch(err => {
            res.json({ success: false, message: 'Error checking order status.' });
        });
});

module.exports = router;
