// Medical Record schema
const mongoose = require('mongoose');

const medicalRecordSchema = new mongoose.Schema({
    patient_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
    doctor_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true },
    diagnosis: { type: String, required: true },
    prescription: { type: String, required: true },
    notes: { type: String },
    date_of_visit: { type: Date, required: true }
}, { timestamps: true });

module.exports = mongoose.model('MedicalRecord', medicalRecordSchema);
