import {React, useState} from 'react'
import { Button, Modal, Form } from "react-bootstrap";


function UploadVideoModal({sendVideo}) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [video, setVideo] = useState();


    const uploadVideo = e => {
      setVideo(URL.createObjectURL(e.target.files[0]));
    }

    const handleSendVideo = e => {
      if(video != null){
        sendVideo(video)
        setShow(false)
      }
    }

  return (
    <>
    <button className="btn btn-sm" onClick={handleShow}>
    <i className="bi bi-camera-reels" />
  </button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Upload Video</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form > 
          <Form.Group className="mb-3">
            <Form.Control
              type="file"
              onChange={uploadVideo}
              accept="video/*"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleSendVideo}>
          Send
        </Button>
      </Modal.Footer>
    </Modal>
  </>
);
}

export default UploadVideoModal