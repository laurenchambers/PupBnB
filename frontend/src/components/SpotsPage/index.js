import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { showMultipleSpots } from "../../store/spots";
import "./SpotsPage.css";

function SpotsLandingPage() {
  const dispatch = useDispatch();
  const spotsDisplayed = useSelector((state) => Object.values(state.spots));

  useEffect(() => {
    dispatch(showMultipleSpots());
  }, [dispatch]);

  if (!spotsDisplayed) return null;

  return (
    <>
      {spotsDisplayed.map((spotDisplayed) => {
        const {
          id,
          name,
          description,
          streetAddress,
          city,
          state,
          zipCode,
          price,
          img,
        } = spotDisplayed;
        return (
          <div className="spot-container">
            <Link to={`/spots/${id}`}>
              {/* <div className="individual-spot-image"> */}
              {/* </div> */}
              <div className="individual-spot">
                <img src={img} alt="" />
                <div className="individual-spot-info">
                  <h2>{name}</h2>
                  <h3>{streetAddress}</h3>
                  <h3>
                    {city}, {state} {zipCode}
                  </h3>
                  <h3>${price} per night!</h3>
                  <h4>{description}</h4>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </>
  );
}

export default SpotsLandingPage;
