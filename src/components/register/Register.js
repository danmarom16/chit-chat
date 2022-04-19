import React from 'react';
import { useState } from "react";
import "./Register.css";
import FormInput from '../formInput/FormInput'
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom"
import {db} from "../DataBase.js"
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [values, setValues] = useState({
    username: "",
    displayName: "",
    imgUrl: null, // we will have to edit this.
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username must be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9~!@#$%^&*()?]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "displayName",
      type: "text",
      placeholder: "Display name",
      errorMessage: "Dislplay name must be between 3 and 16 characters",
      label: "Display name",
      pattern: "^.{3,16}$",
      required: true,
    },
    {
      id: 3,
      name: "photo",
      type: "file",
      accept: "image/*",
      placeholder: "Photo",
      label: "Photo",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm password",
      errorMessage: "Passwords does not match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (db[values.username] === undefined) {
      db[values.username] = 
        {displayName: values.displayName, imgUrl: values.imgUrl, password: values.password};
        console.log("added");
        navigate("/");
    }
    else{
      console.log("already exists");
    }
    console.log(db)
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="register">
      <form className="animated register-form" onSubmit={handleSubmit}>
        <h1 className='register-title'>Register</h1>
        {inputs.map((input) => (
          <FormInput key={input.id} {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button className='register-button'>Submit</button>
        <Row className="register-line mb-2">
          <Col>
            Not registered yet?
          </Col>
          <Col>
            <Link to="/">Click Here.</Link>
          </Col>
        </Row>
      </form>
    </div>
    
  );
};

export default Register;
