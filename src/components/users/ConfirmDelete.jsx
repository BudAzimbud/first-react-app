import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";

import axios from "axios";

export default function ConfirmDelete(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = (event) => {
    event.preventDefault();
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
          <Modal.Title>Delete </Modal.Title>
        </Modal.Header>

        <Modal.Body>Are sure to delete this user</Modal.Body>

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
