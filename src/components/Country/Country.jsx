import React from "react";
import "./Country.css";

export const Country = ({ country, isDarkTheme }) => {
  return (
    <div
      className={`${
        isDarkTheme ? "country-wrapper-dark" : "country-wrapper-light"
      }`}
    >
      <img src={country.flags.png} alt="" />
      <div className="country-div">
        <h3>{country.name}</h3>
        <p>Population: {country.population}</p>
        <p>Region: {country.region}</p>
      </div>
    </div>
  );
};
