import React from "react";
import { Route, Switch } from 'react-router-dom';
import Home from "./components/Home";
import Pizza from "./components/Pizza";
import Confirmation from "./components/Confirmation";
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Switch>
      <Route path="/confirmation" render={() => <Confirmation />} />
        <Route path="/pizza" render={() => <Pizza />} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
};
export default App;
