// Doctor routes
const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctorController');


const { protect, allowRoles } = require('../auth/rbac');

// Only admin can create/update/delete doctors
router.post('/', protect, allowRoles('admin'), doctorController.createDoctor);
router.get('/', protect, doctorController.getDoctors);
router.get('/:id', protect, doctorController.getDoctorById);
router.put('/:id', protect, allowRoles('admin'), doctorController.updateDoctor);
router.delete('/:id', protect, allowRoles('admin'), doctorController.deleteDoctor);

module.exports = router;
