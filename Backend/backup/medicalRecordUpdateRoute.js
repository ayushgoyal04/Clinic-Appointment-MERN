// Backup of medical record update route
const express = require('express');
const router = express.Router();
const medicalRecordController = require('../backup/medicalRecordUpdateController');
const { protect, allowRoles } = require('../auth/rbac');

router.put('/:id', protect, allowRoles('admin', 'doctor'), medicalRecordController.updateMedicalRecord);

module.exports = router;
