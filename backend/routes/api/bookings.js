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

//delete a booking
router.post("/bookings/:id", asyncHandler(async (req, res) => {
  const booking = await Booking.findByPk(req.params.id);
  const item = booking.destroy();

  return res.json({ item });
}))


module.exports = router;
