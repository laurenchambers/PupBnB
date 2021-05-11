import { csrfFetch } from "./csrf";

const DISPLAY_SIX_SPOTS = "featured/DISPLAY_SIX_SPOTS";

export const showSix = (featured) => ({
  type: DISPLAY_SIX_SPOTS,
  featured,
});

export const showSixSpots = () => async (dispatch) => {
  const res = await csrfFetch(`/api/featured/`);
  if (res.ok) {
    const featured = await res.json();
    // console.log("MMULTIPLE", data);
    dispatch(showSix(featured.spots));
    return res;
  }
};

//reducer
const initialState = {};
const featuredReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case DISPLAY_SIX_SPOTS:
      newState = {};
      action.featured.forEach((spot) => {
        newState[spot.id] = spot;
      });
      return newState;
    default:
      return state;
  }
};

export default featuredReducer;
