import React from 'react';
import HotelCard from '../componant/HotelCard';
import hotel1 from '../images/hotel1.jpeg';
import hotel2 from '../images/hotel2.jpeg';
import hotel3 from '../images/hotel3.jpeg';
import hotel4 from '../images/hotel4.jpeg';
import './Home.css';

function Home() {
  const hotels = [
    {
      image: hotel1,
      name: 'Hotel Mamounia',
      description: 'Un hôtel 5 étoiles avec toutes les commodités modernes.',
      stars: 5,
    },
    {
      image: hotel2,
      name: 'Hotel caravanserai',
      description: 'Un choix économique pour les voyageurs.',
      stars: 4,
    },
    {
      image: hotel3,
      name: 'Hotel Royal Mansour',
      description: 'Un hébergement confortable avec un excellent service.',
      stars: 5,
    },
    {
      image: hotel4,
      name: 'Suite Royale',
      description: 'Une expérience royale avec des suites de luxe.',
      stars: 5,
    },
  ];

  return (
    <div className="home">
      <h1>Trouvez et réservez le séjour idéal</h1>
      <div className="hotel-list">
        {hotels.map((hotel, index) => (
          <HotelCard
            key={index}
            image={hotel.image}
            name={hotel.name}
            description={hotel.description}
            stars={hotel.stars}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
