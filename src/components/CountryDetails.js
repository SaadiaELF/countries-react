import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function CountryDetails({ countryName, handleClick }) {
  const [country, setCountry] = useState({});
  const [borderCountries, setBorderCountries] = useState([]);
  const [countriesCode, setCountriesCode] = useState([]);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
      .then((response) => response.json())
      .then((data) => {
        setCountry(data[0]);
        if (data[0].borders) {
          setCountriesCode(data[0].borders.toString());
        }
      });
  }, [countryName]);

  useEffect(() => {
    // eslint-disable-next-line operator-linebreak
    countriesCode.length &&
      fetch(`https://restcountries.com/v3.1/alpha?codes=${countriesCode}`)
        .then((response) => response.json())
        .then((data) => {
          setBorderCountries(data);
        });
  }, [countriesCode]);

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
                {borderCountries
                  ? borderCountries.map((border, i) => {
                      return (
                        <button
                          key={i}
                          className="btn btn--secondary"
                          id={border.name.common}
                          onClick={handleClick}
                        >
                          <Link
                            className="link"
                            to={"/" + border.name.common.toLowerCase()}
                          >
                            {border.name.common}
                          </Link>
                        </button>
                      );
                    })
                  : "None"}
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
