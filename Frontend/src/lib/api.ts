// API utility for all backend endpoints
import axios from 'axios';

// Fix for Vite env typing
const API_BASE = (import.meta as any).env.VITE_API_URL || 'http://localhost:5000/api';

// Auth
export const login = (data) => axios.post(`${API_BASE}/auth/login`, data);
export const register = (data) => axios.post(`${API_BASE}/auth/register`, data);
export const getMe = (token) => axios.get(`${API_BASE}/auth/me`, { headers: { Authorization: `Bearer ${token}` } });

// Patients
export const getPatients = (token) => axios.get(`${API_BASE}/patients`, { headers: { Authorization: `Bearer ${token}` } });
export const getPatient = (id, token) => axios.get(`${API_BASE}/patients/${id}`, { headers: { Authorization: `Bearer ${token}` } });
export const createPatient = (data, token) => axios.post(`${API_BASE}/patients`, data, { headers: { Authorization: `Bearer ${token}` } });
export const updatePatient = (id, data, token) => axios.put(`${API_BASE}/patients/${id}`, data, { headers: { Authorization: `Bearer ${token}` } });
export const deletePatient = (id, token) => axios.delete(`${API_BASE}/patients/${id}`, { headers: { Authorization: `Bearer ${token}` } });

// Doctors
export const getDoctors = (token) => axios.get(`${API_BASE}/doctors`, { headers: { Authorization: `Bearer ${token}` } });
export const getDoctor = (id, token) => axios.get(`${API_BASE}/doctors/${id}`, { headers: { Authorization: `Bearer ${token}` } });
export const createDoctor = (data, token) => axios.post(`${API_BASE}/doctors`, data, { headers: { Authorization: `Bearer ${token}` } });
export const updateDoctor = (id, data, token) => axios.put(`${API_BASE}/doctors/${id}`, data, { headers: { Authorization: `Bearer ${token}` } });
export const deleteDoctor = (id, token) => axios.delete(`${API_BASE}/doctors/${id}`, { headers: { Authorization: `Bearer ${token}` } });

// Appointments
export const getAppointments = (token, params) => axios.get(`${API_BASE}/appointments`, { headers: { Authorization: `Bearer ${token}` }, params });
export const getAppointment = (id, token) => axios.get(`${API_BASE}/appointments/${id}`, { headers: { Authorization: `Bearer ${token}` } });
export const createAppointment = (data, token) => axios.post(`${API_BASE}/appointments`, data, { headers: { Authorization: `Bearer ${token}` } });
export const updateAppointment = (id, data, token) => axios.put(`${API_BASE}/appointments/${id}`, data, { headers: { Authorization: `Bearer ${token}` } });
export const deleteAppointment = (id, token) => axios.delete(`${API_BASE}/appointments/${id}`, { headers: { Authorization: `Bearer ${token}` } });

// Billing
export const getBills = (token, params) => axios.get(`${API_BASE}/billing`, { headers: { Authorization: `Bearer ${token}` }, params });
export const getBill = (id, token) => axios.get(`${API_BASE}/billing/${id}`, { headers: { Authorization: `Bearer ${token}` } });
export const createBill = (data, token) => axios.post(`${API_BASE}/billing`, data, { headers: { Authorization: `Bearer ${token}` } });
export const updateBill = (id, data, token) => axios.put(`${API_BASE}/billing/${id}`, data, { headers: { Authorization: `Bearer ${token}` } });
export const deleteBill = (id, token) => axios.delete(`${API_BASE}/billing/${id}`, { headers: { Authorization: `Bearer ${token}` } });

// Medical Records
export const getMedicalRecords = (token) => axios.get(`${API_BASE}/medical-records`, { headers: { Authorization: `Bearer ${token}` } });
export const getMedicalRecord = (id, token) => axios.get(`${API_BASE}/medical-records/${id}`, { headers: { Authorization: `Bearer ${token}` } });
export const createMedicalRecord = (data, token) => axios.post(`${API_BASE}/medical-records`, data, { headers: { Authorization: `Bearer ${token}` } });
export const updateMedicalRecord = (id, data, token) => axios.put(`${API_BASE}/medical-records/${id}`, data, { headers: { Authorization: `Bearer ${token}` } });
export const deleteMedicalRecord = (id, token) => axios.delete(`${API_BASE}/medical-records/${id}`, { headers: { Authorization: `Bearer ${token}` } });

// Reports
export const getDailyAppointmentsReport = (token, date) => axios.get(`${API_BASE}/reports/daily-appointments`, { headers: { Authorization: `Bearer ${token}` }, params: { date } });
export const getBillingReport = (token, date) => axios.get(`${API_BASE}/reports/billing`, { headers: { Authorization: `Bearer ${token}` }, params: { date } });
export const getDoctorAppointmentsSummary = (token, date) => axios.get(`${API_BASE}/reports/doctor-appointments`, { headers: { Authorization: `Bearer ${token}` }, params: { date } });
