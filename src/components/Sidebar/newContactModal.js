import React, { useRef } from 'react'
import { Modal, Form } from 'react-bootstrap'
import { getData } from '../DataBase'
// import { useContacts } from '../contexts/ContactsProvider' - will be useful

export default function NewContactModal({ closeModal }) {
    const usernameRef = useRef()
    // const { createContact } = useContacts()

    // createContact(usernameRef.current.value)
    function handleSubmit(e) {
        e.preventDefault()
        var newUser =  getData(usernameRef.current.value)
        if(newUser != null){
            console.log(newUser);
            closeModal()
        }
        else {
            alert("Username not found 404!")
        }
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