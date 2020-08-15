import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Form = styled.form`
	color: #2196f3;
    display: block;
	width: 300px;
	margin: 50px auto;
`;

const FormGroup = styled.div`
	color: #2196f3;
    display: block;
	width: 300px;
	margin: 50px auto;
`;

const Label = styled.label`
	margin-bottom: 0.5em;
	color: #2196f3;
    display: block;
`;

const Input = styled.input`
	padding: 0.5em;
	color: #2196f3;
	background: papayawhip;
	border: none;
	border-radius: 3px;
	width: 100%;
	margin-bottom: 0.5em;
`;

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #2196f3;
  border-radius: 3px;
`;

const DropDownContainer = styled("div")``;
const DropDownHeader = styled("div")``;
const DropDownListContainer = styled("div")``;
const DropDownList = styled("ul")``;
const ListItem = styled("li")``;

const Pizza = () => {
  return (
    <div className="App">
        <h1>Build your own pizza</h1>
        <Link to="/">
            <div className="home-button">Home</div>
        </Link>
        <Link to="/pizza">
            <div className="home-button">Pizza Form</div>
        </Link>
        <Form>
            <FormGroup>
                <Label htmlFor="label">Name:</Label>
                <Input id="label" name="name" />
                <Label htmlFor="label">Email:</Label>
                <Input id="label" name="email" />
                <Label htmlFor="label">Role:</Label>
                <Input id="label" name="role" />
                <Button primary>Primary</Button>
            </FormGroup>
        </Form>
    </div>
  );
};
export default Pizza;