import React from "react";
import { Route, Switch } from 'react-router-dom';
import Home from "./components/Home";
import Pizza from "./components/Pizza";

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/pizza" render={() => <Pizza />} />
        <Route path="/" component={Home} />
      </Switch>
    </>
  );
};
export default App;
