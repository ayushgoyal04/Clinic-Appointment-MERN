// Backup of doctor update route
const express = require('express');
const router = express.Router();
const doctorController = require('../backup/doctorUpdateController');
const { protect, allowRoles } = require('../auth/rbac');

router.put('/:id', protect, allowRoles('admin'), doctorController.updateDoctor);

module.exports = router;
