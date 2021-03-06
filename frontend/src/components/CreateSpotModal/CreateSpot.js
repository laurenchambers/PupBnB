// frontend/src/components/LoginFormModal/LoginForm.js
import React, { useState } from "react";
import { createNewSpot } from "../../store/spots";
import { useDispatch } from "react-redux";
import "./CreateSpot.css";

function NewSpotForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState(null);
  const [price, setPrice] = useState(0);
  const [img, setImg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const spot = {
      name,
      description,
      streetAddress,
      city,
      state,
      zipCode,
      price,
      img,
      hostId: 1,
    };
    dispatch(createNewSpot(spot));
    setName("");
    setDescription("");
    setStreetAddress("");
    setCity("");
    setState("");
    setZipCode("");
    setPrice("");
    setImg("");
  };

  return (
    <div className="entire-form">
      <form className="login__form" onSubmit={handleSubmit}>
        <div className="form__area">
          <div className="form__input-area">
            <label>
              Name
              <input
                className="form__input-for-address"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>
          </div>
          <div className="form__input-area">
            <label>
              Description
              <input
                className="form__input-for-description"
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </label>
          </div>
          <div className="form__input-area">
            <label>
              Street Address
              <input
                className="form__input-for-address"
                type="text"
                value={streetAddress}
                onChange={(e) => setStreetAddress(e.target.value)}
                required
              />
            </label>
          </div>
          <div className="form__input-area">
            <label>
              City
              <input
                className="form__input-for-address"
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </label>
          </div>
          <div className="form__input-area">
            <label>
              State
              <input
                className="form__input-for-text"
                type="text"
                value={state}
                onChange={(e) => setState(e.target.value)}
                required
              />
            </label>
          </div>
          <div className="form__input-area">
            <label>
              Zip Code
              <input
                className="form__input-for-text"
                type="integer"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                required
              />
            </label>
          </div>
          <div className="form__input-area">
            <label>
              Price Per Night
              <input
                className="form__input-for-text"
                type="integer"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </label>
          </div>
          <div className="form__input-area">
            <label>
              Image URL
              <input
                className="form__input-for-text"
                type="text"
                value={img}
                onChange={(e) => setImg(e.target.value)}
                required
              />
            </label>
          </div>
          <div className="new__form-button">
            <button className="new__form-submit-button" type="submit">
              Submit Your Spot!
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default NewSpotForm;
