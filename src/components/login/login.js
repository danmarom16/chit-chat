import React from "react";
import { Row, Col, Container, Form, Button } from 'react-bootstrap'
import loginIcon from './icons/ManIcon.png'
import './login.css'

function Login() {
    return (
            <Container fluid="true" className="loginContainer">
                <Row className="justify-content-center ">

                    <Col lg={4} md={6} sm={12} className="text-center">
                        <img className="icon-img" src={loginIcon} alt="icon" />

                        <Form >
                            <Row className="mb-4">
                                <Form.Label> Username </Form.Label>
                                <Form.Group controlId="formBasicText">
                                    <Form.Control type="text" placeholder="Enter username" />
                                </Form.Group>
                            </Row>
                            <Row className="mb-2">
                                <Form.Label> Password </Form.Label>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                            </Row>
                            <Button variant="primary" type="Submit">
                                Login
                            </Button>
                        </Form>
                    </Col>

                    <Col className="text-center" lg={4} md={6} sm={12}>
                        <h2>
                            Not Registered?
                            <br></br>
                            <a href="#"> click here </a>
                            to register
                        </h2>
                    </Col>
                </Row>
            </Container>
    );
}

export default Login;