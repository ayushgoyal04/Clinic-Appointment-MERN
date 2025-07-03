// Business logic for appointments
const Appointment = require('../models/Appointment');

exports.createAppointment = async (data) => {
    const appointment = new Appointment(data);
    return await appointment.save();
};

exports.getAppointments = async (query = {}) => Appointment.find(query).populate('patient_id doctor_id');
exports.getAppointmentById = async (id) => Appointment.findById(id).populate('patient_id doctor_id');
exports.updateAppointment = async (id, data) => Appointment.findByIdAndUpdate(id, data, { new: true });
exports.deleteAppointment = async (id) => Appointment.findByIdAndDelete(id);
