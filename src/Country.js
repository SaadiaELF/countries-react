import React from "react";
import { Link } from "react-router-dom";
import Button from "./components/Button";

function Country() {
  return (
    <div>
      <Button>
        <Link className="link" to="/">Back</Link>
      </Button>
    </div>
  );
}

export default Country;
