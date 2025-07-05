# Clinic Appointment MERN Project Documentation

## Project Summary
This project is a full-stack Clinic Management System designed to streamline the operations of a small clinic. It enables user registration, doctor and patient management, appointment scheduling, medical record keeping, and billing. The backend is built with Node.js, Express, and MongoDB (Mongoose), while the frontend uses React, TypeScript, and Vite, styled with Tailwind CSS.

## Project Modules
- **Authentication & Authorization**: User registration, login, JWT-based authentication, and role-based access control (admin, doctor, receptionist).
- **Doctor Management**: CRUD operations for doctors, including specialization and contact details.
- **Patient Management**: CRUD operations for patients, including personal and contact information.
- **Appointment Scheduling**: Book, view, and cancel appointments linking patients and doctors.
- **Medical Records**: Add and view medical records for patients, including diagnosis and prescriptions.
- **Billing**: Create and manage bills for appointments, track payment status.
- **Reports**: Generate daily and summary reports for appointments and billing.

## Backend JSON (Sample Payloads)
- **User**
```json
{
  "name": "Admin User",
  "email": "admin@clinic.com",
  "password": "password123",
  "role": "admin"
}
```
- **Doctor**
```json
{
  "first_name": "John",
  "last_name": "Doe",
  "specialization": "Cardiology",
  "phone": "1234567890",
  "email": "johndoe@clinic.com"
}
```
- **Patient**
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
- **Appointment**
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
- **Medical Record**
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
- **Bill**
```json
{
  "patient_id": "<PATIENT_ID>",
  "appointment_id": "<APPOINTMENT_ID>",
  "amount": 500,
  "payment_status": "Pending",
  "payment_date": null
}
```

## Project Flow
1. **User Registration & Login**: Admin, doctor, or receptionist registers and logs in to receive a JWT token.
2. **Doctor/Patient Creation**: Admin creates doctor profiles; admin or receptionist creates patient profiles.
3. **Appointment Booking**: Admin or receptionist books appointments linking patients and doctors.
4. **Medical Record Entry**: Doctor or admin adds medical records for patients.
5. **Billing**: Admin or receptionist generates bills for appointments.
6. **Reports & Data Viewing**: Authenticated users view lists, details, and reports for all entities.

## Tech Stack
- **Backend**: Node.js, Express, MongoDB (Mongoose), JWT, bcryptjs, dotenv, cors
- **Frontend**: React, TypeScript, Vite, Tailwind CSS
- **Other**: Winston (logging), RESTful API design, role-based access control

---
This documentation provides a concise overview of the Clinic Appointment MERN project, its modules, data models, flow, and technology stack.
