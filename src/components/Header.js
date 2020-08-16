import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { white, grey } from "color-name";

const Nav = styled.div`
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
`;
 
const NavHeader = styled.div`
  max-width: 1010px;
  padding: 26px 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;
 
const NavLeft = styled.div`
  width: 33.333%;
  text-align: left;
  text-transform: uppercase;
`;
 
const NavRight = styled.div`
  width: 33.333%;
  text-align: right;
`;

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid green;
  border-radius: 3px;
  
  text-transform: uppercase;
  & a {
    text-decoration: none;
    color: green;
  }
`;

const Header = () => {
  return (
    <Nav>
        <NavHeader>
        <NavLeft>Lambda Eats Home Page</NavLeft>

        <NavRight>
            <Button>
                <Link to="/">
                    <div className="home-button">Home</div>
                </Link>
            </Button>
            <Button>
                <Link to="/pizza">
                    <div className="home-button">Pizza Form</div>
                </Link>
            </Button>
        </NavRight>
        </NavHeader>
    </Nav>
  );
};
export default Header;