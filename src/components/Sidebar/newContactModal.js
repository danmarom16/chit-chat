import React, { useRef } from "react";
import { Modal, Form } from "react-bootstrap";
import { isUsernameExists, getDisplayName, addNewChat } from "../DataBase";

export default function NewContactModal({myUsername, myChats, closeModal }) {
  const usernameRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    if (!isUsernameExists(usernameRef.current.value)) {
      alert("Username not found 404!");
    } else if(usernameRef.current.value === myUsername) {
      alert("Can't create chat with yourself");
    } else if(myChats.includes(usernameRef.current.value)){
      alert("Chat already exists");
    }
    else{
      addChat();
    }
  }

  function addChat(){
    addNewChat(myUsername, usernameRef.current.value);
    closeModal();
  }

  return (
    <>
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
    </>
  );
}
