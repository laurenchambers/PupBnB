// backend/routes/api/users.js
const express = require("express");
const asyncHandler = require("express-async-handler");

const router = express.Router();
const { Rating } = require("../../db/models/");

//GET THE RATINGS
router.get(
  "/:spotId",
  asyncHandler(async (req, res) => {
    const spotId = parseInt(req.params.spotId);
    console.log("ratingPRAMS", req.params);
    const spotRatings = await Rating.findAll({
      where: {
        spotId,
      },
    });
    res.json({ spotRatings });
  })
);

//POST A RATING
// router.post(
//   "/:spotId",
//   asyncHandler(async (req, res) => {
//     const userId = parseInt(req.params.userId);
//     const spotId = parseInt(req.params.spotId);
//     console.log("PARAMS USER", req.params.spotId);

//     const { rating, comment } = req.body;

//     const newRating = await Review.create({
//       userId,
//       spotId,
//       body: comment,
//       rating,
//     });
//     res.json({
//       newRating,
//     });
//   })
// );

module.exports = router;
