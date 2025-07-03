// Business logic for doctors
const Doctor = require('../models/Doctor');
const Appointment = require('../models/Appointment');

exports.createDoctor = async (data) => {
    const doctor = new Doctor(data);
    return await doctor.save();
};

exports.getDoctors = async () => Doctor.find();
exports.getDoctorById = async (id) => Doctor.findById(id);
exports.updateDoctor = async (id, data) => Doctor.findByIdAndUpdate(id, data, { new: true });
exports.deleteDoctor = async (id) => Doctor.findByIdAndDelete(id);

exports.getDoctorSummary = async () => {
    const doctors = await Doctor.find();
    const summary = [];
    for (const doc of doctors) {
        const total = await Appointment.countDocuments({ doctor_id: doc._id });
        const completed = await Appointment.countDocuments({ doctor_id: doc._id, status: 'Completed' });
        const pending = await Appointment.countDocuments({ doctor_id: doc._id, status: 'Pending' });
        const canceled = await Appointment.countDocuments({ doctor_id: doc._id, status: 'Canceled' });
        summary.push({
            doctor: doc.first_name + ' ' + doc.last_name,
            total, completed, pending, canceled
        });
    }
    return summary;
};
