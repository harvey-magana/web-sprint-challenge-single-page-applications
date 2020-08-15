import React from "react";
import { Route, Switch } from 'react-router-dom';
import Home from "./components/Home";
import Pizza from "./components/Pizza";
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/pizza" render={() => <Pizza />} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
};
export default App;
