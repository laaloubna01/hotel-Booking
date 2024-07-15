import React, { useState } from 'react';
import './BookingForm.css';

const BookingForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    checkIn: '',
    checkOut: '',
    roomType: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="checkIn"
        value={formData.checkIn}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="checkOut"
        value={formData.checkOut}
        onChange={handleChange}
        required
      />
      <select
        name="roomType"
        value={formData.roomType}
        onChange={handleChange}
        required
      >
        <option value="">Select Room Type</option>
        <option value="single">Single</option>
        <option value="double">Double</option>
        <option value="suite">Suite</option>
      </select>
      <button type="submit">Book Now</button>
    </form>
  );
};

export default BookingForm;
