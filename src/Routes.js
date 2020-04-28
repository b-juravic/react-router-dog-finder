import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import DogList from "./DogList";
import FilterDog from "./FilterDog";

function Routes({ dogs }) {
  return (
    <Switch>
      <Route exact path="/dogs">
        <DogList dogs={dogs} />
      </Route>
      <Route path="/dogs/:name">
        <FilterDog dogs={dogs} />
      </Route>
      <Route>
        <Redirect to="/dogs" />
      </Route>
    </Switch>
  );
}

export default Routes;