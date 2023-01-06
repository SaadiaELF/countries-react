import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Country from "./pages/Country";
import Header from "./components/Header";
import "./App.css";

function App() {
  const [countryName, setCountryName] = useState("");

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              handleClick={(e) => {
                setCountryName(e.currentTarget.id.toLowerCase());
              }}
            />
          }
        />
        <Route
          path={"/:" + countryName}
          element={
            <Country
              countryName={countryName}
              handleClick={(e) => {
                setCountryName(e.currentTarget.id.toLowerCase());
              }}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
