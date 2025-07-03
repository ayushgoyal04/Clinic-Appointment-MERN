// Entry point for the backend server
require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const logger = require('./config/logger');
const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/posts', require('./routes/postRoutes'));
app.use('/api/patients', require('./routes/patientRoutes'));
app.use('/api/doctors', require('./routes/doctorRoutes'));
app.use('/api/appointments', require('./routes/appointmentRoutes'));
app.use('/api/medical-records', require('./routes/medicalRecordRoutes'));
app.use('/api/billing', require('./routes/billingRoutes'));

// Connect to MongoDB and start server
connectDB().then(() => {
    app.listen(process.env.PORT, () => {
        logger.info(`Server running on port ${process.env.PORT}`);
    });
});
