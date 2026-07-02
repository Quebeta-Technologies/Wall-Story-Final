import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  timeout: 8000,
});

export const fetchServices     = () => api.get('/services').then(r => r.data);
export const fetchTestimonials = () => api.get('/testimonials').then(r => r.data);
export const fetchGallery      = () => api.get('/gallery').then(r => r.data);
export const submitContact     = (payload) => api.post('/contact', payload).then(r => r.data);

export default api;
