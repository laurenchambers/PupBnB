import { csrfFetch } from "./csrf";

const SHOW_SPOT_PAGE = "spots/SET_SPOTS_PAGE";
const DISPLAY_MULTIPLE_SPOTS = "spots/DISPLAY_SPOTS";
const CREATE_SPOT = "spots/CREATE_SPOT";

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

export const showIndividualSpot = (id) => async (dispatch) => {
  const res = await csrfFetch(`/api/spots/${id}`);
  const data = await res.json();
  console.log(data.spot);
  dispatch(setSpotsPage(data.spot));
  return res;
};

export const showMultipleSpots = () => async (dispatch) => {
  const res = await csrfFetch(`/api/spots`);
  if (res.ok) {
    const data = await res.json();
    // console.log(data);
    dispatch(displaySpots(data.spots));
    return res;
  }
};

export const createNewSpot = (spot) => async (dispatch) => {
  const res = await csrfFetch("/api/spots", {
    method: "POST",
    body: JSON.stringify(
      spot
      //   {
      // //   name,
      // //   description,
      // //   streetAddress,
      // //   city,
      // //   state,
      // //   zipCode,
      // //   price,
      // //   img,
      // // }
    ),
  });
  const data = await res.json();
  dispatch(createSpot(data.spot));
  return data;
};

//reducer
const initialState = {};
const spotsReducer = (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case SHOW_SPOT_PAGE:
      console.log(action.payload);
      newState[action.payload.id] = action.payload;
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
    default:
      return state;
  }
};

export default spotsReducer;
