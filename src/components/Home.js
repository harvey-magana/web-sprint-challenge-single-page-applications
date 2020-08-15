import React from "react";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <h1>Lambda Eats Home Page</h1>
      <Link to="/">
        <div className="home-button">Home</div>
      </Link>
      <Link to="/pizza">
        <div className="home-button">Pizza Form</div>
      </Link>
    </>
  );
};
export default Home;