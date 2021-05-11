// backend/routes/api/feature.js
const express = require("express");
const asyncHandler = require("express-async-handler");
const router = express.Router();
const db = require("../../db/models");
const Spot = db.Spot;

//route to display SIX spots
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const spots = await Spot.findAll({ limit: 6 });
    // console.log(spots);
    res.json({ spots });
  })
);

module.exports = router;
