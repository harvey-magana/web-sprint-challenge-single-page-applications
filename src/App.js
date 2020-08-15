import React from "react";
import { Route, Switch } from 'react-router-dom';
import Home from "./components/Home";
import Pizza from "./components/Pizza";

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/" render={(props) => <Home />} />
        <Route path="/pizza" render={(props) => <Pizza />} />
      </Switch>
    </>
  );
};
export default App;
