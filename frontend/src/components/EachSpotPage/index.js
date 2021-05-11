import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Redirect } from "react-router-dom";
import { showIndividualSpot, getReviews } from "../../store/spots";
import "./EachSpotPage.css";
// import { getSpotsRatings } from "../../store/ratings";
import LeaveReview from "../LeaveAReview";
import React from "react";
import { GoogleMap, withGoogleMap, Marker } from "react-google-maps";
import Calendar from "./Calendar";
import { createNewBooking } from "../../store/bookings";
// import { GoogleMap, withGoogleMap, Marker } from "@react-google-maps/api";
// import "./Map.css";

const Map = withGoogleMap(() => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const spot = useSelector((state) => state.spots[id]);
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
    lat,
    lng,
  } = spot;
  const locations = [
    {
      name: "Location 1",
      location: {
        lat: Number(spot.lat),
        lng: Number(spot.lng),
      },
    },
    {
      name: "Location 2",
      location: {
        lat: 41.3917,
        lng: 2.1649,
      },
    },
  ];

  return (
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: spot.lat, lng: spot.lng }}
    >
      {locations.map((item) => {
        return <Marker key={item.name} position={item.location} />;
      })}
    </GoogleMap>
  );
});

function SpotsPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [showCalendar, setShowCalendar] = useState(false);
  const [value, onChange] = useState(new Date());
  const spot = useSelector((state) => state.spots[id]);
  const defaultMarker = { lat: spot?.lat, lng: spot?.lng };
  console.log("market", defaultMarker);
  const user = useSelector((state) => state.session.user);
  const spotId = useSelector((state) => state?.spots[id]?.id);
  // const reviewsArr = useSelector((state) => state.ratings);
  async function handleSubmit() {
    let result = window.confirm("Click to confirm your booking!");
    const payload = {
      userId: user.id,
      spotId: spotId,
      bookingStart: value[0],
      bookingEnd: value[1],
    };
    console.log("payload", payload);

    if (result) {
      await dispatch(createNewBooking(payload));

      return <Redirect to={`/spots/${id}`} />;
    }
  }

  function closeMenu() {
    return setShowCalendar(false);
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
          <div>
            <div className="spot-data">
              <h2>{name}</h2>
              <h3>{streetAddress}</h3>
              <h3>
                {city}, {state} {zipCode}
              </h3>
              <h4>${price} per night!</h4>
              <h5>{description}</h5>
            </div>
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
              {showCalendar && <Calendar onChange={onChange} value={value} />}
              <div className="book-now-button-close" onClick={closeMenu}>
                {showCalendar ? `Close Calendar` : ""}
              </div>
            </div>
          </div>
          <div>
            <LeaveReview />
          </div>
        </div>
        {/* <h6>Average Rating: {reviewsArr?.map((review) => review.rating)}</h6> */}
        {/* <h6>User Comments: {reviewsArr?.map((review) => review.comment)}</h6> */}
        {/* <LeaveReview />
        </div> */}
      </div>
    </>
  );
}

export default SpotsPage;
