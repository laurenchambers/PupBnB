import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { showIndividualSpot } from "../../store/spots";
import { postNewRating } from "../../store/ratings";
import "./LeaveAReview.css";

const LeaveReview = ({ sessionUser }) => {
  const { userId, spotId } = useParams();
  const dispatch = useDispatch();
  //   const spot = useSelector((state) => state.spots[id]);

  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUserRating = { rating, comment };

    dispatch(postNewRating(userId, spotId, newUserRating));
  };

  useEffect(() => {
    dispatch(showIndividualSpot(spotId));
  }, [dispatch, spotId]);

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
        <button className="review-button" type="submit">
          Submit Your Rating and Comment
        </button>
      </form>
    </div>
  );
};

export default LeaveReview;
