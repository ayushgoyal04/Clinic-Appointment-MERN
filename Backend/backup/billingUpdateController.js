// Backup of billing update logic
const billingService = require('../services/billingService');

exports.updateBill = async (req, res) => {
    try {
        const bill = await billingService.updateBill(req.params.id, req.body);
        if (!bill) return res.status(404).json({ error: 'Bill not found' });
        res.json(bill);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
