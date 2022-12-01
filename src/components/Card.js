import React from "react";

function Card(props) {
  return (
    <div className="card">
      <img className="card__img" src={props.imageSrc} alt={props.imageAlt} />
      <div className="card__body">
        <h2 className="card__title">{props.title}</h2>
        <ul className="card__list">
          <li>
            <span>Population: </span>
            {props.population}
          </li>
          <li>
            <span>Region: </span>
            {props.region}
          </li>
          <li>
            <span>Capital: </span>
            {props.capital}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Card;
