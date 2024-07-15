// src/pages/Reservation.js
import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import './Reservation.css';

const Reservation = () => {
  const location = useLocation();
  const { hotelId } = useParams();
  const hotel = location.state.hotel;

  return (
    <div className="reservation-container">
      <h1>Réserver {hotel.name}</h1>
      <div className="hotel-info">
        <img src={hotel.image} alt={hotel.name} className="hotel-image" />
        <div className="hotel-details">
          <p>Location: {hotel.location}</p>
          <p>Price: ${hotel.price} per night</p>
          <p>Stars: {Array(hotel.stars).fill('⭐').join('')}</p>
          <p>{hotel.description}</p>
        </div>
      </div>
      <form className="reservation-form">
        <div>
          <label>Start Date:</label>
          <input type="date" name="start-date" required />
        </div>
        <div>
          <label>End Date:</label>
          <input type="date" name="end-date" required />
        </div>
        <div>
          <label>Number of Guests:</label>
          <input type="number" name="guests" required />
        </div>
        <div>
          <label>Number of Nights:</label>
          <input type="number" name="nights" required />
        </div>
        <button type="submit">Réserver</button>
      </form>
    </div>
  );
};

export default Reservation;
