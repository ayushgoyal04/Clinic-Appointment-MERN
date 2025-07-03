// Medical Record routes
const express = require('express');
const router = express.Router();
const medicalRecordController = require('../controllers/medicalRecordController');


const { protect, allowRoles } = require('../auth/rbac');

// Only doctor and admin can create/update/delete medical records
router.post('/', protect, allowRoles('admin', 'doctor'), medicalRecordController.createMedicalRecord);
router.get('/', protect, medicalRecordController.getMedicalRecords);
router.get('/:id', protect, medicalRecordController.getMedicalRecordById);
router.put('/:id', protect, allowRoles('admin', 'doctor'), medicalRecordController.updateMedicalRecord);
router.delete('/:id', protect, allowRoles('admin', 'doctor'), medicalRecordController.deleteMedicalRecord);

module.exports = router;
