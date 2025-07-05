# Clinic Appointment MERN - Full Stack Project

## Overview
A modern, full-stack Clinic Management System for small clinics. The backend (Node.js, Express, MongoDB) manages users, doctors, patients, appointments, medical records, and billing. The frontend (React, TypeScript, Vite, Tailwind CSS) provides a responsive UI for all operations.

## Backend
- **Node.js + Express**: RESTful API for all clinic operations
- **MongoDB (Mongoose)**: Data storage for users, doctors, patients, appointments, medical records, and bills
- **Authentication**: JWT-based, with role-based access (admin, doctor, receptionist)
- **Business Logic**: Service layer for all core operations
- **Logging**: Winston logger
- **Environment**: Configurable via `.env` (MONGO_URI, JWT_SECRET, PORT)

### Key Directories
- `models/`: Mongoose schemas
- `controllers/`: Request/response logic
- `services/`: Business logic
- `routes/`: API endpoints
- `auth/`: Auth and RBAC
- `config/`: DB and logger config

## Frontend
- **React + TypeScript**: SPA with modular components
- **Vite**: Fast build and dev server
- **Tailwind CSS**: Modern, utility-first styling
- **Features**: User login, doctor/patient management, appointment booking, billing, and medical records

### Key Directories
- `src/components/`: UI components
- `src/pages/`: Main pages (Home, NotFound, etc.)
- `src/lib/`: API utilities
- `src/hooks/`: Custom hooks

## How to Run
1. `cd Backend && npm install && npm start`
2. `cd Frontend && npm install && npm run dev`
3. Set up `.env` in Backend with your MongoDB URI and secrets

## API Documentation
See `api-documentation.md` for full API details, sample payloads, and testing instructions.
