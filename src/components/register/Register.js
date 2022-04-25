import React from 'react';
import { useState } from "react";
import "./Register.css";
import FormInput from '../formInput/FormInput'
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom"
import {createNewUser} from "../DataBase.js"
import { useNavigate } from 'react-router-dom';

const Register = ( {setUsername} ) => {
  var defImg = "https://cdn.dribbble.com/users/1577045/screenshots/4914645/media/028d394ffb00cb7a4b2ef9915a384fd9.png?compress=1&resize=400x300&vertical=top";

  const [values, setValues] = useState({
    username: "",
    displayName: "",
    password: "",
    confirmPassword: "",
    imgUrl: defImg
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
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm password",
      errorMessage: "Passwords does not match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const handleUploadImage = (e) => {
    setValues({ ...values, ["imgUrl"]: URL.createObjectURL(e.target.files[0]) });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      createNewUser({
        username: values.username,
        displayName: values.displayName,
        profilePic: values.imgUrl,
        password: values.password,
      })
    ){
      setUsername(values.username)
      navigate("/dashboard");
    }
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
        <FormInput name="profilePic" type="file" accept="image/*" label="photo" onChange={handleUploadImage} />
        <button className='register-button'>Submit</button>
        <Row className="register-line mb-2">
          <Col>
            Already registered?
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
