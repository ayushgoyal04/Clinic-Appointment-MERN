// Appointment routes
const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointmentController');


const { protect, allowRoles } = require('../auth/rbac');

// Allow anyone to create appointments (public)
router.post('/', appointmentController.createAppointment);
router.get('/', protect, appointmentController.getAppointments);
router.get('/:id', protect, appointmentController.getAppointmentById);
// Only receptionist and admin can update/delete
// router.put('/:id', protect, allowRoles('admin', 'receptionist'), appointmentController.updateAppointment); // Moved to backup/appointmentUpdateRoute.js
router.delete('/:id', protect, allowRoles('admin', 'receptionist'), appointmentController.deleteAppointment);

module.exports = router;
