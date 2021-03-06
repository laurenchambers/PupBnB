import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, Link } from "react-router-dom";
import { showMultipleSpots } from "../../store/spots";
import { useSearch } from "../context/Search";
import "./Search.css";

const SearchResults = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const query = location.search.split("=")[1];

  const spots = useSelector((state) => state.spots);
  const findMatch = Object.values(spots).filter((spot) =>
    spot.name.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    dispatch(showMultipleSpots());
  }, [dispatch]);

  const { setInput } = useSearch();

  useEffect(() => {
    setInput("");
  }, [setInput]);

  return (
    <div className="search-new-container">
      <p className="search-results">
        Spots Matching Your Search are Listed Below!
      </p>
      <div className="search-each-section">
        {findMatch.map((spot) => {
          const {
            id,
            name,
            img,
            streetAddress,
            city,
            state,
            zipCode,
            price,
          } = spot;
          return (
            <div className="card-container">
              <Link to={`/spots/${id}`}>
                <div className="card" style={{ marginBottom: "20px" }}>
                  <img src={img} alt="" />
                  <div className="card__info">
                    <h2>{name}</h2>
                    <h3>{streetAddress}</h3>
                    <h3>
                      {city}, {state} {zipCode}
                    </h3>
                    <h4>${price} / Night</h4>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchResults;
