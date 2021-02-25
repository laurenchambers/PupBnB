import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { showIndividualSpot } from "../../store/spots";
import "./SpotsPage.css";

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
      <div className="individual-spot">
        <img src={img} alt="Spot" />
        <div className="spot-data">
          <h2>{name}</h2>
          <h3>{streetAddress}</h3>
          <h4>{(city, state, zipCode)}</h4>
          <h4>{price} per night!</h4>
          <h4>{description}</h4>
          <div className="book-button">
            <button>Book Now!</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SpotsPage;