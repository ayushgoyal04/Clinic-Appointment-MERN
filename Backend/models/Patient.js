// Patient schema
const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    dob: { type: Date, required: true },
    gender: { type: String, enum: ['Male', 'Female'], required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    address: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Patient', patientSchema);
