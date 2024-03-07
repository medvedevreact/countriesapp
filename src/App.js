import "./App.css";
import { Route, Routes } from "react-router-dom";
import { CountryPage } from "./pages/CountryPage/CountryPage";
import { HomePage } from "./pages/HomePage/HomePage";
import { useState } from "react";
import { Header } from "./components/Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIconName } from "@fortawesome/free-regular-svg-icons"; // Replace "faIconName" with the name of the icon you want to use

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <div className="App">
      <div
        className={`${
          isDarkTheme ? "some-wrapper-dark" : "some-wrapper-light"
        }`}
      >
        <Header isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                isDarkTheme={isDarkTheme}
                setIsDarkTheme={setIsDarkTheme}
              />
            }
          />
          <Route
            path="/country/:name"
            element={<CountryPage isDarkTheme={isDarkTheme} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
