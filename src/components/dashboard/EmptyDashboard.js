import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

function EmptyDashboard() {

  const navigate = useNavigate();
  const moveToLoginPage = e => {
        navigate("/");
  }
  const moveToRegisterPage = e => {
        navigate("/register");
  }

  return(

    <div>
    <h1 className='mt-5' style={{color:"white"}}> Please login or register :) </h1>
    <div className='mt-5'>
    <Button variant="light" onClick={moveToLoginPage}>Press to Login</Button>{' '}
    </div>
    <div className='mt-3'>
    <Button variant="light" onClick={moveToRegisterPage}>Press to Register</Button>{' '}
    </div>
    </div>
  );
}

export default EmptyDashboard
