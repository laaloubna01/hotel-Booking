import React from 'react';

const ReservationForm = ({ hotel }) => {
  return (
    <div className="reservation-form">
      <h2>Réserver {hotel.name}</h2>
      {/* Ajoutez les champs de formulaire nécessaires */}
      {/* Exemple : */}
      <label>Date de début:</label>
      <input type="date" />

      <label>Date de fin:</label>
      <input type="date" />

      <label>Nombre de personnes:</label>
      <input type="number" />

      <label>Nombre de nuits:</label>
      <input type="number" />

      <button>Confirmer la réservation</button>
    </div>
  );
};

export default ReservationForm;
