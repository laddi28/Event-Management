const express = require('express');
const router = express.Router();
const Vendor = require('../models/Vendor');
const User = require('../models/User');
const Membership = require('../models/Membership');

// Admin Route: Add/Update Vendor
router.post('/add-vendor', (req, res) => {
    const { name, email } = req.body;
    const newVendor = new Vendor({ name, email });

    newVendor.save()
        .then(vendor => res.json({ success: true, vendor }))
        .catch(err => res.json({ success: false, message: 'Failed to add vendor.' }));
});

router.put('/update-vendor/:id', (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;

    Vendor.findByIdAndUpdate(id, { name, email }, { new: true })
        .then(vendor => res.json({ success: true, vendor }))
        .catch(err => res.json({ success: false, message: 'Failed to update vendor.' }));
});

// Admin Route: Add/Update User
router.post('/add-user', (req, res) => {
    const { name, email } = req.body;
    const newUser = new User({ name, email });

    newUser.save()
        .then(user => res.json({ success: true, user }))
        .catch(err => res.json({ success: false, message: 'Failed to add user.' }));
});

router.put('/update-user/:id', (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;

    User.findByIdAndUpdate(id, { name, email }, { new: true })
        .then(user => res.json({ success: true, user }))
        .catch(err => res.json({ success: false, message: 'Failed to update user.' }));
});

// Admin Route: Add/Update Membership for Vendor
router.post('/add-membership', (req, res) => {
    const { vendorId, membershipType, startDate, endDate } = req.body;
    const newMembership = new Membership({ vendorId, membershipType, startDate, endDate });

    newMembership.save()
        .then(membership => res.json({ success: true, membership }))
        .catch(err => res.json({ success: false, message: 'Failed to add membership.' }));
});

router.put('/update-membership/:id', (req, res) => {
    const { id } = req.params;
    const { membershipType, startDate, endDate } = req.body;

    Membership.findByIdAndUpdate(id, { membershipType, startDate, endDate }, { new: true })
        .then(membership => res.json({ success: true, membership }))
        .catch(err => res.json({ success: false, message: 'Failed to update membership.' }));
});

module.exports = router;
