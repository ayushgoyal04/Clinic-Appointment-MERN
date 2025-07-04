// Backup of medical record update logic
const medicalRecordService = require('../services/medicalRecordService');

exports.updateMedicalRecord = async (req, res) => {
    try {
        const record = await medicalRecordService.updateMedicalRecord(req.params.id, req.body);
        if (!record) return res.status(404).json({ error: 'Medical record not found' });
        res.json(record);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
