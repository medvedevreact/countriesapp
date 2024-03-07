import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./CountryPage.css";
import { FaArrowLeft } from "react-icons/fa";

export const CountryPage = ({ isDarkTheme }) => {
  const { name } = useParams();
  const [country, setCountry] = useState(null);
  const [neighbors, setNeighbors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://restcountries.com/v2/name/${name}`).then((resp) => {
      setCountry(resp.data[0]);

      if (resp.data[0]?.borders) {
        const neighborCodes = resp.data[0].borders.join(",");
        axios
          .get(`https://restcountries.com/v2/alpha?codes=${neighborCodes}`)
          .then((response) => {
            setNeighbors(response.data);
          })
          .catch((error) => {
            console.error("Error fetching neighbors:", error);
          });
      }
    });
  }, [name]);
  console.log(neighbors);
  const handleGoBack = () => {
    navigate(-1);
  };
  if (!country) {
    return null;
  }
  return (
    <div
      className={`${isDarkTheme ? "new-wrapper-dark" : "new-wrapper-light"}`}
    >
      <div className="some-container">
        <div className="window-div">
          <div
            className={`${
              isDarkTheme
                ? "back-btn-container-dark"
                : "back-btn-container-light"
            }`}
          >
            <div className="back-icon">
              <FaArrowLeft />
            </div>
            <button
              className={`${isDarkTheme ? "back-btn-dark" : "back-btn-light"}`}
              onClick={handleGoBack}
            >
              Назад
            </button>
          </div>

          <div className={`${isDarkTheme ? "separat-dark" : "separat-light"}`}>
            <div>
              <img src={country.flags?.png} alt="" />{" "}
            </div>
            <div>
              <h1>{country.name}</h1>
              <p>
                <b>Регион:</b> {country.region}
              </p>
              <p>
                <b>Население:</b> {country.population}
              </p>
              <p>
                <b>Столица:</b> {country.capital}
              </p>
              <p>
                <b>Borders:</b>
              </p>
              <div>
                {neighbors.map((border) => (
                  <p
                    className={`${
                      isDarkTheme ? "border-dark" : "border-light"
                    }`}
                  >
                    <Link to={`/country/${border.name}`} className="link-style">
                      <p>{border.name}</p>
                    </Link>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
