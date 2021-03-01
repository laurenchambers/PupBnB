import { csrfFetch } from "./csrf";

const GET_RATINGS = "/ratings/getRatings";

const getRatings = (payload) => {
  return {
    type: GET_RATINGS,
    payload,
  };
};

export const getSpotsRatings = (spotId) => async (dispatch) => {
  const res = await csrfFetch(`/api/ratings/${spotId}`);

  const data = await res.json();
  dispatch(getRatings(data.spotRatings));
  return data;
};

const ratingsReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case GET_RATINGS:
      newState = [...action.payload];
      return newState;
    default:
      return state;
  }
};

export default ratingsReducer;
