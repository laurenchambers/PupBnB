import { csrfFetch } from "./csrf";

const GET_RATINGS = "/ratings/getRatings";
const POST_RATING = "ratings/postRating";

const getRatings = (payload) => {
  return {
    type: GET_RATINGS,
    payload,
  };
};

const postRating = (rating, comment) => {
  return {
    type: POST_RATING,
    payload: { rating, comment },
  };
};

export const getSpotsRatings = (spotId) => async (dispatch) => {
  const res = await csrfFetch(`/api/ratings/${spotId}`);

  const data = await res.json();
  dispatch(getRatings(data.spotRatings));
  return data;
};

export const postNewRating = (userId, spotId, newUserRating) => async (
  dispatch
) => {
  const { rating, comment } = newUserRating;
  const res = await csrfFetch(`/api/ratings/${userId}/${spotId}`, {
    method: "POST",
    body: JSON.stringify({ rating, comment }),
  });
  const data = await res.json();
  dispatch(postRating(data.rating, data.comment));
};

const ratingsReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case POST_RATING: {
      newState.rating = { ...action.payload.rating };
      newState.comment = { ...action.payload.comment };
      return newState;
    }
    case GET_RATINGS:
      //   for (let rating of action.payload) {
      //     newState[rating[0].id] = rating.id;
      //   }
      newState = [...action.payload];
      return newState;
    default:
      return state;
  }
};

export default ratingsReducer;
