// backend/routes/api/users.js
const express = require("express");
const asyncHandler = require("express-async-handler");
const router = express.Router();
const db = require("../../db/models");
const Spot = db.Spot;
const Review = db.Review;

//route to display ALL spots
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const spots = await Spot.findAll();
    // console.log(spots);
    res.json({ spots });
  })
);

//route to display SIX spots
router.get(
  "/six",
  asyncHandler(async (req, res) => {
    const spots = await Spot.findAll({ limit: 6 });
    // console.log(spots);
    res.json({ spots });
  })
);

//route for ONE spot
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    console.log("SPOTparams", req.params);
    const id = req.params.id;
    const spot = [];
    const spotObj = await Spot.findOne({
      where: {
        id,
      },
    });
    spot.push(spotObj);
    res.json({ spot });
  })
);

//ratings
router.get(
  "/ratings",
  asyncHandler(async (req, res) => {
    const comments = await Review.findAll();
    res.json({ comments });
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

// //POST A RATING
router.post(
  "/add-rating/",
  asyncHandler(async (req, res) => {
    // const userId = parseInt(req.params.userId);
    // const spotId = parseInt(req.params.spotId);
    const id = req.params.id;
    console.log("PARAMS USER", req.params.spotId);

    const { rating, comment, spotId, userId } = req.body;

    const review = await Review.create({
      userId,
      spotId,
      comment,
      rating,
    });
    res.json({
      review,
    });
  })
);

module.exports = router;
