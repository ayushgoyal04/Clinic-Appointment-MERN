// Business logic for medical records
const MedicalRecord = require('../models/MedicalRecord');

exports.createMedicalRecord = async (data) => {
    const record = new MedicalRecord(data);
    return await record.save();
};

exports.getMedicalRecords = async () => MedicalRecord.find().populate('patient_id doctor_id');
exports.getMedicalRecordById = async (id) => MedicalRecord.findById(id).populate('patient_id doctor_id');
exports.updateMedicalRecord = async (id, data) => MedicalRecord.findByIdAndUpdate(id, data, { new: true });
exports.deleteMedicalRecord = async (id) => MedicalRecord.findByIdAndDelete(id);
