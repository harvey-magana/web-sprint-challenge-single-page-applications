import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import * as yup from 'yup';
import axios from "axios";

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

const DropDownContainer = styled.div``;
const DropDownSelect = styled.select``;
const DropDownOption = styled.option``;

const Checkbox = styled.input`
	padding: 0.5em;
	color: #2196f3;
	background: #2196f3;
	border: none;
	border-radius: 3px;
	width: 30%;
	margin-bottom: 0.5em;
`;

const ToppingsContainer = styled.div`
    display: flex;
`;

const ToppingsTitle = styled.div`
    margin-bottom: 0.5em;
    color: #2196f3;
    display: block;
`;

const SpecialInstructions = styled.textarea`
    padding: 0.5em;
    color: #2196f3;
    background: papayawhip;
    border: none;
    border-radius: 3px;
    width: 100%;
    margin-bottom: 0.5em;
`;

const Pizza = () => {
    //state **
    //validation
    //inputChange **
    //formSubmit **
    //useEffect
    //formSchema
    const [ formState, setFormState ] = useState({
        id: Date.now(),
        name: '', 
        sizes: '', 
        pepperoni: false,
        sausage: false,
        mushrooms: false,
        peppers: false,
        special_instructions: ''
    })

    console.log(formState)
    const [ pizzas, setPizzas ] = useState([])

    const [ errors, setErrors ] = useState({
        id: Date.now(),
        name: '', 
        email: '', 
        password: '', 
        terms: ''
    });

    const validateChange = (e) => {
        yup
            .reach(formSchema, e.target.name)
            .validate(e.target.value)
            .then((valid) => {
                setErrors({
                    name: event.target.value,
                    [e.target.name]: ""
                });
            })
            .catch((err) => {
                setErrors({
                    name: event.target.value,
                    [e.target.name]: err.errors[0]
                });
            });
    }

    const inputChange = (e) => {
        e.persist();
        const newFormData = {
            ...formState, 
            [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value 
        }

        validateChange(e);
        setFormState(newFormData);
    }

    const formSubmit = (e) => {
        e.preventDefault();
        console.log("form submitted!");
        axios
            .post("https://reqres.in/api/users", formState)
            .then((res) => {
                console.log(res)
                setPizzas(res.data)
                setFormState({
                    name: '', 
                    sizes: '', 
                    pepperoni: false,
                    sausage: false,
                    mushrooms: false,
                    peppers: false,
                    special_instructions: ''
                })
            })
            .catch((err) => console.log(err.response));
    }
    
    useEffect(() => {
        formSchema.isValid(formState).then((isValid) => {
            setButtonDisabled(!isValid)
        });
    }, [formState])
    
    const formSchema = yup.object().shape({
        name: yup
            .string()
            .min(2, "Passwords must be at least 2 characters long.")
            .required()
      });

  return (
    <div className="App">
        <h1>Build your own pizza</h1>
        <Link to="/">
            <div className="home-button">Home</div>
        </Link>
        <Link to="/pizza">
            <div className="home-button">Pizza Form</div>
        </Link>
        <Form onSubmit={formSubmit}>
            <FormGroup>
            <Label htmlFor="sizes">Pizza Sizes
                <DropDownContainer>
                    <DropDownSelect id="sizes" name="sizes" onChange={inputChange} value={formState.sizes}>
                        <DropDownOption value="">--Please choose a size--</DropDownOption>
                        <DropDownOption value="small">Small</DropDownOption>
                        <DropDownOption value="medium">Medium</DropDownOption>
                        <DropDownOption value="large">Large</DropDownOption>
                    </DropDownSelect>
                </DropDownContainer>
                </Label>
                <ToppingsTitle>Toppings</ToppingsTitle>
                <ToppingsContainer>
                    <Label htmlFor="pepperoni">
                    Pepperoni
                    <Checkbox 
                        id="pepperoni"
                        type="checkbox"
                        name="pepperoni"
                        checked={formState.pepperoni} 
                        onChange={inputChange} 
                    />
                    </Label>
                    <Label htmlFor="sausage">
                    Susage
                    <Checkbox 
                        id="sausage"
                        type="checkbox"
                        name="sausage"
                        checked={formState.sausage} 
                        onChange={inputChange} 
                    />
                    </Label>
                    <Label htmlFor="mushrooms">
                    Mushrooms
                    <Checkbox 
                        id="mushrooms"
                        type="checkbox"
                        name="mushrooms"
                        checked={formState.mushrooms} 
                        onChange={inputChange} 
                    />
                    </Label>
                    <Label htmlFor="peppers">
                    Peppers
                    <Checkbox 
                        id="peppers"
                        type="checkbox"
                        name="peppers"
                        checked={formState.peppers} 
                        onChange={inputChange} 
                        value={formState.peppers}
                    />
                    </Label>
                </ToppingsContainer>
                <Label htmlFor="name">Name
                    <Input 
                        id="label" 
                        name="name" 
                        onChange={inputChange} 
                        value={formState.name}
                    />
                </Label>
                <Label htmlFor="special_instructions">Special-Instructions
                    <SpecialInstructions
                        id="special_instructions"
                        name="special_instructions"
                        onChange={inputChange} 
                        value={formState.special_instructions}
                    />
                </Label>
                <Button primary>Primary</Button>
            </FormGroup>
        </Form>
    </div>
  );
};
export default Pizza;