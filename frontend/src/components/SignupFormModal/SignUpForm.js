// frontend/src/components/SignupFormPage/index.js
import React, { useState } from "react";
import Select from "react-select";
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
    <form onSubmit={handleSubmit}>
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      <label>
        Email
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label>
        Username
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </label>
      <label>
        Password
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <label>
        Confirm Password
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </label>
      <label>
        Are You a Host?
        <select
          value={isHost}
          // options={options}
          onChange={(e) => setHost(e.target.value)}
          required
        >
          <option value={"true"}>Yes</option>
          <option value={"false"}>No</option>
        </select>
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default SignUpFormPage;
