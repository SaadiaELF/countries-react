import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import Card from "../components/Card";
import Search from "../components/Search";
import Select from "../components/Select";

function Home(props) {
  const [allCountries, setAllCountries] = useState([]);
  const [countries, setCountries] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const [filterVal, setFilterVal] = useState("");

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
        setAllCountries(data);
      });
  }, []);

  useEffect(() => doFilter(), [searchVal, filterVal]);

  function doFilter() {
    setCountries(
      allCountries.filter(
        (country) =>
          (country.region.toLowerCase().includes(filterVal) || !filterVal) &&
          (country.name.common.toLowerCase().includes(searchVal) || !searchVal)
      )
    );
  }

  return (
    <div className="App">
      <Container className="container--secondary">
        <Search onchange={(e) => setSearchVal(e.target.value.toLowerCase())} />
        <Select onchange={(e) => setFilterVal(e.target.value.toLowerCase())} />
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
