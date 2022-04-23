import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import './EmptyDashboard.css'

function EmptyDashboard() {

  const navigate = useNavigate();
  const moveToLoginPage = e => {
    navigate("/");
  }
  const moveToRegisterPage = e => {
    navigate("/register");
  }

  return (

    <div className='empty-dashboard'>
      <h1 className='mt-5 title'> Please login or register </h1>
      <div className='mt-5 '>
        <div className='text-light '>
        Aleardy registered?</div>
        <Button className='button' variant="light" onClick={moveToLoginPage}>
          Click here to Login <i className="bi bi-door-open"></i> </Button>{' '}
      </div>
      <div className='mt-3'>
        <div className='text-light'>Not registered?</div>
        <Button className='button' variant="light" onClick={moveToRegisterPage}>
          Click here to Register
          <i className="bi bi-pencil-square p-2">
          </i>
        </Button>{' '}
      </div>
    </div>
  );
}

export default EmptyDashboard
