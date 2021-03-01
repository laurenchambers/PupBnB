// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormModal";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import EachSpotPage from "./components/EachSpotPage";
import SpotsPage from "./components/SpotsPage";
import SearchResults from "./components/Search";
import LandingPage from "./components/LandingPage";
import LeaveReview from "./components/LeaveAReview";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/spots/:id">
            <EachSpotPage />
          </Route>
          <Route path="/spots">
            <SpotsPage />
          </Route>
          <Route path="/search">
            <SearchResults />
          </Route>
          <Route path="ratings/:userId/:spotId">
            <LeaveReview />
          </Route>
          <Route>
            <h1>Sorry, this page is currently under construction!</h1>
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
