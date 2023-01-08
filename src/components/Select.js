import React from "react";

function Select(props) {
  return (
    <div className="select">
      <select className="select-input" onChange={props.onchange}>
        <option className="select-option" value="">
          Filter by Region
        </option>
        <option className="select-option" value="Africa">
          Africa
        </option>
        <option className="select-option" value="America">
          America
        </option>
        <option className="select-option" value="Asia">
          Asia
        </option>
        <option className="select-option" value="Europe">
          Europe
        </option>
        <option className="select-option" value="Oceania">
          Oceania
        </option>
      </select>
    </div>
  );
}

export default Select;
