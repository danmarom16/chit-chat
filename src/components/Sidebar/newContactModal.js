import React, { useRef, useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { isUsernameExists, addNewChat, getChats } from "../DataBase";
  /*
  if (!isUsernameExists(usernameRef.current.value)) {
    alert("Username not found 404!");
  } else if (usernameRef.current.value === myUsername) {
    alert("Can't create chat with yourself");
  } else if (myChats.includes(usernameRef.current.value)) {
    alert("Chat already exists");
  }
  */

import api from '../ContactsApi'

function NewContactModal({ myUsername, updateContactList}) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const usernameRef = useRef();
  const nameRef = useRef();
  const serverRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const request = JSON.stringify({
      id: usernameRef.current.value,
      name: nameRef.current.value,
      server: serverRef.current.value,
      });
    try {
      api.post(`/${myUsername}`, request).then(
        (res) => {
          console.log(res);
          updateContactList();
          handleClose();
        }
      )
    }
    catch (err) {
      console.error(err);
      alert("Error accured on adding new contact");
    }
  }

  return (
    <>
      <button id="addContact" className="btn btn-sm" onClick={handleShow}>
        <i className="bi bi-person-plus-fill"></i>
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>Add new contact</Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label className="text-black">Contact's identifier</Form.Label>
              <Form.Control type="text" ref={usernameRef} required />
              <Form.Label className="text-black">Contact's display name</Form.Label>
              <Form.Control type="text" ref={nameRef} required />
              <Form.Label className="text-black">Contact's server</Form.Label>
              <Form.Control type="text" ref={serverRef} required />
            </Form.Group>
            <Button variant="secondary" type="submit">Add</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default NewContactModal;
