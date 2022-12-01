import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Container from "./components/Container";
import Card from "./components/Card";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);

  console.log(countries);
  return (
    <div className="App">
      <Header />
      <Container>
        {countries.map((country, index) => {
          return (
            <Card
              key={index}
              imageSrc={country.flags.png}
              imageAlt={country.name.common}
              title={country.name.common}
              population={country.population}
              region={country.region}
              capital={country.capital}
            />
          );
        })}
      </Container>
    </div>
  );
}

export default App;
