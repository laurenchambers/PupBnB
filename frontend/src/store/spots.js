import { csrfFetch } from "./csrf";

const SHOW_SPOT_PAGE = "spots/SET_SPOTS_PAGE";
const DISPLAY_MULTIPLE_SPOTS = "spots/DISPLAY_SPOTS";
const CREATE_SPOT = "spots/CREATE_SPOT";
const LOAD = "spots/LOAD";
const DELETE_SPOT = "spots/DELETE_SPOT";

const load = (spots) => ({
  type: LOAD,
  spots,
});

const deleteSpot = (spot) => {
  return {
    type: DELETE_SPOT,
    spot,
  };
};

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

// const newRating = (payload) => {
//   return {
//     type: NEW_RATING,
//     payload,
//   };
// };

export const showIndividualSpot = (spotId) => async (dispatch) => {
  const numId = Number(spotId);
  console.log("ID", numId);
  const res = await csrfFetch(`/api/spots/${numId}/`);
  console.log("RES", res);
  const data = await res.json();
  console.log("data!!", data);
  dispatch(setSpotsPage(data.spot));
  return res;
};

export const deleteASpot = (spotId) => async (dispatch) => {
  const numId = Number(spotId);
  const res = await csrfFetch(`/api/spots/${numId}`, {
    method: "POST",
    body: JSON.stringify({ numId }),
  });
  const data = await res.json();

  dispatch(deleteSpot(data));
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

export const getReviews = (id) => async (dispatch) => {
  const res = await csrfFetch(`/api/spots/${id}/reviews`);
  const reviews = await res.json();

  if (res.ok) {
    dispatch(load(reviews));
  }
};
// export const createRating = (review) => async (dispatch) => {
//   const { rating, comment, spotId, userId } = review;
//   await csrfFetch(`/api/spots/add-rating/`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ userId, spotId, rating, comment }),
//   });
// };

//reducer
const initialState = {};
const spotsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SHOW_SPOT_PAGE:
      newState = {};
      action.payload.forEach((spot) => {
        newState[spot.id] = spot;
      });
      return newState;
    case DISPLAY_MULTIPLE_SPOTS:
      newState = {};
      action.payload.forEach((spot) => {
        newState[spot.id] = spot;
      });
      return newState;
    case CREATE_SPOT: {
      newState = Object.assign({}, state, {
        [action.payload.id]: action.payload,
      });

      return newState;
    }
    case LOAD:
      return { ...state, ...action.spots };
    case DELETE_SPOT:
      return state;
    // case NEW_RATING:
    //   newState = {};
    //   newState.rating = { ...action.payload };
    //   // newState.comment = { ...action.payload.comment };
    //   return newState;

    default:
      return state;
  }
};

export default spotsReducer;
