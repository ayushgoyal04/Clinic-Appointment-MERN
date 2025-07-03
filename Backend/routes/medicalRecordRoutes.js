// Medical Record routes
const express = require('express');
const router = express.Router();
const medicalRecordController = require('../controllers/medicalRecordController');

router.post('/', medicalRecordController.createMedicalRecord);
router.get('/', medicalRecordController.getMedicalRecords);
router.get('/:id', medicalRecordController.getMedicalRecordById);
router.put('/:id', medicalRecordController.updateMedicalRecord);
router.delete('/:id', medicalRecordController.deleteMedicalRecord);

module.exports = router;
