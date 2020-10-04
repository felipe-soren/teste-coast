import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { BiFolder } from "react-icons/bi";

import { ModalContent } from "./styles";

function NewFolderModal({ showNewFolderModal, handleCloseNewFolderModal }) {
  return (
    <Modal
      show={showNewFolderModal}
      backdrop="static"
      keyboard={false}
      onHide={handleCloseNewFolderModal}
    >
      <Modal.Header closeButton>
        <Modal.Title>Create new folder</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ModalContent>
          <div className="file">
            <BiFolder size={110} />
          </div>
          <div className="folder">
            <Form.Label>Folder name </Form.Label>
            <Form.Control
              as="input"
              onChange={(e) => console.log(e.target.value)}
            />
          </div>
        </ModalContent>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseNewFolderModal}>
          Close
        </Button>
        <Button variant="primary">Confirm</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default NewFolderModal;
