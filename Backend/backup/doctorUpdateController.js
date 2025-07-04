// Backup of doctor update logic
const doctorService = require('../services/doctorService');

exports.updateDoctor = async (req, res) => {
    try {
        const doctor = await doctorService.updateDoctor(req.params.id, req.body);
        if (!doctor) return res.status(404).json({ error: 'Doctor not found' });
        res.json(doctor);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
