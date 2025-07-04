// Backup of billing update route
const express = require('express');
const router = express.Router();
const billingController = require('../backup/billingUpdateController');
const { protect, allowRoles } = require('../auth/rbac');

router.put('/:id', protect, allowRoles('admin', 'receptionist'), billingController.updateBill);

module.exports = router;
