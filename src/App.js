import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Country from "./pages/Country";
import Header from "./components/Header";
import "./App.css";

function App() {
  const [countryName, setCountryName] = useState("peru");
  console.log(countryName);
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
          path="/country"
          element={<Country countryName={countryName} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
