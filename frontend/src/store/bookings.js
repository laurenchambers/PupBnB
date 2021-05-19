import { csrfFetch } from "./csrf";

export const NEW_BOOKING = "bookings/NEW_BOOKING";

const createBooking = (booking) => {
  return {
    type: NEW_BOOKING,
    payload: booking,
  };
};

export const createNewBooking = (payload) => async (dispatch) => {
  const response = await csrfFetch(`/api/bookings/`, {
    method: "POST",
    body: JSON.stringify(payload),
  });
  console.log("RESPONSE", response);
  if (response.ok) {
    const data = await response.json();
    dispatch(createBooking(data.booking));
    return data;
  }
};

const initialState = {};

const bookingsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case NEW_BOOKING: {
      newState = Object.assign({}, state, {
        [action.payload.id]: action.payload,
      });

      return newState;
    }

    default:
      return state;
  }
};

export default bookingsReducer;
