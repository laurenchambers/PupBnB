// frontend/src/store/index.js
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import ratingsReducer from "./ratings";
import sessionReducer from "./session";
import spotsReducer from "./spots";
import featuredReducer from "./featured";
import bookingsReducer from "./bookings";

const rootReducer = combineReducers({
  session: sessionReducer,
  spots: spotsReducer,
  ratings: ratingsReducer,
  featured: featuredReducer,
  bookings: bookingsReducer,
});

let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
