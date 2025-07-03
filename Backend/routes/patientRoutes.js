// Patient routes
const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');


const { protect, allowRoles } = require('../auth/rbac');

// Only admin and receptionist can create patients
router.post('/', protect, allowRoles('admin', 'receptionist'), patientController.createPatient);
// All authenticated users can view patients
router.get('/', protect, patientController.getPatients);
router.get('/:id', protect, patientController.getPatientById);
// Only admin and receptionist can update/delete
router.put('/:id', protect, allowRoles('admin', 'receptionist'), patientController.updatePatient);
router.delete('/:id', protect, allowRoles('admin', 'receptionist'), patientController.deletePatient);

module.exports = router;
