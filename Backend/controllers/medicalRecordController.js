// Handles medical record-related requests
const medicalRecordService = require('../services/medicalRecordService');

exports.createMedicalRecord = async (req, res) => {
    try {
        const record = await medicalRecordService.createMedicalRecord(req.body);
        res.status(201).json(record);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getMedicalRecords = async (req, res) => {
    try {
        const records = await medicalRecordService.getMedicalRecords();
        res.json(records);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getMedicalRecordById = async (req, res) => {
    try {
        const record = await medicalRecordService.getMedicalRecordById(req.params.id);
        if (!record) return res.status(404).json({ error: 'Medical record not found' });
        res.json(record);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateMedicalRecord = async (req, res) => {
    try {
        const record = await medicalRecordService.updateMedicalRecord(req.params.id, req.body);
        if (!record) return res.status(404).json({ error: 'Medical record not found' });
        res.json(record);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.deleteMedicalRecord = async (req, res) => {
    try {
        const record = await medicalRecordService.deleteMedicalRecord(req.params.id);
        if (!record) return res.status(404).json({ error: 'Medical record not found' });
        res.json({ message: 'Medical record deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
