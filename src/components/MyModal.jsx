import React from 'react'
import Modal from "react-bootstrap/Modal";

function MyModal({ showModal, setShowModal, modalForm, modalTitle }) {
  return (
    <Modal
      size="sm"
      show={showModal}
      onHide={() => setShowModal(false)}
      aria-labelledby="example-modal-sizes-title-sm"
    >
      <Modal.Header className="text-bg-light" closeButton>
        <Modal.Title id="example-modal-sizes-title-sm">
          {modalTitle}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-bg-light">{modalForm}</Modal.Body>
    </Modal>
  );
}

export default MyModal