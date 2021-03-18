import React, { useState } from "react";
import Evolution from "./Evolution";
import { Button, Modal, ModalDialog } from "react-bootstrap";

const ModalTest = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Evolution</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Evolution />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* <Modal.Dialog>
        <Modal.Header
          closeButton
          onClick={() => {
            setShow(false);
          }}
        >
          <Modal.Title>Evolution</Modal.Title>
        </Modal.Header>

        <Modal.Body>Apparition input</Modal.Body>

        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              setShow(false);
            }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal.Dialog> */}
    </div>
  );
};

export default ModalTest;
