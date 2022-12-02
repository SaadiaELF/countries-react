import React, { useEffect, useState } from "react";

function CountryDetails(props) {
  const [country, setCountry] = useState({});

  useEffect(() => {
    // fetch(`https://restcountries.com/v3.1/name/${props.countryName}`)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setCountry(data);
    //   });
    const fetchData = async () => {
      const data = await fetch(
        `https://restcountries.com/v3.1/name/${props.countryName}`
      );
      const json = await data.json();
      setCountry(json[0]);
    };
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, [props.countryName]);

  console.log(country);

  return (
    <div className="container container--country">
      {country ? (
        <div className="card--country">
          <img
            className="card__img--country"
            src={country.flags.png}
            alt={country.name.common}
          />
          <div className="card__body--country">
            <h2 className="card__title--country">{country.name.common}</h2>
            <div className="card__lists--country">
              <ul className="card__list--country">
                {/* <li>
                <span>Native name: </span>
                {props.nativeName}
              </li> */}
                <li>
                  <span>Population: </span>
                  {country.population}
                </li>
                <li>
                  <span>Region: </span>
                  {country.region}
                </li>
                <li>
                  <span>Sub Region: </span>
                  {country.subregion}
                </li>
                <li>
                  <span>Capital: </span>
                  {country.capital}
                </li>
              </ul>
              {/* <ul className="card__list--country">
              <li>
                <span>Top Level Domain: </span>
                {props.domain}
              </li>
              <li>
                <span>Currencies: </span>
                {props.currencies}
              </li>
              <li>
                <span>Languages: </span>
                {props.languages}
              </li>
            </ul> */}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default CountryDetails;
