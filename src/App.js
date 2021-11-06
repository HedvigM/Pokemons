import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import List from 'Components/List';
import { Button } from 'Components/Button';

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route>
          <List />
          <Button />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
