import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import Card from "../components/Card";
import Search from "../components/Search";
import Select from "../components/Select";

function Home(props) {
  const [allCountries, setAllCountries] = useState([]);
  // filtered countries
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
    let searchTerm = e.target.value;
    if (searchTerm) {
      const filtered = regionCountries.filter((country) => {
        return country.name.common
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
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
      <Container className="container--secondary">
        <Search onchange={search} />
        <Select onchange={filterByRegion} />
      </Container>
      <Container className="container--primary">
        {countries.map((country, index) => {
          return (
            <Card
              key={index}
              country={country}
              handleClick={props.handleClick}
            />
          );
        })}
      </Container>
    </div>
  );
}

export default Home;
