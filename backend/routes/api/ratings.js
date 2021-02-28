// backend/routes/api/users.js
const express = require("express");
const asyncHandler = require("express-async-handler");

const router = express.Router();
const { Comment, Spot } = require("../../db/models/");

const spots = await Spot.findAll()
const comments = await Comment.findAll();

for (let i = 0; i < spots.length; i++) {
  const spotId = spots[i].id
  const allComments = await Comment.findAll({
    where: {
      spotId,
    }
  })
}
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const comments = await Comment.findAll();
    res.json({ comments });
  })
);

module.exports = router;
