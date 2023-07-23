import React from 'react'
import Modal from "react-bootstrap/Modal";
import LoginForm from './LoginForm';

function MyModal({ showModal, setShowModal, modalForm, modalTitle }) {
  return (
    <Modal
      size="sm"
      show={showModal}
      onHide={() => setShowModal(false)}
      aria-labelledby="example-modal-sizes-title-sm"
    >
      <Modal.Header className="bg-secondary" closeButton closeVariant="white">
        <Modal.Title id="example-modal-sizes-title-sm">
          {modalTitle}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-secondary">{modalForm}</Modal.Body>
    </Modal>
  );
}

export default MyModal