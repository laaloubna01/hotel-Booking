import React from 'react';
import './HotelCard.css';

function HotelCard({ image, name, description, stars }) {
  return (
    <div className="hotel-card">
      <img src={image} alt={name} className="hotel-image" />
      <h2>{name}</h2>
      <p>{description}</p>
      <div className="hotel-stars">
        {'★'.repeat(stars)}{'☆'.repeat(5 - stars)}
      </div>
    </div>
  );
}

export default HotelCard;



