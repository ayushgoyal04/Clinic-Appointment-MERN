// Backup of appointment update route
const express = require('express');
const router = express.Router();
const appointmentController = require('../backup/appointmentUpdateController');
const { protect, allowRoles } = require('../auth/rbac');

router.put('/:id', protect, allowRoles('admin', 'receptionist'), appointmentController.updateAppointment);

module.exports = router;
