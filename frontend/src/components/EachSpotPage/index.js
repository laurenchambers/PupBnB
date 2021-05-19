import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Redirect } from "react-router-dom";
import { showIndividualSpot, getReviews, deleteASpot } from "../../store/spots";
import "./EachSpotPage.css";
// import { getSpotsRatings } from "../../store/ratings";
import LeaveReview from "../LeaveAReview";
import React from "react";
import Calendar from "./Calendar";
import { createNewBooking } from "../../store/bookings";
import { set } from "js-cookie";

function SpotsPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [showCalendar, setShowCalendar] = useState(false);
  const [value, onChange] = useState(new Date());
  const [booking, setBooking] = useState(false);
  const spot = useSelector((state) => state.spots[id]);
  const user = useSelector((state) => state.session.user);
  const spotId = useSelector((state) => state?.spots[id]?.id);
  // const [userSpot, setUserSpot] = useState(false);
  // const reviewsArr = useSelector((state) => state.ratings);
  async function handleSubmit() {
    let result = window.confirm("Click to confirm your booking!");
    const payload = {
      userId: user.id,
      spotId: spotId,
      bookingStart: value[0],
      bookingEnd: value[1],
    };

    if (result) {
      await dispatch(createNewBooking(payload));
      setShowCalendar(false);
      setBooking(true);
      return <Redirect to={`/spots/${id}`} />;
    }
  }

  function handleClose() {
    setShowCalendar(false);
  }

  async function handleDelete() {
    await dispatch(deleteASpot());
    return <Redirect to={`/`} />;
  }

  useEffect(() => {
    dispatch(getReviews(id));
    dispatch(showIndividualSpot(id));
  }, [dispatch, id]);

  if (!spot) return null;
  const {
    name,
    streetAddress,
    city,
    state,
    zipCode,
    price,
    description,
    img,
  } = spot;

  // const { rating, comment } = ratings;

  return (
    <>
      <div className="individual-spot-container">
        <div className="image-calendar-container">
          <div>
            <img className="spot-page-image" src={img} alt="Spot" />
          </div>
          {/* next flex  */}
          <div className="spot-data-container">
            <div className="spot-data">
              <h2>{name}</h2>
              <h3>{streetAddress}</h3>
              <h3>
                {city}, {state} {zipCode}
              </h3>
              <h4>${price} per night!</h4>
              <h5>{description}</h5>
            </div>
            {!booking ? (
              <div className="bookings-calendar">
                {!showCalendar && (
                  <button
                    className="book-now-button"
                    onClick={() => setShowCalendar(true)}
                  >
                    Book Now!
                  </button>
                )}
                {showCalendar && (
                  <button
                    className="confirm-book-now-button"
                    onClick={handleSubmit}
                  >
                    Confirm Booking
                  </button>
                )}
                {showCalendar && (
                  <Calendar
                    className="book-calendar"
                    onChange={onChange}
                    value={value}
                  />
                )}
                <div>
                  {showCalendar ? (
                    <button
                      className="book-now-button-close"
                      onClick={handleClose}
                    >
                      Close Calendar
                    </button>
                  ) : (
                    <div></div>
                  )}
                </div>
              </div>
            ) : (
              <div className="booking-confirmed">
                Congrats! Your pups stay has been booked!
              </div>
            )}
          </div>
          <div className="review-area-container">
            <LeaveReview />
          </div>
        </div>
        <div>
          {user.id === spotId ? (
            <button onClick={handleDelete}>DELETE</button>
          ) : (
            <div>""</div>
          )}
        </div>
      </div>
    </>
  );
}

export default SpotsPage;
