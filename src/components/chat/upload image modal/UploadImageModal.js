import {React, useState} from 'react'
import { Button, Modal, Form } from "react-bootstrap";


function UploadImageModal({sendImage}) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [image, setImage] = useState();


    const uploadImage = e => {
      var imgSrc = URL.createObjectURL(e.target.files[0]);
      setImage(imgSrc)

    }

    const handleSendImage = e => {
      if(image != null){
        sendImage(image)
        setShow(false)
      }
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