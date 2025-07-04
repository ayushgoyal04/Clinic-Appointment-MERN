// Backup of patient update logic
const patientService = require('../services/patientService');

exports.updatePatient = async (req, res) => {
    try {
        const patient = await patientService.updatePatient(req.params.id, req.body);
        if (!patient) return res.status(404).json({ error: 'Patient not found' });
        res.json(patient);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
