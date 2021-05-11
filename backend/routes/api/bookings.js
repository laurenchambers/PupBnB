const express = require("express");
const asyncHandler = require("express-async-handler");
const db = require("../../db/models");

const Session = db.Session;
const Spot = db.Spot;
const Booking = db.Booking;

const router = express.Router();

router.post(
  "/",
  asyncHandler(async (req, res) => {
    const { userId, spotId, bookingStart, bookingEnd } = req.body;
    const booking = await Booking.create({
      userId,
      spotId,
      startDate: bookingStart,
      endDate: bookingEnd,
    });

    res.json({ booking });
  })
);

module.exports = router;
