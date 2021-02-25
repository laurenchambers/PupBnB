// backend/routes/api/users.js
const express = require("express");
const asyncHandler = require("express-async-handler");

const router = express.Router();
const { Spot } = require("../../db/models");

//spots route
router.get(
  "/:id(\\d+)",
  asyncHandler(async (req, res) => {
    const spot = await Spot.findByPk(req.params.id);
    res.json({ spot });
  })
);

//spots post route
router.post(
  "/",
  asyncHandler(async (req, res) => {
    const {
      hostId,
      name,
      description,
      streetAddress,
      city,
      state,
      zipCode,
      price,
    } = req.body;
    //maybe change to findall
    const spot = await Spot.create({
      hostId,
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
