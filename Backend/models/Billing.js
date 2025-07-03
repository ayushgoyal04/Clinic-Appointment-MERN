// Billing schema
const mongoose = require('mongoose');

const billingSchema = new mongoose.Schema({
    patient_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
    appointment_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Appointment', required: true },
    amount: { type: Number, required: true },
    payment_status: { type: String, enum: ['Paid', 'Pending'], default: 'Pending' },
    payment_date: { type: Date }
}, { timestamps: true });

module.exports = mongoose.model('Billing', billingSchema);
