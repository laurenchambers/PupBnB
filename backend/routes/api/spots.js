// backend/routes/api/users.js
const express = require("express");
const asyncHandler = require("express-async-handler");

const router = express.Router();
const { Spot } = require("../../db/models");

//spots route
router.post(
  "/spots",
  asyncHandler(async (req, res) => {
    const {
      name,
      description,
      streetAddress,
      city,
      state,
      zipCode,
      price,
    } = req.body;

    const spot = await Spot.findAll({
      name,
      description,
      streetAddress,
      city,
      state,
      zipCode,
      price,
    });

    return res.json({
      spot,
    });
  })
);

module.exports = router;
