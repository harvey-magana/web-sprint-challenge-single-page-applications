import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer"; 
import Confirmation from "./Confirmation";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import * as yup from 'yup';
import axios from "axios";

const Form = styled.form`
	color: green;
    display: block;
	width: 300px;
	margin: 50px auto;
`;

const FormGroup = styled.div`
	color: green;
    display: block;
	width: 300px;
	margin: 50px auto;
`;

const Label = styled.label`
	margin-bottom: 0.5em;
	color: green;
    display: block;
`;

const Input = styled.input`
	padding: 0.5em;
	color: green;
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
  border: 2px solid green;
  border-radius: 3px;
`;

const DropDownContainer = styled.div``;
const DropDownSelect = styled.select``;
const DropDownOption = styled.option``;

const Checkbox = styled.input`
	padding: 0.5em;
	color: green;
	background: green;
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
    color: green;
    display: block;
`;

const SpecialInstructions = styled.textarea`
    padding: 0.5em;
    color: green;
    background: papayawhip;
    border: none;
    border-radius: 3px;
    width: 100%;
    margin-bottom: 0.5em;
`;

const PostTitle = styled.h3`
    color: green;
    display: block;
    width: 300px;
    margin: 50px auto;
`;

const Pizza = () => {
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
    const [ buttonDisabled, setButtonDisabled ] = useState(true);

    const [ errors, setErrors ] = useState({
        id: Date.now(),
        name: '', 
        sizes: '', 
        pepperoni: false,
        sausage: false,
        mushrooms: false,
        peppers: false,
        special_instructions: ''
    });

    const validateChange = (e) => {
        yup
            .reach(formSchema, e.target.name)
            .validate(e.target.value)
            .then((valid) => {
                setErrors({
                    ...errors,
                    [e.target.name]: ""
                });
            })
            .catch((err) => {
                setErrors({
                    ...errors,
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
            console.log(formState)
            setButtonDisabled(!isValid)
        });
    }, [formState])
    
    const formSchema = yup.object().shape({
        sizes: yup.string().oneOf(["small", "medium", "large"], "Please choose a size").required(),
        pepperoni: yup.boolean(),
        sausage: yup.boolean(),
        mushrooms: yup.boolean(),
        peppers: yup.boolean(),
        name: yup.string().min(2, "Name must be at least 2 characters long.").required("Name is required"),
        special_instructions: yup.string()
      });

  return (
    <div className="App">
        <Header />
        <PostTitle>Build your own pizza</PostTitle>
        <Form onSubmit={formSubmit}>
            <FormGroup>
            <Label htmlFor="sizesInput">Pizza Sizes
                <DropDownContainer>
                    <DropDownSelect id="sizesInput" name="sizes" onChange={inputChange} value={formState.sizes}>
                        <DropDownOption value="">--Please choose a size--</DropDownOption>
                        <DropDownOption value="small">Small</DropDownOption>
                        <DropDownOption value="medium">Medium</DropDownOption>
                        <DropDownOption value="large">Large</DropDownOption>
                    </DropDownSelect>
                </DropDownContainer>
                {errors.sizes.length > 0 ? <p>{errors.sizes}</p> : null}
                </Label>
                <ToppingsTitle>Toppings</ToppingsTitle>
                <ToppingsContainer>
                    <Label htmlFor="pepperoniInput">
                    Pepperoni
                    <Checkbox 
                        id="pepperoniInput"
                        type="checkbox"
                        name="pepperoni"
                        data-cy="pepperoni"
                        checked={formState.pepperoni} 
                        onChange={inputChange} 
                    />
                    </Label>
                    <Label htmlFor="sausageInput">
                    Susage
                    <Checkbox 
                        id="sausageInput"
                        type="checkbox"
                        name="sausage"
                        data-cy="sausage"
                        checked={formState.sausage} 
                        onChange={inputChange} 
                    />
                    </Label>
                    <Label htmlFor="mushroomsInput">
                    Mushrooms
                    <Checkbox 
                        id="mushroomsInput"
                        type="checkbox"
                        name="mushrooms"
                        data-cy="mushrooms"
                        checked={formState.mushrooms} 
                        onChange={inputChange} 
                    />
                    </Label>
                    <Label htmlFor="peppersInput">
                    Peppers
                    <Checkbox 
                        id="peppersInput"
                        type="checkbox"
                        name="peppers"
                        data-cy="peppers"
                        checked={formState.peppers} 
                        onChange={inputChange} 
                    />
                    </Label>
                </ToppingsContainer>
                <Label htmlFor="nameInput">Name
                    <Input 
                        id="nameInput" 
                        name="name" 
                        data-cy="name"
                        onChange={inputChange} 
                        value={formState.name}
                    />
                {errors.name.length > 0 ? <p>{errors.name}</p> : null}
                </Label>
                <Label htmlFor="special_instructionsInput">Special-Instructions
                    <SpecialInstructions
                        id="special_instructionsInput"
                        name="special_instructions"
                        data-cy="special_instructions"
                        onChange={inputChange} 
                        value={formState.special_instructions}
                    />
                {errors.special_instructions.length > 0 ? <p>{errors.special_instructions}</p> : null}
                </Label>
                <Button disabled={buttonDisabled} primary>Submit</Button>
            </FormGroup>
            <Confirmation order={pizzas} />
        </Form>
        <Footer />
    </div>
  );
};
export default Pizza;