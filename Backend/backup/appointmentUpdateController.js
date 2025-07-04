// Backup of appointment update logic
const appointmentService = require('../services/appointmentService');

exports.updateAppointment = async (req, res) => {
    try {
        const appointment = await appointmentService.updateAppointment(req.params.id, req.body);
        if (!appointment) return res.status(404).json({ error: 'Appointment not found' });
        res.json(appointment);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
