// Doctor routes
const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctorController');


const { protect, allowRoles } = require('../auth/rbac');

// Only admin can create/update/delete doctors
router.post('/', protect, allowRoles('admin'), doctorController.createDoctor);
// Public: List all doctors (no auth required)
router.get('/', doctorController.getDoctors);
// Public: Get doctor by ID (no auth required)
router.get('/:id', doctorController.getDoctorById);
// router.put('/:id', protect, allowRoles('admin'), doctorController.updateDoctor); // Moved to backup/doctorUpdateRoute.js
router.delete('/:id', protect, allowRoles('admin'), doctorController.deleteDoctor);

module.exports = router;
