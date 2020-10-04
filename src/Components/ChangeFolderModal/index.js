import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { BiCube } from "react-icons/bi";

import { ModalContent } from "./styles";

function ChangeFolderModal({ showFolderModal, handleCloseFolderModal, glb }) {
  return (
    <Modal
      show={showFolderModal}
      backdrop="static"
      keyboard={false}
      onHide={handleCloseFolderModal}
    >
      <Modal.Header closeButton>
        <Modal.Title>Change model folder</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ModalContent>
          <div className="file">
            <BiCube size={110} />
            {glb && <h6>{glb.name}</h6>}
          </div>
          <div className="folder">
            <Form.Label>Select folder </Form.Label>
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
        <Button variant="secondary" onClick={handleCloseFolderModal}>
          Close
        </Button>
        <Button variant="primary">Confirm</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ChangeFolderModal;
