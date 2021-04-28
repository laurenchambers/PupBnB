import { csrfFetch } from "./csrf";

const SHOW_SPOT_PAGE = "spots/SET_SPOTS_PAGE";
const DISPLAY_MULTIPLE_SPOTS = "spots/DISPLAY_SPOTS";
const CREATE_SPOT = "spots/CREATE_SPOT";
const NEW_RATING = "spots/newRating";

export const setSpotsPage = (payload) => ({
  type: SHOW_SPOT_PAGE,
  payload,
});

export const displaySpots = (spots) => ({
  type: DISPLAY_MULTIPLE_SPOTS,
  payload: spots,
});

export const createSpot = (spot) => ({
  type: CREATE_SPOT,
  payload: spot,
});

const newRating = (payload) => {
  return {
    type: NEW_RATING,
    payload,
  };
};

export const showIndividualSpot = (spotId) => async (dispatch) => {
  const res = await csrfFetch(`/api/spots/${spotId}`);
  const data = await res.json();
  console.log("data!!!", data);
  console.log(data.spot);
  dispatch(setSpotsPage(data.spot));
  return res;
};

export const showMultipleSpots = () => async (dispatch) => {
  const res = await csrfFetch(`/api/spots`);
  if (res.ok) {
    const data = await res.json();
    // console.log("MMULTIPLE", data);
    dispatch(displaySpots(data.spots));
    return res;
  }
};

export const createNewSpot = (spot) => async (dispatch) => {
  const {
    hostId,
    name,
    description,
    streetAddress,
    city,
    state,
    zipCode,
    price,
    img,
  } = spot;
  const res = await csrfFetch("/api/spots", {
    method: "POST",
    body: JSON.stringify(
      // spot
      {
        hostId,
        name,
        description,
        streetAddress,
        city,
        state,
        zipCode,
        price,
        img,
      }
    ),
  });
  const data = await res.json();
  dispatch(createSpot(data.spot));
  return data;
};

export const newNewRating = (userId, spotId, rating, comment) => async (
  dispatch
) => {
  // const { rating, comment } = newUserRating;
  const res = await csrfFetch(`/api/spots/${spotId}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId, spotId, rating, comment }),
  });
  const data = await res.json();
  dispatch(newRating(data));
};

//reducer
const initialState = {};
const spotsReducer = (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case SHOW_SPOT_PAGE:
      console.log(action.payload);
      newState[action.payload.spot] = action.payload;
      return newState;
    case DISPLAY_MULTIPLE_SPOTS:
      //   console.log(action.payload);
      for (let spot of action.payload) {
        newState[spot.id] = spot;
      }
      return newState;
    case CREATE_SPOT:
      newState[action.payload.id] = action.payload;
      return newState;
    case NEW_RATING: {
      newState.rating = { ...action.payload };
      // newState.comment = { ...action.payload.comment };
      return newState;
    }
    default:
      return state;
  }
};

export default spotsReducer;
