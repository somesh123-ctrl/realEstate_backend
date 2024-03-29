const mongoose = require("mongoose");

const HouseSchema = mongoose.Schema({
  house_location: {
    province: { type: String, required: true },
    city: { type: String, required: true },
  },

  house_details: {
    price: { type: Number, required: true },
    isSaleOrRent: { type: String, required: true },
    numOfBedRooms: { type: String, required: true },
    numOfBathRooms: { type: String, required: true },
    numOfGarages: { type: Number, required: true },
    house_image: { type: String, required: true },
  },
});

const House = mongoose.model("House", HouseSchema);

module.exports = { House };
