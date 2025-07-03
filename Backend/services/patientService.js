// Business logic for patients
const Patient = require('../models/Patient');

exports.createPatient = async (data) => {
    const patient = new Patient(data);
    return await patient.save();
};

exports.getPatients = async () => Patient.find();
exports.getPatientById = async (id) => Patient.findById(id);
exports.updatePatient = async (id, data) => Patient.findByIdAndUpdate(id, data, { new: true });
exports.deletePatient = async (id) => Patient.findByIdAndDelete(id);
