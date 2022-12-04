import React from "react";
import { Link } from "react-router-dom";

function Card({ country, handleClick }) {
  return (
    <div className="card">
      <img
        className="card__img"
        src={country.flags.png}
        alt={country.name.common}
      />
      <div className="card__body">
        <Link to={"/" + country.name.common.toLowerCase()}>
          <h2
            className="card__title"
            id={country.name.common}
            onClick={handleClick}
          >
            {country.name.common}
          </h2>
        </Link>
        <ul className="card__list">
          <li>
            <span>Population: </span>
            {country.population}
          </li>
          <li>
            <span>Region: </span>
            {country.region}
          </li>
          <li>
            <span>Capital: </span>
            {country.capital}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Card;
