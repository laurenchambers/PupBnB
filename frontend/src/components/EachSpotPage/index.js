import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { showIndividualSpot } from "../../store/spots";
import "./EachSpotPage.css";
import { getSpotsRatings } from "../../store/ratings";
import LeaveReview from "../LeaveAReview";
import React from "react";
import { GoogleMap, withGoogleMap, Marker } from "react-google-maps";
// import { GoogleMap, withGoogleMap, Marker } from "@react-google-maps/api";
// import "./Map.css";

const Map = withGoogleMap(() => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const spot = useSelector((state) => state.spots[id]);
  useEffect(() => {
    dispatch(getSpotsRatings(id));
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
  const spot = useSelector((state) => state.spots[id]);
  const defaultMarker = { lat: spot?.lat, lng: spot?.lng };
  console.log("market", defaultMarker);
  const spotId = useSelector((state) => state?.spots[0]?.id);
  // const reviewsArr = useSelector((state) => state.ratings);

  useEffect(() => {
    dispatch(getSpotsRatings(spotId));
    dispatch(showIndividualSpot(id));
  }, [dispatch]);

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
        <img className="spot-page-image" src={img} alt="Spot" />
        <div>
          <Map
            user={spot}
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: "100%" }} />}
            mapElement={<div style={{ height: "100%" }} />}
          >
            {<Marker key={spot.id} postition={defaultMarker} />}
          </Map>
        </div>
        <div className="spot-data">
          <h2>{name}</h2>
          <h3>{streetAddress}</h3>
          <h3>
            {city}, {state} {zipCode}
          </h3>
          <h4>${price} per night!</h4>
          <h5>{description}</h5>
          <div>
            <button className="book-now-button">Book Now!</button>
          </div>
          {/* <h6>Average Rating: {reviewsArr?.map((review) => review.rating)}</h6> */}
          {/* <h6>User Comments: {reviewsArr?.map((review) => review.comment)}</h6> */}
          <LeaveReview />
        </div>
      </div>
    </>
  );
}

export default SpotsPage;
