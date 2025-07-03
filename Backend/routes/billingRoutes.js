// Billing routes
const express = require('express');
const router = express.Router();
const billingController = require('../controllers/billingController');

router.post('/', billingController.createBill);
router.get('/', billingController.getBills);
router.get('/:id', billingController.getBillById);
router.put('/:id', billingController.updateBill);
router.delete('/:id', billingController.deleteBill);

module.exports = router;
