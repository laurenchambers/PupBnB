import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { showIndividualSpot } from "../../store/spots";
import "./EachSpotPage.css";
import { getSpotsRatings } from "../../store/ratings";
import LeaveReview from "../LeaveAReview";

function SpotsPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const spot = useSelector((state) => state.spots[id]);
  // const ratings = useSelector((state) => state.spots;

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
  } = spot;

  // const { rating, comment } = ratings;

  return (
    <>
      <div className="individual-spot-container">
        <img src={img} alt="Spot" />
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
          {/* <h6>Average Rating: {rating}</h6> */}
          {/* <h6>User Comments: {comment}</h6> */}
          <LeaveReview />
        </div>
      </div>
    </>
  );
}

export default SpotsPage;
