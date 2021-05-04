// backend/routes/api/users.js
const express = require("express");
const asyncHandler = require("express-async-handler");

const router = express.Router();
const { Review } = require("../../db/models/rating");

//GET THE RATINGS
router.get(
  "/:spotId",
  asyncHandler(async (req, res) => {
    const spotId = parseInt(req.params.spotId);
    const spotRatings = await Review.findAll({
      where: {
        spotId,
      },
    });
    res.json({ spotRatings });
  })
);

//POST A RATING
router.post(
  "/",
  asyncHandler(async (req, res) => {
    // const userId = parseInt(req.params.userId);
    // const spotId = parseInt(req.params.spotId);
    // const id = req.params.id;

    const { rating, comment, spotId, userId } = req.body;
    console.log("body!!!!!!!", req.body);
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
