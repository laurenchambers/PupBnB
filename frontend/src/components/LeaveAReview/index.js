import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
import { showIndividualSpot } from "../../store/spots";
import { createRating } from "../../store/ratings";
import "./LeaveAReview.css";

const LeaveReview = ({ sessionUser }) => {
  const dispatch = useDispatch();
  // const { spotId } = useParams();
  // console.log("spotid from params", spotId);
  const user = useSelector((state) => state.session.user);
  const spot = useSelector((state) => state.spots[0]);

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const submission = {
      userId: user?.id,
      spotId: spot?.id,
      rating,
      comment,
    };
    console.log("submission", submission);
    dispatch(createRating(submission));
    window.location.reload();
    setRating(0);
    setComment("");
    // return history.push("/home")
  };

  useEffect(() => {
    dispatch(showIndividualSpot(spot));
  }, [dispatch, spot]);

  return (
    <div className="review-form-container">
      <h1 className="review-form-title">Please Share Your Feedback Below!</h1>
      <form className="review-form" onSubmit={handleSubmit}>
        <div className="review-form-input">
          <label>
            Rate This Spot (1-5)
            <input
              className="review-form-number"
              type="integer"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
          </label>
        </div>
        <div className="review-form-input">
          <label>
            Additional Comments:
            <input
              className="review-form-text"
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </label>
        </div>
        <button className="review-button" tonClick={handleSubmit}>
          Submit Your Rating and Comment
        </button>
      </form>
    </div>
  );
};

export default LeaveReview;
