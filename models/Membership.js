const mongoose = require('mongoose');

const membershipSchema = new mongoose.Schema({
    vendorId: { type: String, required: true },
    membershipDuration: { type: String, required: true },
    membershipId: { type: String, unique: true, required: true }
});

module.exports = mongoose.model('Membership', membershipSchema);
