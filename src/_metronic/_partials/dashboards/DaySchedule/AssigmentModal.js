import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

// import Datatable from "./Datatable";


export default function AssignmentModal(props) {
  return (
    <>
      <Modal
        dialogClassName="modal-70w"
        aria-labelledby="example-custom-modal-styling-title"
        show={props.show}
        onHide={props.assignmentModalClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <span>{props.assignDetailId}</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="assignmentDetailBody">
            <div className="container">
              <div className="row">
                <div className="col assignmentDetailBodyKeys">
                  <span>Шалгах огноо</span>
                </div>
                <div className="col">
                  <span>2020-06-15</span>
                </div>
              </div>
              <div className="row">
                <div className="col assignmentDetailBodyKeys">
                  <span>Авах оноо</span>
                </div>
                <div className="col">
                  <span>100</span>
                </div>
              </div>
              <div className="row">
                <div className="col assignmentDetailBodyKeys">
                  <span>Даалгавар</span>
                </div>
                <div className="col">
                  <span>
                    1. Сурах бичэгийн хуудас 4-5 дасгал ажлыг гүйцэтгэх
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="col assignmentDetailBodyKeys">
                  <span>Файл</span>
                </div>
                <div className="col">
                  <span>pdf байх</span>
                </div>
              </div>
            </div>
            {/* <Datatable
              className="table table-bordered"
              config={this.config}
              columns={this.columns}
            /> */}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.assignmentModalClose}>
            <span>Хаах</span>
          </Button>
          <Button variant="primary" onClick={props.assignmentModalClose}>
            <span>Хэвлэх</span>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
