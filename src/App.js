import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import List from "Components/List";

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route>
          <List />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
