import React from "react";

function Search(props) {
  return (
    <input
      className="search-input"
      onChange={props.onchange}
      placeholder="Search for a country ... "
    />
  );
}

export default Search;
