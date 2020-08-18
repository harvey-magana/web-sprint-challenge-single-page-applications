import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
 
const Nav = styled.div`
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
`;
 
const NavHeader = styled.div`
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

const ConfirmationContainer = styled.div``;

const PostTitle = styled.h3`
    color: green;
    display: block;
    width: 300px;
    margin: 50px auto;
`;

const Confirmation = (props) => {
    const { order } = props
  return (
    <div>
        <ConfirmationContainer>
            <PostTitle>Here is what you ordered!</PostTitle>
                <pre>{JSON.stringify(order, null, 2)}</pre>
        </ConfirmationContainer>
    </div>
  );
};
export default Confirmation;