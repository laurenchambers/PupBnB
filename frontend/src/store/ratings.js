import { csrfFetch } from "./csrf";

const GET_RATINGS = "/ratings/getRatings";
const CREATE_RATING = "ratings/CREATE_RATING";

const getRatings = (payload) => {
  return {
    type: GET_RATINGS,
    payload,
  };
};

const createNewRating = (review) => ({
  type: CREATE_RATING,
  payload: review,
});

export const getSpotsRatings = (spotId) => async (dispatch) => {
  const res = await csrfFetch(`/api/ratings/${spotId}`);

  const data = await res.json();
  dispatch(getRatings(data.spotRatings));
  return data;
};

export const createRating = (review) => async (dispatch) => {
  const { userId, rating, comment, spotId } = review;
  const res = await csrfFetch(`/api/ratings/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId, spotId, rating, comment }),
  });
  const data = await res.json();
  dispatch(createNewRating(data.review));
  return data;
};

const ratingsReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case CREATE_RATING: {
      newState = Object.assign({}, state, {
        [action.payload.id]: action.payload,
      });

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
