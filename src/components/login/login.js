import React from "react";
import { useState } from "react";
import "./Login.css";
import FormInput from '../formInput/FormInput'
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom"
import { searchInDb } from "../DataBase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [values, setValues] = useState({
    username: "",
    displayName: "",
    photo: "", // we will have to edit this.
    password: "",
    confirmPassword: "",
  });

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
  ];

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(searchInDb(values)){
      console.log('user is registered');
      navigate("/dashboard");
    }
    else
      console.log('not regiestered')
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="login">
      <form className="animated login-form" onSubmit={handleSubmit}>
        <h1 className="login-title">Login Page</h1>
        {inputs.map((input) => (
          <FormInput className="login-form-input"
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button className="login-button">Sign In</button>
        <Row className="register-line mb-2">
            <Col>
                Not registered yet?
            </Col>
            <Col>
            <Link to="/register">Click Here.</Link>
            </Col>
        </Row>
      </form>
    </div>
  );
};

export default Login;