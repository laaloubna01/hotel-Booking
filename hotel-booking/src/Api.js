import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000', // Remplacez par l'URL de votre API
});

export const getHotels = () => api.get('/hotels');
export const getBooking = (id) => api.get(`/bookings/${id}`);
export const createBooking = (data) => api.post('/bookings', data);
export const updateBooking = (id, data) => api.put(`/bookings/${id}`, data);
export const deleteBooking = (id) => api.delete(`/bookings/${id}`);
