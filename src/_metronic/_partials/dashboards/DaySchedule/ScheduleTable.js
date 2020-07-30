import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import AssignmentModal from "./AssigmentModal.js";

function createData(
  name,
  lesson,
  lessonName,
  userName,
  attendance,
  assignment,
  examStat
) {
  return {
    name,
    lesson,
    lessonName,
    userName,
    attendance,
    assignment,
    examStat,
  };
}

const rows = [
  createData("8:00 8:40", "Хичээл", "Монгол хэл", "Баатарсайхан", 1, 0, 1),
  createData("8:00 8:40", "Хичээл", "Математик", "Баатарсайхан", 0, 1, 0),
  createData("8:00 8:40", "Хичээл", "Хими", "Баатарсайхан", 1, 0, 0),
];

export default class ScheduleTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showAssignmetModal: false,
      assignDetailId: null,
    };

    this.assignmentModalClose = this.assignmentModalClose.bind(this);
    this.assignmentModalShow = this.assignmentModalShow.bind(this);
  }

  assignmentModalClose() {
    this.setState({ showAssignmetModal: false });
  }

  assignmentModalShow() {
    this.setState({ showAssignmetModal: true });
  }

  renderModal(lessName) {
    this.setState({ showAssignmetModal: true, assignDetailId: lessName });
  }

  isAssignment(obj) {
    if (obj.assignment === 1) {
      return (
        <button
          onClick={() => this.renderModal(obj.lessonName)}
          type="button"
          className="btn btn-success"
        >
          <span> Бүрэн</span>
        </button>
      );
    } else if (obj.assignment === 2) {
      return (
        <button
          type="button"
          onClick={() => this.renderModal(obj.lessonName)}
          className="btn btn-warning"
        >
          <span>Дутуу</span>
        </button>
      );
    } else if (obj.assignment === 0) {
      return (
        <button
          type="button"
          onClick={() => this.renderModal(obj.lessonName)}
          className="btn btn-danger"
        >
          <span> Хийгээгүй</span>
        </button>
      );
    } else if (obj.assignment === 4) {
      return (
        <button
          type="button"
          onClick={() => this.renderModal(obj.lessonName)}
          className="btn btn-secondary"
        >
          <span>Шалгаагүй</span>
        </button>
      );
    } else if (obj.assignment === 5) {
      return (
        <button
          type="button"
          onClick={() => this.renderModal(obj.lessonName)}
          className="btn btn-warning"
        >
          <span>Хийх</span>
        </button>
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <div>
        <div className="card-body">
          <TableContainer>
            <Table className="table" aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className="scheduleTableHeaderTxt">
                    <span>Цаг</span>
                  </TableCell>
                  <TableCell className="scheduleTableHeaderTxt" align="center">
                    <span>Хичээл</span>
                  </TableCell>
                  <TableCell className="scheduleTableHeaderTxt" align="center">
                    <span>Ирц</span>
                  </TableCell>
                  <TableCell className="scheduleTableHeaderTxt" align="center">
                    <span>Гэрийн даалгавар</span>
                  </TableCell>
                  <TableCell className="scheduleTableHeaderTxt" align="center">
                    <span>Шалгалт</span>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody className="scheduleTableBody">
                {rows.map((row) => (
                  <TableRow key={(row.attendance+Math.random).toString()}>
                    <TableCell
                      className="scheduleTableCellTime"
                      component="th"
                      scope="row"
                    >
                      <span>{row.name}</span>
                    </TableCell>
                    <TableCell className="scheduleTableCell" align="center">
                      <div>
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTWKfiwjCSvgs5NQUSxpyx7jhxWDl5LrVpQ036rm_0kuIzNNuPc&usqp=CAU"
                          width="50"
                          height="50"
                          className="scheduleTableImg"
                        ></img>
                        <div className="scheduleTableImgTxts">
                          <div className="scheduleTableImgLesson">
                            <span>{row.lesson}</span>
                          </div>
                          <div className="scheduleTableImgLessonName">
                            <span>{row.lessonName}</span>
                          </div>
                          <div className="scheduleTableImgUserName">
                            <span>{row.userName}</span>
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="scheduleTableCell" align="center">
                      {row.attendance ? (
                        <button type="button" className="btn btn-success">
                          <span>Ирсэн</span>
                        </button>
                      ) : (
                        <button type="button" className="btn btn-danger">
                          <span>Тасалсан</span>
                        </button>
                      )}
                    </TableCell>
                    <TableCell className="scheduleTableCell" align="center">
                      {this.isAssignment(row)}
                    </TableCell>
                    <TableCell className="scheduleTableCell" align="center">
                      {row.examStat ? (
                        <i
                          className="fa fa-chart-bar fa-3x"
                          style={{ color: "#1BC5BD" }}
                        ></i>
                      ) : (
                        <i
                          className="fa fa-chart-bar fa-3x"
                          style={{ color: "grey" }}
                        ></i>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <AssignmentModal
          assignmentModalClose={this.assignmentModalClose}
          show={this.state.showAssignmetModal}
          assignDetailId={this.state.assignDetailId}
        />
      </div>
    );
  }
}
