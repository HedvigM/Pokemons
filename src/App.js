import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import List from 'Components/List';
import { Header } from 'Components/Header';
import { Footer } from 'Components/Footer';
import { Button } from 'Components/Button';
import { About } from './Components/About';
import { Details } from 'Components/Details';

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/'>
          <List />
          <Button />
        </Route>
        <Route path='/details/:pokemon'>
          <Details />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};
