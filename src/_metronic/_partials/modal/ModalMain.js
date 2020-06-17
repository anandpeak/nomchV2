import React from "react";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function ModalMain(props, children) {
  console.log("props = ", props);
  return (
    <>
      <Modal
        dialogClassName="modal-80w"
        aria-labelledby="example-custom-modal-styling-title"
        show={props.show}
        onHide={props.hideModal}
      >
          <Modal.Header closeButton>
            <Modal.Title>
              <span>{props.title}</span>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="assignmentDetailBody">
              <div className="container">{props.children}</div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={props.hideModal}>
              <span>Хаах</span>
            </Button>
            <Button variant="primary" onClick={props.hideModal}>
              <span>Хэвлэх</span>
            </Button>
          </Modal.Footer>
      </Modal>
    </>
  );
}
