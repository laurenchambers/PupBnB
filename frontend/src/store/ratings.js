import { csrfFetch } from "./csrf";

const GET_RATINGS = "/ratings/getRatings";
// const POST_RATING = "ratings/postRating";

const getRatings = (payload) => {
  return {
    type: GET_RATINGS,
    payload,
  };
};

// const postRating = (payload) => {
//   return {
//     type: POST_RATING,
//     payload,
//   };
// };

export const getSpotsRatings = (spotId) => async (dispatch) => {
  const res = await csrfFetch(`/api/ratings/${spotId}`);

  const data = await res.json();
  dispatch(getRatings(data.spotRatings));
  return data;
};

export const createRating = (review) => async (dispatch) => {
  const { rating, comment, spotId, userId } = review;
  await csrfFetch(`/api/ratings/add-rating/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId, spotId, rating, comment }),
  });
};

const ratingsReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    // case POST_RATING: {
    //   newState.rating = { ...action.payload };
    //   // newState.comment = { ...action.payload.comment };
    //   return newState;
    // }
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
