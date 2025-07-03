// Business logic for billing
const Billing = require('../models/Billing');

exports.createBill = async (data) => {
    const bill = new Billing(data);
    return await bill.save();
};

exports.getBills = async () => Billing.find().populate('patient_id appointment_id');
exports.getBillById = async (id) => Billing.findById(id).populate('patient_id appointment_id');
exports.updateBill = async (id, data) => Billing.findByIdAndUpdate(id, data, { new: true });
exports.deleteBill = async (id) => Billing.findByIdAndDelete(id);
