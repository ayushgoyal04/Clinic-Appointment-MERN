// Handles doctor-related requests
const doctorService = require('../services/doctorService');

exports.createDoctor = async (req, res) => {
    try {
        const doctor = await doctorService.createDoctor(req.body);
        res.status(201).json(doctor);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Doctor-wise appointments summary report
const Appointment = require('../models/Appointment');

exports.getDoctors = async (req, res) => {
    try {
        const { report } = req.query;
        if (report === 'summary') {
            const summary = await doctorService.getDoctorSummary();
            return res.json({
                report: 'DOCTOR-WISE APPOINTMENTS REPORT',
                summary
            });
        }
        const doctors = await doctorService.getDoctors();
        res.json(doctors);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getDoctorById = async (req, res) => {
    try {
        const doctor = await doctorService.getDoctorById(req.params.id);
        if (!doctor) return res.status(404).json({ error: 'Doctor not found' });
        res.json(doctor);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateDoctor = async (req, res) => {
    try {
        const doctor = await doctorService.updateDoctor(req.params.id, req.body);
        if (!doctor) return res.status(404).json({ error: 'Doctor not found' });
        res.json(doctor);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.deleteDoctor = async (req, res) => {
    try {
        const doctor = await doctorService.deleteDoctor(req.params.id);
        if (!doctor) return res.status(404).json({ error: 'Doctor not found' });
        res.json({ message: 'Doctor deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
