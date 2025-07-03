// Appointment schema
const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    patient_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
    doctor_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true },
    appointment_date: { type: Date, required: true },
    appointment_time: { type: String, required: true },
    status: { type: String, enum: ['Pending', 'Completed', 'Canceled', 'Follow-up Scheduled', 'Missed'], default: 'Pending' },
    notes: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Appointment', appointmentSchema);
