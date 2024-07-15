import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import EditBookingForm from '../components/EditBookingForm';
import './EditBooking.css';

const EditBooking = () => {
  const { id } = useParams();
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    axios.get(`/api/bookings/${id}`)
      .then(response => setBooking(response.data))
      .catch(error => console.error(error));
  }, [id]);

  const handleEditBookingSubmit = (formData) => {
    // Logique pour gérer la soumission du formulaire de modification de réservation
  };

  return (
    <div className="edit-booking">
      <h1>Edit Booking</h1>
      {booking && <EditBookingForm booking={booking} onSubmit={handleEditBookingSubmit} />}
    </div>
  );
};

export default EditBooking;
