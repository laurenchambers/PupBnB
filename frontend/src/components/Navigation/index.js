// frontend/src/components/Navigation/index.js
import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import SignUpFormModal from "../SignupFormModal";
import SpotsPage from "../EachSpotPage";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <div className="navbar__pupbnb">
        <ul>
          <div>
            <LoginFormModal />
          </div>
          <div>
            <SignUpFormModal />
          </div>
          <div>
            <SpotsPage />
          </div>
        </ul>
        {/* <NavLink to="/signup">Sign Up</NavLink> */}
      </div>
    );
  }

  return (
    <>
      <nav className="navbar__pupbnb">
        <NavLink exact to="/">
          <div
            style={{
              fontWeight: "bold",
              fontFamily: '"RocknRoll One", sans-serif',
              listStyle: "none",
              textDecoration: "none",
              color: "#da667b",
              fontSize: "60px",
              display: "flex",
              marginLeft: "8%",
            }}
          >
            PupBnB
          </div>
        </NavLink>
        {isLoaded && sessionLinks}
      </nav>
    </>
  );
}

export default Navigation;
