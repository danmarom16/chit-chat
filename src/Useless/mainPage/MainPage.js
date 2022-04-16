import React from 'react';
import { Row, Col, Container } from "react-bootstrap";
import DisplayContacts from './Contacts/Contacts';
import cumShot from "./mainPageImages/cumShot.jpg"

function MainPage() {
    return (
        <Container>
            <Row>
                <Col sm={4} md={4} lg={4}>
                    <DisplayContacts></DisplayContacts>
                </Col>
                <Col sm={8} md={8} lg={8}>
                    <div>Some words above the picture
                    </div>
                    <img src={cumShot} alt="logo" width="600" />
                </Col>
            </Row>
        </Container>
    );
}

export default MainPage
