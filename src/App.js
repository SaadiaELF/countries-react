import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Container from "./components/Container";
import Card from "./components/Card";
import Search from "./components/Search";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);

  let filteredCountries = countries.filter((country) => {
    return country.name.common.toLowerCase().includes(value.toLowerCase());
  });

  function search(e) {
    setValue(e.target.value);
  }

  return (
    <div className="App">
      <Header />
      <Search onchange={search} />
      <Container>
        {filteredCountries.map((country, index) => {
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
