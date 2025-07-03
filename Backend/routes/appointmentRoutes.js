// Appointment routes
const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointmentController');


const { protect, allowRoles } = require('../auth/rbac');

// Only receptionist and admin can create appointments
router.post('/', protect, allowRoles('admin', 'receptionist'), appointmentController.createAppointment);
router.get('/', protect, appointmentController.getAppointments);
router.get('/:id', protect, appointmentController.getAppointmentById);
// Only receptionist and admin can update/delete
router.put('/:id', protect, allowRoles('admin', 'receptionist'), appointmentController.updateAppointment);
router.delete('/:id', protect, allowRoles('admin', 'receptionist'), appointmentController.deleteAppointment);

module.exports = router;
