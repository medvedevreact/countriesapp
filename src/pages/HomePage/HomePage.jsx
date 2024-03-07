import React, { useEffect, useState } from "react";
import { AllCountries } from "../../components/AllCountries/AllCountries";
import axios from "axios";
import { FaCaretDown } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import "./HomePage.css";

export const HomePage = ({ isDarkTheme, setIsDarkTheme }) => {
  const [countries, setCountries] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All");

  const regions = [...new Set(countries.map((country) => country.region))];

  useEffect(() => {
    axios
      .get(
        "https://restcountries.com/v2/all?fields=name,capital,flags,population,region,alpha3Code"
      )
      .then((response) => {
        setCountries(response.data);
      });
  }, []);

  console.log(countries);

  const changeSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  const filterByRegion = (region, filteredCountriesByName) => {
    if (region === "All") {
      return filteredCountriesByName;
    } else {
      return filteredCountriesByName.filter(
        (country) => country.region === region
      );
    }
  };

  const filteredCountriesByName = countries.filter((country) =>
    country.name.toLowerCase().includes(searchInput.toLowerCase())
  );
  const filteredCountries = filterByRegion(
    selectedRegion,
    filteredCountriesByName
  );
  return (
    <div className="some-container">
      <div className="for-separation">
        <div
          className={`${
            isDarkTheme ? "input-container-dark" : "input-container-light"
          }`}
        >
          <input
            type="text"
            placeholder="Search for a country..."
            value={searchInput}
            onChange={(e) => {
              changeSearchInput(e);
            }}
          />
          <FaSearch className="search-icon" />
        </div>
        <div
          className={`${
            isDarkTheme ? "select-container-dark" : "select-container-light"
          }`}
        >
          <select
            className={`${isDarkTheme ? "select-dark" : "select-light"}`}
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
          >
            <option value="All">All Regions</option>
            {regions.map((region, index) => (
              <option
                className={`${isDarkTheme ? "option-dark" : "option-light"}`}
                key={index}
                value={region}
              >
                {region}
              </option>
            ))}
          </select>
          <FaCaretDown
            className={`${
              isDarkTheme ? "caret-icon-dark" : "caret-icon-light"
            }`}
          />
        </div>
      </div>
      <AllCountries
        countries={filteredCountries}
        isDarkTheme={isDarkTheme}
        setIsDarkTheme={setIsDarkTheme}
      />
    </div>
  );
};
