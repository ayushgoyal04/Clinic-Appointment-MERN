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
- `DELETE /api/patients/:id`            : Delete patient

### Doctor APIs
- `POST   /api/doctors`                 : Register a new doctor
- `GET    /api/doctors`                 : Get all doctors
- `GET    /api/doctors/:id`             : Get doctor by ID
- `DELETE /api/doctors/:id`             : Delete doctor

### Appointment APIs
- `POST   /api/appointments`            : Book appointment (or follow-up)
- `GET    /api/appointments`            : Get all appointments
- `GET    /api/appointments/:id`        : Get appointment by ID
- `DELETE /api/appointments/:id`        : Cancel appointment

### Medical Record APIs
- `POST   /api/medical-records`         : Add medical record
- `GET    /api/medical-records`         : Get all medical records
- `GET    /api/medical-records/:id`     : Get medical record by ID
- `DELETE /api/medical-records/:id`     : Delete medical record

### Billing APIs
- `POST   /api/billing`                 : Create bill for appointment
- `GET    /api/billing`                 : Get all bills
- `GET    /api/billing/:id`             : Get bill by ID
- `DELETE /api/billing/:id`             : Delete bill

---

## ⚠️ PUT Endpoints Removed
All update (PUT) endpoints have been removed from the main codebase for simplicity. Their logic and routes are backed up in the `backup/` folder. If you need to restore update functionality, refer to the corresponding files in `backup/`.

---

## Complete User Flow & API Testing Sequence

1. **Register Users (Admin/Doctor/Receptionist):**
   - `POST /api/auth/register` (for each user type)
2. **Login:**
   - `POST /api/auth/login` (get JWT token)
3. **Register a Patient:**
   - `POST /api/patients`
4. **Register a Doctor:**
   - `POST /api/doctors`
5. **Book an Appointment:**
   - `POST /api/appointments`
6. **Add Medical Record:**
   - `POST /api/medical-records`
7. **Create Bill:**
   - `POST /api/billing`
8. **View Data:**
   - `GET /api/patients`, `/api/doctors`, `/api/appointments`, `/api/medical-records`, `/api/billing`
9. **View Details:**
   - `GET /api/patients/:id`, `/api/doctors/:id`, etc.
10. **Delete Data:**
   - `DELETE /api/patients/:id`, `/api/doctors/:id`, etc.
11. **Reports:**
   - `GET /api/reports/daily-appointments?date=YYYY-MM-DD`
   - `GET /api/reports/billing?date=YYYY-MM-DD`
   - `GET /api/reports/doctor-appointments?date=YYYY-MM-DD`

**Note:**
- All endpoints (except `/auth/register` and `/auth/login`) require authentication (JWT token in headers).
- Only Admin/Receptionist can create patients/appointments/bills. Only Admin can create doctors. Only Doctor/Admin can add medical records.
- For update (PUT) operations, see the `backup/` folder.

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

---

# User Flow & API Testing Guide

## Important Note
**All update (PUT) endpoints have been moved to the `backup/` folder and are NOT part of the main application flow. Do NOT use any routes or logic from the `backup/` folder for normal operation or testing.**

## Complete User Flow (Recommended Sequence)

1. **Register a User (Admin/Doctor/Receptionist)**
   - **Endpoint:** `POST /api/auth/register`
   - **Payload Example:**
     ```json
     {
       "name": "Admin User",
       "email": "admin@clinic.com",
       "password": "password123",
       "role": "admin"
     }
     ```

2. **Login**
   - **Endpoint:** `POST /api/auth/login`
   - **Payload Example:**
     ```json
     {
       "email": "admin@clinic.com",
       "password": "password123"
     }
     ```
   - **Response:** Contains a JWT token. Use this token as `Authorization: Bearer <token>` for all protected endpoints.

3. **Create a Doctor** (Admin only)
   - **Endpoint:** `POST /api/doctors`
   - **Payload Example:**
     ```json
     {
       "first_name": "John",
       "last_name": "Doe",
       "specialization": "Cardiology",
       "phone": "1234567890",
       "email": "johndoe@clinic.com"
     }
     ```

4. **Create a Patient** (Admin/Receptionist)
   - **Endpoint:** `POST /api/patients`
   - **Payload Example:**
     ```json
     {
       "first_name": "Jane",
       "last_name": "Smith",
       "dob": "1990-01-01",
       "gender": "Female",
       "phone": "9876543210",
       "email": "janesmith@email.com",
       "address": "123 Main St"
     }
     ```

5. **Create an Appointment** (Admin/Receptionist)
   - **Endpoint:** `POST /api/appointments`
   - **Payload Example:**
     ```json
     {
       "patient_id": "<PATIENT_ID>",
       "doctor_id": "<DOCTOR_ID>",
       "appointment_date": "2025-07-04",
       "appointment_time": "10:00",
       "status": "Pending",
       "notes": "First visit"
     }
     ```

6. **Create a Medical Record** (Admin/Doctor)
   - **Endpoint:** `POST /api/medical-records`
   - **Payload Example:**
     ```json
     {
       "patient_id": "<PATIENT_ID>",
       "doctor_id": "<DOCTOR_ID>",
       "diagnosis": "Hypertension",
       "prescription": "Medication A",
       "notes": "Monitor blood pressure",
       "date_of_visit": "2025-07-04"
     }
     ```

7. **Create a Bill** (Admin/Receptionist)
   - **Endpoint:** `POST /api/billing`
   - **Payload Example:**
     ```json
     {
       "patient_id": "<PATIENT_ID>",
       "appointment_id": "<APPOINTMENT_ID>",
       "amount": 500,
       "payment_status": "Pending",
       "payment_date": null
     }
     ```

---

## Main Endpoints (with Sample Payloads)

### Auth
- `POST /api/auth/register` — Register a new user
- `POST /api/auth/login` — Login and get JWT token
- `POST /api/auth/logout` — Logout
- `GET /api/auth/me` — Get current user profile

### Doctors
- `POST /api/doctors` — Create doctor
- `GET /api/doctors` — List all doctors
- `GET /api/doctors?report=summary` — Doctor-wise appointments summary
- `GET /api/doctors/:id` — Get doctor by ID
- `DELETE /api/doctors/:id` — Delete doctor

### Patients
- `POST /api/patients` — Create patient
- `GET /api/patients` — List all patients
- `GET /api/patients/:id` — Get patient by ID
- `DELETE /api/patients/:id` — Delete patient

### Appointments
- `POST /api/appointments` — Create appointment
- `GET /api/appointments` — List all appointments
- `GET /api/appointments/:id` — Get appointment by ID
- `DELETE /api/appointments/:id` — Delete appointment

### Medical Records
- `POST /api/medical-records` — Create medical record
- `GET /api/medical-records` — List all medical records
- `GET /api/medical-records/:id` — Get medical record by ID
- `DELETE /api/medical-records/:id` — Delete medical record

### Billing
- `POST /api/billing` — Create bill
- `GET /api/billing` — List all bills
- `GET /api/billing/:id` — Get bill by ID
- `DELETE /api/billing/:id` — Delete bill

---

## Data Model Reference (Sample Payloads)

### User
```json
{
  "name": "Admin User",
  "email": "admin@clinic.com",
  "password": "password123",
  "role": "admin"
}
```

### Doctor
```json
{
  "first_name": "John",
  "last_name": "Doe",
  "specialization": "Cardiology",
  "phone": "1234567890",
  "email": "johndoe@clinic.com"
}
```

### Patient
```json
{
  "first_name": "Jane",
  "last_name": "Smith",
  "dob": "1990-01-01",
  "gender": "Female",
  "phone": "9876543210",
  "email": "janesmith@email.com",
  "address": "123 Main St"
}
```

### Appointment
```json
{
  "patient_id": "<PATIENT_ID>",
  "doctor_id": "<DOCTOR_ID>",
  "appointment_date": "2025-07-04",
  "appointment_time": "10:00",
  "status": "Pending",
  "notes": "First visit"
}
```

### Medical Record
```json
{
  "patient_id": "<PATIENT_ID>",
  "doctor_id": "<DOCTOR_ID>",
  "diagnosis": "Hypertension",
  "prescription": "Medication A",
  "notes": "Monitor blood pressure",
  "date_of_visit": "2025-07-04"
}
```

### Bill
```json
{
  "patient_id": "<PATIENT_ID>",
  "appointment_id": "<APPOINTMENT_ID>",
  "amount": 500,
  "payment_status": "Pending",
  "payment_date": null
}
```

---

## About the `backup/` Folder

All update (PUT) logic and routes have been moved to the `backup/` folder for reference only. **Do not use any code or endpoints from `backup/` for normal application flow or testing.**
