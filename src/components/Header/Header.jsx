import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { faSun } from "@fortawesome/free-regular-svg-icons";

export const Header = ({ isDarkTheme, setIsDarkTheme }) => {
  return (
    <header
      className={` ${isDarkTheme ? "dark-theme-header" : "light-theme-header"}`}
    >
      <Link to={"/"} className="link-style">
        <h2>Where is the world?</h2>
      </Link>
      <div
        className="theme-div d-flex"
        onClick={() => {
          setIsDarkTheme(!isDarkTheme);
        }}
      >
        <FontAwesomeIcon icon={isDarkTheme ? faMoon : faSun} />
        <p>{isDarkTheme ? "Dark theme" : "Light theme"}</p>
      </div>
    </header>
  );
};
