// Handles patient-related requests
const Patient = require('../models/Patient');


const patientService = require('../services/patientService');
exports.createPatient = async (req, res) => {
    try {
        const patient = await patientService.createPatient(req.body);
        res.status(201).json(patient);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getPatients = async (req, res) => {
    try {
        const patients = await patientService.getPatients();
        res.json(patients);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getPatientById = async (req, res) => {
    try {
        const patient = await patientService.getPatientById(req.params.id);
        if (!patient) return res.status(404).json({ error: 'Patient not found' });
        res.json(patient);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updatePatient = async (req, res) => {
    try {
        const patient = await patientService.updatePatient(req.params.id, req.body);
        if (!patient) return res.status(404).json({ error: 'Patient not found' });
        res.json(patient);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.deletePatient = async (req, res) => {
    try {
        const patient = await patientService.deletePatient(req.params.id);
        if (!patient) return res.status(404).json({ error: 'Patient not found' });
        res.json({ message: 'Patient deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
