import React from "react";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import DataTable from "../../widgets/util/table/DataTable";

const columns = [
  {
    key: "id",
    text: "№",
    align: "center",
    width: 50,
    sortable: false,
  },
  {
    key: "status",
    text: "Төлөв",
    sortable: false,
    align: "center",
    colType: "html",
  },
  {
    key: "score",
    text: "Оноо",
    align: "left",
    sortable: true,
  },
  {
    key: "checked_date",
    text: "Шалгасан огноо",
    align: "left",
    sortable: true,
  },
  {
    key: "checked_teacher",
    text: "Шалгасан багш",
    align: "right",
    clickableTd: true,
    tdClassName: "underline",
    sortable: true,
  },
  {
    key: "description",
    text: "Тайлбар",
    sortable: true,
    align: "left",
  },
];

const config = {
  show_all: true,
  show_info: false,
  show_pagination: false,
  dynamic: false,
  show_filter: false,
  sort: {
    column: "createdDate",
    order: "DESC",
  },
  excelFileName: "Excel",
};

const records = [
  {
    id: 2434,
    checked_date: "M01",
    status: "Амгаланбат",
    score: "Баатар",
    checked_teacher: "null",
    description: "null",
  },
  {
    id: 2435,
    checked_date: "M01",
    status: "Амгаланбат",
    score: "Баатар",
    checked_teacher: "null",
    description: "null",
  },

  {
    id: 2436,
    checked_date: "M01",
    status: "Амгаланбат1",
    score: "Баатар",
    checked_teacher: "null",
    description: "null",
  },
];

export default function AssignmentModal(props) {
  console.log("asdf = ", config);
  
  return (
    <>
      <Modal
        dialogClassName="modal-80w"
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
              <div className="row">
                <div className="col">
                  <DataTable
                    className="table table-bordered"
                    config={config}
                    records={records}
                    columns={columns}
                  />
                </div>
              </div>
            </div>
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
