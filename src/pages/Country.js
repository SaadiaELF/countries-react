import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import CountryDetails from "../components/CountryDetails";

function Country(props) {
  return (
    <div>
      <Button>
        <Link className="link" to="/">
          Back
        </Link>
      </Button>
      <CountryDetails countryName={props.countryName} />
    </div>
  );
}

export default Country;
