// Doctor schema
const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    specialization: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true, unique: true }
}, { timestamps: true });

module.exports = mongoose.model('Doctor', doctorSchema);
