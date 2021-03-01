import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { showIndividualSpot } from "../../store/spots";
import "./EachSpotPage.css";

function SpotsPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const spot = useSelector((state) => state.spots[id]);

  useEffect(() => {
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
        </div>
      </div>
    </>
  );
}

export default SpotsPage;
