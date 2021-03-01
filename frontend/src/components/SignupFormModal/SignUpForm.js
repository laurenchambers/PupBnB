// frontend/src/components/SignupFormPage/index.js
import React, { useState } from "react";
// import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import "./SignUpForm.css";

function SignUpFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isHost, setHost] = useState("true");

  if (sessionUser) return <Redirect to="/" />;

  // const options = [
  //   { value: true, label: "yes" },
  //   { value: false, label: "no" },
  // ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(
        sessionActions.signup({ email, username, password, isHost })
      ).catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
    }

    return setErrors([
      "Confirm Password field must be the same as the Password field",
    ]);
  };

  console.log(isHost === true);

  return (
    <div className="entire-form">
      <form className="login__form" onSubmit={handleSubmit}>
        <div className="form__area">
          <ul className="errors__list">
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
          <div className="form__input-area">
            <label>
              Email
              <input
                className="form__input-for-text"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
          </div>
          <div className="form__input-area">
            <label>
              Username
              <input
                className="form__input-for-text"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </label>
          </div>
          <div className="form__input-area">
            <label>
              Password
              <input
                className="form__input-for-text"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
          </div>
          <div className="form__input-area">
            <label>
              Confirm Password
              <input
                className="form__input-for-text"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </label>
          </div>
          <div className="form__dropdown-button">
            <label>
              Are You a Host?
              <select
                className="form__dropdown-button"
                value={isHost}
                // options={options}
                onChange={(e) => setHost(e.target.value)}
                required
              >
                <option value={"true"}>Yes</option>
                <option value={"false"}>No</option>
              </select>
            </label>
          </div>
          <div className="login__form-button">
            <button className="login__form-submit-button" type="submit">
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignUpFormPage;
