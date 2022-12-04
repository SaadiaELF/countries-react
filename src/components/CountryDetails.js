import React, { useEffect, useState } from "react";

function CountryDetails(props) {
  const [country, setCountry] = useState({});

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${props.countryName}`)
      .then((response) => response.json())
      .then((data) => {
        setCountry(data[0]);
      });
  }, [props.countryName]);

  console.log(country);

  return (
    <div className="container container--country">
      {Object.keys(country).length !== 0 ? (
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
                <li>
                  <span>Native name: </span>
                  {Object.values(country.name.nativeName)[0].common}
                </li>
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
              <ul className="card__list--country">
                <li>
                  <span>Top Level Domain: </span>
                  {country.tld[0]}
                </li>
                <li>
                  <span>Currencies: </span>
                  {Object.keys(country.currencies)[0]}
                </li>
                <li>
                  <span>Languages: </span>
                  {Object.values(country.languages).map((language) => {
                    return <span>{language + " | "}</span>;
                  })}
                </li>
              </ul>
            </div>
            <div className="card__borders">
              <span>Border Countries: </span>
              <div className="card__buttons">
                {country.borders? country.borders.map((border) => {
                  return (
                    <button className="btn btn--secondary">{border}</button>
                  );
                }):"None"}
              </div>
            </div>
          </div>
        </div>
      ) : (
        "Loading"
      )}
    </div>
  );
}

export default CountryDetails;
