import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { BiCube } from "react-icons/bi";

import { ModalContent } from "./styles";

function ModalUpload({ showModal, handleClose, glbModel, usdzModel }) {
  return (
    <Modal
      show={showModal}
      backdrop="static"
      keyboard={false}
      onHide={handleClose}
    >
      <Modal.Header closeButton>
        <Modal.Title>Model upload</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ModalContent>
          <div className="file">
            <BiCube size={110} />
            {glbModel && <h6>{glbModel.name}</h6>}
            {usdzModel && <h6>{glbModel.name}</h6>}
          </div>
          <div className="folder">
            <Form.Label>Select folder to upload model</Form.Label>
            <Form.Control
              as="select"
              onChange={(e) => console.log(e.target.value)}
            >
              <option>None</option>
              <option>Folder 1</option>
              <option>Folder 3</option>
              <option>Folder 4</option>
              <option>Folder 5</option>
            </Form.Control>
          </div>
        </ModalContent>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary">Confirm</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalUpload;
