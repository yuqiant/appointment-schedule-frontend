import axios from 'axios';

const API_BASE_URL = 'http://localhost:5001/api';

// Get all appointments
export const getAppointments = () => {
    return axios.get(`${API_BASE_URL}/appointments`);
};

// Create a new appointment
export const createAppointment = (appointmentData) => {
    return axios.post(`${API_BASE_URL}/appointments`, appointmentData);
};

// Update an appointment
export const updateAppointment = (id, appointmentData) => {
    return axios.put(`${API_BASE_URL}/appointments/${id}`, appointmentData);
};

// Delete an appointment
export const deleteAppointment = (id) => {
    return axios.delete(`${API_BASE_URL}/appointments/${id}`);
};

// Get all patients
export const getPatients = () => {
    return axios.get(`${API_BASE_URL}/patients`);
};
