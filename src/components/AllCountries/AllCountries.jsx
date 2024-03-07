import React from "react";

import "./AllCountries.css";
import { Link } from "react-router-dom";
import { Country } from "../Country/Country";

export const AllCountries = ({ countries, isDarkTheme, setIsDarkTheme }) => {
  return (
    <div className="all-countries">
      {countries.map((country) => (
        <Link to={`/country/${country.name}`} className="link-style">
          <Country
            country={country}
            isDarkTheme={isDarkTheme}
            setIsDarkTheme={setIsDarkTheme}
          />
        </Link>
      ))}
    </div>
  );
};
