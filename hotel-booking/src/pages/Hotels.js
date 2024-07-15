// src/pages/Hotels.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import hotel11 from '../images/hotel11.jpg';
import hotel12 from '../images/hotel12.jpg';
import hotel13 from '../images/hotel13.jpg';
import './Hotels.css';

const hotels = [
  {
    id: 1,
    name: 'Hotel Mamounia',
    location: 'Marrakech, Maroc',
    price: 200,
    stars: 5,
    description: 'Un hôtel de luxe au cœur de Marrakech.',
    image: hotel11,
  },
  {
    id: 2,
    name: 'Hotel Royal Mansour',
    location: 'Marrakech, Maroc',
    price: 150,
    stars: 4,
    description: 'Ce palais au cœur de Marrakech offre aux voyageurs une expérience unique.',
    image: hotel12,
  },
  {
    id: 3,
    name: 'Hotel Hilton',
    location: 'Tanger, Maroc',
    price: 180,
    stars: 5,
    description: 'Un hôtel de montagne avec une vue imprenable.',
    image: hotel13,
  },
];

const Hotels = () => {
  const navigate = useNavigate();

  const handleHotelClick = (hotel) => {
    navigate(`/reservation/${hotel.id}`, { state: { hotel } });
  };

  return (
    <div className="hotels-container">
      <h1>Bienvenue à notre sélection d'hôtels</h1>
      <p>Découvrez et réservez les meilleurs hôtels dans les destinations les plus prisées.</p>
      <div className="hotels-grid">
        {hotels.map((hotel) => (
          <div
            key={hotel.id}
            className="hotel-card"
            onClick={() => handleHotelClick(hotel)}
          >
            <img src={hotel.image} alt={hotel.name} />
            <div className="hotel-info">
              <h2>{hotel.name}</h2>
              <p className="hotel-location">{hotel.location}</p>
              <p className="hotel-price">${hotel.price} par nuit</p>
              <div className="hotel-stars">
                {Array(hotel.stars)
                  .fill()
                  .map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
              </div>
              <p className="hotel-description">{hotel.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hotels;
