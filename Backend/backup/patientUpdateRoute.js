// Backup of patient update route
const express = require('express');
const router = express.Router();
const patientController = require('../backup/patientUpdateController');
const { protect, allowRoles } = require('../auth/rbac');

router.put('/:id', protect, allowRoles('admin', 'receptionist'), patientController.updatePatient);

module.exports = router;
