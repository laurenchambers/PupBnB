import SpotsPage from "../SpotsPage";
import "./LandingPage.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { showSixSpots } from "../../store/spots";
import dogImg from "../site-images/dog-water.jpg";

function LandingPage() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const spotsArray = useSelector((state) => Object.values(state.spots));
  console.log("aray", spotsArray);

  useEffect(() => {
    dispatch(showSixSpots());
  }, [dispatch]);

  if (!user) {
    return (
      <div className="landing-page">
        <img className="landing-page-image" src={dogImg} alt=""></img>
        <div className="landing-page-spots-container">
          <div className="landing-page-spots-title">Explore Nearby</div>
          <div className="landing-page-spots-bottom-container">
            {spotsArray?.map((spot) => (
              <div className='landing-page-spots-each'>
                <img className="landing-spot-image" src={spot.img} alt="" />
                <div className='landgin-spots-name'>{spot.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <div className="home-page">
          <div className="home-page-container">
            <SpotsPage />
          </div>
        </div>
      </>
    );
  }
}

export default LandingPage;
