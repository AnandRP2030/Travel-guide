const {
  touristSignup,
  touristSignupUploads,
  getTouristById,
  getAllTourist
} = require("./tourist.controller");
const express = require("express");
const { isEmailUnique } = require("../middleware/emailUnique");
const touristRoutes = express.Router();
touristRoutes.post(
  "/signup",
  touristSignupUploads,
  isEmailUnique,
  touristSignup
); 

touristRoutes.get('/getTourist/:id', getTouristById);
touristRoutes.get('/getAllTourist', getAllTourist);

module.exports = { touristRoutes };
