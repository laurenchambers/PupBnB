import { csrfFetch } from "./csrf";

const SET_SPOTS_PAGE = "spots/SET_SPOTS_PAGE";
const DISPLAY_SPOTS = "spots/DISPLAY_SPOTS";

export const setSpotsPage = (payload) => ({
  type: SET_SPOTS_PAGE,
  payload,
});

export const displaySpots = (payload) => ({
  type: DISPLAY_SPOTS,
  payload,
});

export const getSpotsPage = (id) => async (dispatch) => {
  const res = await csrfFetch(`/api/spots/${id}`);
  if (res.ok) {
    dispatch(getSpotsPage(res.data.spots));
    return res;
  }
};

export const retreiveSpots = () => async (dispatch) => {
  const res = await fetch(`/api/spots`);
  if (res.ok) {
    dispatch(displaySpots(res.data.spots));
    return res;
  }
};

//reducer
const initialState = {};
const spotsReducer = (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case SET_SPOTS_PAGE:
      newState[action.payload.id] = action.payload;
      return newState;
    case DISPLAY_SPOTS:
      for (let spot of action.payload) {
        newState[spot.id] = spot;
      }
      return newState;
    default:
      return state;
  }
};

export default spotsReducer;
