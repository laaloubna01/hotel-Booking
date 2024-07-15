const Reservation = require('../models/Reservation');

exports.createReservation = async (req, res) => {
  const { hotelId, startDate, endDate, numberOfGuests, numberOfNights } = req.body;

  try {
    const reservation = new Reservation({
      hotel: hotelId,
      user: req.user.id,
      startDate,
      endDate,
      numberOfGuests,
      numberOfNights,
    });

    await reservation.save();
    res.status(201).json(reservation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getReservationsByUser = async (req, res) => {
  try {
    const reservations = await Reservation.find({ user: req.user.id }).populate('hotel');
    res.status(200).json(reservations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
