// backend/routes/api/users.js
const express = require("express");
const asyncHandler = require("express-async-handler");

const router = express.Router();
const { Review } = require("../../db/models/");

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
  "/add-rating/",
  asyncHandler(async (req, res) => {
    // const userId = parseInt(req.params.userId);
    // const spotId = parseInt(req.params.spotId);
    // const id = req.params.id;
    console.log("PARAMS RATING", req.params);

    const { rating, comment, spotId, userId } = req.body;

    const review = await Review.create({
      userId,
      spotId,
      comment,
      rating,
    });
    res.json({
      userId,
      spotId,
      comment,
      rating,
    });
  })
);

module.exports = router;
