# Small Clinic Management System - Backend

## Overview
This backend is built with Node.js, Express, and MongoDB (Mongoose) to manage a small clinic's operations: patient registration, doctor management, appointment scheduling (including follow-ups), medical records, and billing. The system is designed for a CLI or API-driven workflow, but can be extended for web or mobile clients.

## Folder Structure
```
Backend/
├── auth/                # Authentication and RBAC logic
├── config/              # Database and logger configuration
├── controllers/         # Request handlers for each resource
├── models/              # Mongoose schemas for all entities
├── routes/              # Express route definitions
├── services/            # Business logic and data access (see below)
├── .env                 # Environment variables
├── .gitignore           # Git ignore file
├── package.json         # Node.js dependencies and scripts
├── README.MD            # This documentation
└── server.js            # Entry point
```

## Main Entities & Relationships
- **Patient**: Registers with personal details. Can have many appointments and medical records.
- **Doctor**: Can have many appointments and medical records.
- **Appointment**: Links a patient and doctor, tracks date/time, status, and notes. Used for follow-ups.
- **MedicalRecord**: Linked to a patient and doctor, stores diagnosis, prescription, notes, and visit date.
- **Billing**: Linked to a patient and appointment, tracks amount, payment status, and date.


## API Endpoints
All endpoints are prefixed with `/api`.

### Patient APIs
- `POST   /api/patients`                : Register a new patient
- `GET    /api/patients`                : Get all patients
- `GET    /api/patients/:id`            : Get patient by ID
- `PUT    /api/patients/:id`            : Update patient info
- `DELETE /api/patients/:id`            : Delete patient

### Doctor APIs
- `POST   /api/doctors`                 : Register a new doctor
- `GET    /api/doctors`                 : Get all doctors
- `GET    /api/doctors/:id`             : Get doctor by ID
- `PUT    /api/doctors/:id`             : Update doctor info
- `DELETE /api/doctors/:id`             : Delete doctor

### Appointment APIs
- `POST   /api/appointments`            : Book appointment (or follow-up)
- `GET    /api/appointments`            : Get all appointments
- `GET    /api/appointments/:id`        : Get appointment by ID
- `PUT    /api/appointments/:id`        : Update appointment (status, time, etc.)
- `DELETE /api/appointments/:id`        : Cancel appointment

### Medical Record APIs
- `POST   /api/medical-records`         : Add medical record
- `GET    /api/medical-records`         : Get all medical records
- `GET    /api/medical-records/:id`     : Get medical record by ID
- `PUT    /api/medical-records/:id`     : Update medical record
- `DELETE /api/medical-records/:id`     : Delete medical record

### Billing APIs
- `POST   /api/billing`                 : Create bill for appointment
- `GET    /api/billing`                 : Get all bills
- `GET    /api/billing/:id`             : Get bill by ID
- `PUT    /api/billing/:id`             : Update bill/payment status
- `DELETE /api/billing/:id`             : Delete bill

### Reports APIs
- `GET    /api/reports/daily-appointments?date=YYYY-MM-DD`         : Daily Appointments Report
- `GET    /api/reports/billing?date=YYYY-MM-DD`                    : Billing Report
- `GET    /api/reports/doctor-appointments?date=YYYY-MM-DD`        : Doctor-wise Appointments Summary

### Auth APIs
- `POST   /api/auth/register`            : Register user (admin/doctor/receptionist)
- `POST   /api/auth/login`               : Login

## Service Layer
All business logic is implemented in the `services/` folder. Controllers only handle request/response and call the appropriate service. This ensures separation of concerns and maintainability.

## Folder Usage
- `models/`         : All Mongoose schemas
- `controllers/`    : Only request/response logic, calls services
- `services/`       : All business logic, data access, and validation
- `routes/`         : API route definitions, all start with `/api`
- `auth/`           : Auth logic (JWT, RBAC)
- `config/`         : DB and logger config

## Example Workflow
1. User sends request to `/api/patients` to register a patient
2. Route calls `patientController.createPatient`
3. Controller calls `patientService.createPatient`
4. Service validates, creates patient in DB, returns result
5. Controller sends response

**Always use the service layer for business logic!**

## Services Folder
The `services/` folder contains business logic and data access functions. Controllers call these services to keep request handling and business logic separate. For example:
- `userService.js`: Handles user registration, login, password hashing, etc.
- `patientService.js`: Handles patient CRUD and business rules.
- `appointmentService.js`: Handles appointment creation, follow-ups, status updates, etc.
- `doctorService.js`: Handles doctor CRUD.
- `medicalRecordService.js`: Handles medical record CRUD.
- `billingService.js`: Handles billing and payment logic.

**Note:** If a service file is missing, create it to encapsulate business logic for that entity. Avoid putting business logic directly in controllers.

## Logging
Logging is handled using a professional logger (e.g., Winston) in `config/logger.js`.

## Environment Variables
- `MONGO_URI`: MongoDB connection string
- `JWT_SECRET`: Secret for JWT authentication
- `PORT`: Server port

## How to Run
1. Install dependencies: `npm install`
2. Set up `.env` with your MongoDB URI and secrets
3. Start the server: `npm start`

---

For any new features, always:
- Add a model (if needed)
- Add a service for business logic
- Add a controller for request handling
- Add a route for API access

This keeps the codebase modular, testable, and maintainable.
