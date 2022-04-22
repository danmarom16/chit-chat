import React, { useRef, useState } from "react";
import { Modal, Form } from "react-bootstrap";
import { isUsernameExists, addNewChat, getChats } from "../DataBase";

function NewContactModal({ myUsername, myChats, handleAddChat}) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const usernameRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    if (!isUsernameExists(usernameRef.current.value)) {
      alert("Username not found 404!");
    } else if (usernameRef.current.value === myUsername) {
      alert("Can't create chat with yourself");
    } else if (myChats.includes(usernameRef.current.value)) {
      alert("Chat already exists");
    }
    else {
      addChat();
    }
  }

  function addChat() {
    console.log(usernameRef.current.value)
    addNewChat(myUsername, usernameRef.current.value);
    handleAddChat([...myChats, usernameRef.current.value])
    handleClose();
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
              <Form.Label>Contact's identifier</Form.Label>
              <Form.Control type="text" ref={usernameRef} required />
            </Form.Group>
            <button type="submit">Add</button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default NewContactModal;
