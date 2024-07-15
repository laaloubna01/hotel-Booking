const Hotel = require('../models/Hotel');

exports.getHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.status(200).json(hotels);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createHotel = async (req, res) => {
  const { name, location, price, stars, description, image } = req.body;

  try {
    const hotel = new Hotel({ name, location, price, stars, description, image });
    await hotel.save();
    res.status(201).json(hotel);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
