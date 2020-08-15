import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Pizza = () => {
  return (
    <>
      <h1>Build your own pizza</h1>
      <Link to="/">
        <div className="home-button">Home</div>
      </Link>
      <Link to="/pizza">
        <div className="home-button">Pizza Form</div>
      </Link>
    </>
  );
};
export default Pizza;