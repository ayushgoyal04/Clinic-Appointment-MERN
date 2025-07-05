// Handles appointment-related requests
const appointmentService = require('../services/appointmentService');

const patientService = require('../services/patientService');

exports.createAppointment = async (req, res) => {
    try {
        let appointmentData = { ...req.body };
        // If patient object is provided, create patient and use its _id
        if (req.body.patient && typeof req.body.patient === 'object') {
            const { first_name, last_name, email, phone } = req.body.patient;
            // You may want to add more fields as needed
            const newPatient = await patientService.createPatient({
                first_name,
                last_name,
                email,
                phone,
                // Provide dummy/default values for required fields
                dob: new Date(1970, 0, 1),
                gender: 'Male',
                address: 'Not Provided'
            });
            appointmentData.patient_id = newPatient._id;
            delete appointmentData.patient;
        }
        // If patient_id is already provided, use as is
        const appointment = await appointmentService.createAppointment(appointmentData);
        res.status(201).json(appointment);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get all appointments, optionally grouped by doctor and formatted for daily report
exports.getAppointments = async (req, res) => {
    try {
        const { report, date } = req.query;
        let query = {};
        if (date) {
            const start = new Date(date);
            const end = new Date(date);
            end.setHours(23, 59, 59, 999);
            query.appointment_date = { $gte: start, $lte: end };
        }
        const appointments = await appointmentService.getAppointments(query);
        if (report === 'daily') {
            const grouped = {};
            appointments.forEach(appt => {
                const doctorName = appt.doctor_id.first_name + ' ' + appt.doctor_id.last_name;
                if (!grouped[doctorName]) grouped[doctorName] = [];
                grouped[doctorName].push({
                    time: appt.appointment_time,
                    patient_name: appt.patient_id.first_name + ' ' + appt.patient_id.last_name,
                    status: appt.status
                });
            });
            return res.json({
                date: date || new Date().toISOString().slice(0, 10),
                report: 'DAILY APPOINTMENTS REPORT',
                doctors: grouped
            });
        }
        res.json(appointments);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getAppointmentById = async (req, res) => {
    try {
        const appointment = await appointmentService.getAppointmentById(req.params.id);
        if (!appointment) return res.status(404).json({ error: 'Appointment not found' });
        res.json(appointment);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateAppointment = async (req, res) => {
    try {
        const appointment = await appointmentService.updateAppointment(req.params.id, req.body);
        if (!appointment) return res.status(404).json({ error: 'Appointment not found' });
        res.json(appointment);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.deleteAppointment = async (req, res) => {
    try {
        const appointment = await appointmentService.deleteAppointment(req.params.id);
        if (!appointment) return res.status(404).json({ error: 'Appointment not found' });
        res.json({ message: 'Appointment deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
