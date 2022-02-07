import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";

import axios from "axios";

export default function ConfirmDelete(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = () => {
    console.log("hello");
    console.log(props.id);
    axios.delete("http://localhost:4000/user/" + props.id);
    refreshPage();
    setShow(false);
  };

  const refreshPage = () => {
    window.location.reload(false);
  };

  return (
    <div>
      <Button variant="danger" onClick={handleShow}>
        delete
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>

        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

          <Button variant="danger" onClick={handleDelete}>
            delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
