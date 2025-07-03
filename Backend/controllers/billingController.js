// Handles billing-related requests
const billingService = require('../services/billingService');

exports.createBill = async (req, res) => {
    try {
        const bill = await billingService.createBill(req.body);
        res.status(201).json(bill);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get all bills, optionally as a formatted billing report
exports.getBills = async (req, res) => {
    try {
        const { report } = req.query;
        const bills = await billingService.getBills();
        if (report === 'billing') {
            const formatted = bills.map(bill => ({
                bill_id: bill._id,
                patient_name: bill.patient_id.first_name + ' ' + bill.patient_id.last_name,
                date: bill.payment_date ? bill.payment_date.toISOString().slice(0, 10) : '',
                amount: bill.amount,
                payment_status: bill.payment_status
            }));
            return res.json({
                report: 'BILLING REPORT',
                bills: formatted
            });
        }
        res.json(bills);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getBillById = async (req, res) => {
    try {
        const bill = await billingService.getBillById(req.params.id);
        if (!bill) return res.status(404).json({ error: 'Bill not found' });
        res.json(bill);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateBill = async (req, res) => {
    try {
        const bill = await billingService.updateBill(req.params.id, req.body);
        if (!bill) return res.status(404).json({ error: 'Bill not found' });
        res.json(bill);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.deleteBill = async (req, res) => {
    try {
        const bill = await billingService.deleteBill(req.params.id);
        if (!bill) return res.status(404).json({ error: 'Bill not found' });
        res.json({ message: 'Bill deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
