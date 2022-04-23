import {React, useState} from 'react'
import { Button, Modal, Form } from "react-bootstrap";


function UploadImageModal({sendImage}) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [image, setImage] = useState();


    const uploadImage = e => {
      setImage(URL.createObjectURL(e.target.files[0]));
    }

    const handleSendImage = e => {
      if(image != null){
        sendImage(image)
        setShow(false)
      }
    }

  return (
    <>
    <button className="btn btn-sm" onClick={handleShow}>
    <i className="bi bi-image"></i>
  </button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Upload Image</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form > 
          <Form.Group className="mb-3">
            <Form.Control
              type="file"
              onChange={uploadImage}
              accept="image/*"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleSendImage}>
          Send
        </Button>
      </Modal.Footer>
    </Modal>
  </>
);
}

export default UploadImageModal