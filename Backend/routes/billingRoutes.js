// Billing routes
const express = require('express');
const router = express.Router();
const billingController = require('../controllers/billingController');


const { protect, allowRoles } = require('../auth/rbac');

// Only admin and receptionist can create/update/delete bills
router.post('/', protect, allowRoles('admin', 'receptionist'), billingController.createBill);
router.get('/', protect, billingController.getBills);
router.get('/:id', protect, billingController.getBillById);
// router.put('/:id', protect, allowRoles('admin', 'receptionist'), billingController.updateBill); // Moved to backup/billingUpdateRoute.js
router.delete('/:id', protect, allowRoles('admin', 'receptionist'), billingController.deleteBill);

module.exports = router;
