import React from 'react';
import BookingForm from '../components/BookingForm'; // Assurez-vous que le chemin est correct
import './Booking.css'; // Assurez-vous que le fichier CSS existe et est correctement nommé

function Booking() {
  return (
    <div className="booking-page">
      <BookingForm />
      {/* Autres éléments de la page de réservation */}
    </div>
  );
}

export default Booking;


