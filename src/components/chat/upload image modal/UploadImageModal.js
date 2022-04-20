import {React, useState} from 'react'
import { Button, Modal, Form } from "react-bootstrap";

function UploadImageModal() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [selectedFile, setSelectedFile] = useState(null);

    const uploadImage = e => {
        console.log(e.target.files[0])
        setShow(false)
    }


  return (
    <>
    <Button variant="light" onClick={handleShow}>
      Launch demo modal
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Upload Image</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form > 
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control
              type="file"
              autoFocus
              val
              onChange={(e) => setSelectedFile(e.target.files[0])}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={uploadImage}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  </>
);
}

export default UploadImageModal