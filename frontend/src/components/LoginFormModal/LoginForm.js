// frontend/src/components/LoginFormModal/LoginForm.js
import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import "./LoginForm.css";
import DemoLogin from "./DemoLogin";

function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

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
              Username or Email
              <input
                className="form__input-for-text"
                type="text"
                value={credential}
                onChange={(e) => setCredential(e.target.value)}
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
          <div className="login__form-button">
            <button className="login__form-submit-button" type="submit">
              Log In
            </button>
            <div className="space-between">
              <DemoLogin />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
