import React from "react";
import { Button, Modal } from "react-bootstrap";

function DeleteModal({ handleCloseDeleteModal, showDeleteModal }) {
  return (
    <>
      <Modal show={showDeleteModal} onHide={handleCloseDeleteModal}>
        <Modal.Header closeButton>
          <Modal.Title>Delete model</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you really want to delete this model?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDeleteModal}>
            Close
          </Button>
          <Button variant="danger" onClick={handleCloseDeleteModal}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteModal;
