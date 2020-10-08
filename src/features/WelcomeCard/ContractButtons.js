import React from "react";
import { Button } from "@material-ui/core";
import {Link as RouterLink } from "react-router-dom";

export default function ContractButtons() {
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => alert("You've passed the point for regrets")}
        size="large"
        component={RouterLink}
        to="/countries"
      >
        Enter the Control Room
      </Button>

      <Button
        variant="contained"
        color="primary"
        onClick={() =>
          alert("You saved yourself before you it was too late... good job!")
        }
        size="large"
        href='https://www.cdc.gov/coronavirus/2019-ncov/index.html'
      >
        CDC Parachute
      </Button>
    </div>
  );
}
