import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Container from "./components/Container";
import Card from "./components/Card";
import Search from "./components/Search";
import Select from "./components/Select";
import "./App.css";

function App() {
  const [allCountries, setAllCountries] = useState([]);
  const [countries, setCountries] = useState([]);
  const [regionCountries, setRegionCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
        setAllCountries(data);
        setRegionCountries(data);
      });
  }, []);

  function search(e) {
    if (e.target.value) {
      const filtered = regionCountries.filter((country) => {
        return country.name.common
          .toLowerCase()
          .includes(e.target.value.toLowerCase());
      });
      setCountries(filtered);
    } else {
      setCountries(regionCountries);
    }
  }

  function filterByRegion(e) {
    if (e.target.value === "-1") {
      setCountries(allCountries);
    } else {
      let filteredCountries = allCountries.filter((country) => {
        return country.region
          .toLowerCase()
          .includes(e.target.value.toLowerCase());
      });
      setCountries(filteredCountries);
      setRegionCountries(filteredCountries);
    }
  }

  return (
    <div className="App">
      <Header />
      <Container className="container--secondary">
        <Search onchange={search} />
        <Select onchange={filterByRegion} />
      </Container>
      <Container className="container--primary">
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
