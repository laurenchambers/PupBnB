// backend/routes/api/users.js
const express = require("express");
const asyncHandler = require("express-async-handler");

const router = express.Router();
const { Spot } = require("../../db/models");

//route to display ALL spots
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const spots = await Spot.findAll();
    // console.log(spots);
    res.json({ spots });
  })
);

//route for ONE spot
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id, 10);

    const spot = await Spot.findOne({
      where: {
        id,
      },
    });
    // console.log(spots);
    res.json({ spot });
  })
);

// spots post route
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

    res.json({
      spot,
    });
  })
);

module.exports = router;
