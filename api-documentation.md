# Clinic Appointment MERN - API Documentation

## Overview
This document describes all backend API endpoints, their usage, sample payloads, and testing instructions. All endpoints (except `/api/auth/register` and `/api/auth/login`) require a JWT token in the `Authorization` header.

## User Flow (Recommended Sequence)
1. **Register a User (Admin/Doctor/Receptionist)**
   - `POST /api/auth/register`
   - Payload:
     ```json
     { "name": "Admin User", "email": "admin@clinic.com", "password": "password123", "role": "admin" }
     ```
2. **Login**
   - `POST /api/auth/login`
   - Payload:
     ```json
     { "email": "admin@clinic.com", "password": "password123" }
     ```
   - Response: `{ "token": "<JWT_TOKEN>" }`
   - Use this token for all further requests:
     - Header: `Authorization: Bearer <JWT_TOKEN>`
3. **Create a Doctor** (Admin only)
   - `POST /api/doctors`
   - Payload:
     ```json
     { "first_name": "John", "last_name": "Doe", "specialization": "Cardiology", "phone": "1234567890", "email": "johndoe@clinic.com" }
     ```
4. **Create a Patient** (Admin/Receptionist)
   - `POST /api/patients`
   - Payload:
     ```json
     { "first_name": "Jane", "last_name": "Smith", "dob": "1990-01-01", "gender": "Female", "phone": "9876543210", "email": "janesmith@email.com", "address": "123 Main St" }
     ```
5. **Book an Appointment** (Admin/Receptionist)
   - `POST /api/appointments`
   - Payload:
     ```json
     { "patient_id": "<PATIENT_ID>", "doctor_id": "<DOCTOR_ID>", "appointment_date": "2025-07-04", "appointment_time": "10:00", "status": "Pending", "notes": "First visit" }
     ```
6. **Add Medical Record** (Admin/Doctor)
   - `POST /api/medical-records`
   - Payload:
     ```json
     { "patient_id": "<PATIENT_ID>", "doctor_id": "<DOCTOR_ID>", "diagnosis": "Hypertension", "prescription": "Medication A", "notes": "Monitor blood pressure", "date_of_visit": "2025-07-04" }
     ```
7. **Create Bill** (Admin/Receptionist)
   - `POST /api/billing`
   - Payload:
     ```json
     { "patient_id": "<PATIENT_ID>", "appointment_id": "<APPOINTMENT_ID>", "amount": 500, "payment_status": "Pending", "payment_date": null }
     ```

## Main Endpoints
- `POST /api/auth/register` — Register user
- `POST /api/auth/login` — Login and get JWT token
- `POST /api/auth/logout` — Logout
- `GET /api/auth/me` — Get current user profile
- `POST /api/doctors` — Create doctor
- `GET /api/doctors` — List all doctors
- `GET /api/doctors/:id` — Get doctor by ID
- `DELETE /api/doctors/:id` — Delete doctor
- `POST /api/patients` — Create patient
- `GET /api/patients` — List all patients
- `GET /api/patients/:id` — Get patient by ID
- `DELETE /api/patients/:id` — Delete patient
- `POST /api/appointments` — Create appointment
- `GET /api/appointments` — List all appointments
- `GET /api/appointments/:id` — Get appointment by ID
- `DELETE /api/appointments/:id` — Delete appointment
- `POST /api/medical-records` — Create medical record
- `GET /api/medical-records` — List all medical records
- `GET /api/medical-records/:id` — Get medical record by ID
- `DELETE /api/medical-records/:id` — Delete medical record
- `POST /api/billing` — Create bill
- `GET /api/billing` — List all bills
- `GET /api/billing/:id` — Get bill by ID
- `DELETE /api/billing/:id` — Delete bill

## Testing & Sample Payloads
- Use Postman or curl for API testing.
- Always include the JWT token in the `Authorization` header for protected endpoints.
- Sample curl for creating a doctor:
  ```sh
  curl -X POST http://localhost:5000/api/doctors \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer <JWT_TOKEN>" \
    -d '{ "first_name": "John", "last_name": "Doe", "specialization": "Cardiology", "phone": "1234567890", "email": "johndoe@clinic.com" }'
  ```
- Replace `<JWT_TOKEN>`, `<PATIENT_ID>`, `<DOCTOR_ID>`, `<APPOINTMENT_ID>` as needed.

## Notes
- Only Admin can create doctors. Admin/Receptionist can create patients, appointments, and bills. Admin/Doctor can add medical records.
- All update (PUT) endpoints are in the `backup/` folder and not part of the main flow.
- For more details, see the backend and frontend README files.
