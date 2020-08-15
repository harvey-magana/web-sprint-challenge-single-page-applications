import React from "react";
import { Link } from 'react-router-dom';

const Pizza = () => {
  return (
    <>
      <h1>Pizza Page</h1>
      <Link to="/">
        <div className="home-button">Home</div>
      </Link>
    </>
  );
};
export default Pizza;