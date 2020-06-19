import React from "react";

import { AttendanceMixedWidget } from "./AttendanceMixedWidget.js";
import { AttendanceReportChart } from "./AttendanceReportChart.js";
import DataTable from "../../../_metronic/_partials/widgets/util/table/DataTable";

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
    clickableTd: true,
    tdClassName: "underline",
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

const treeData = [
  {
    key: 85,
    title: "2019-2020",
    children: [
      {
        key: 219,
        gradeId: 219,
        title: "Монгол хэл",
      },
      {
        key: 220,
        gradeId: 220,
        title: "Монгол хэл",
      },
      {
        key: 221,
        gradeId: 221,
        title: "Монгол хэл",
      },
      {
        key: 222,
        gradeId: 222,
        title: "Монгол хэл",
      },
      {
        key: 223,
        gradeId: 223,
        title: "Монгол хэл",
      },
      {
        key: 225,
        gradeId: 225,
        title: "Монгол хэл",
      },
      {
        key: 226,
        gradeId: 226,
        title: "Монгол хэл",
      },
      {
        key: 227,
        gradeId: 227,
        title: "Монгол хэл",
      },
      {
        key: 228,
        gradeId: 228,
        title: "Монгол хэл",
      },
      {
        key: 230,
        gradeId: 230,
        title: "1Монгол хэл",
      },
      {
        key: 231,
        gradeId: 231,
        title: "1Монгол хэл",
      },
      {
        key: 232,
        gradeId: 232,
        title: "1Монгол хэл",
      },
    ],
  },
];

const records = [
  {
    id: 2434,
    checked_date: "M01",
    clickable: true,
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
    status: "Амгаланбат",
    score: "Баатар",
    checked_teacher: "null",
    description: "null",
  },
];

export default class AttendanceReport extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lessName: "",
    };
  }

  componentDidMount() {
    console.log(this.props.match.params.id);

    this.setState({ lessName: this.props.match.params.id });
  }

  render() {
    return (
      <div className="fullScreenMode">
        <div className="container-fluid">
          <div className="card shadow-sm">
            <div className="card-header">
              <div className="row">
                <span>
                  <b>{this.state.lessName}</b>
                </span>
                <div className="backButtonAttendanceReport">
                  <a href="/attendance">Буцах</a>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-sm-2 px-md-2">
                  <div className="p-3 shadow-sm h-100">
                    <AttendanceMixedWidget />
                  </div>
                </div>
                <div className="col-sm-4 px-md-2">
                  <div className="p-5 h-100 shadow-sm">
                    <div className="row">
                      <div className="col">
                        <div
                          className="attendanceReportTableCell"
                          style={{ backgroundColor: "rgba(62, 191, 163, 0.8)" }}
                        >
                          <div className="attendanceReportTableCellLeftSide">
                            <span>Ирсэн</span>
                            <span>67%</span>
                          </div>
                          <div className="attendanceReportTableCellRighSide">
                            <span>28</span>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div
                          className="attendanceReportTableCell"
                          style={{ backgroundColor: "rgb(244, 81, 107)" }}
                        >
                          <div className="attendanceReportTableCellLeftSide">
                            <span>Тасалсан</span>
                            <span>67%</span>
                          </div>
                          <div className="attendanceReportTableCellRighSide">
                            <span>28</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-5">
                      <div className="col">
                        <div
                          className="attendanceReportTableCell"
                          style={{ backgroundColor: "rgb(113, 106, 202)" }}
                        >
                          <div className="attendanceReportTableCellLeftSide">
                            <span>Өвчтэй</span>
                            <span>67%</span>
                          </div>
                          <div className="attendanceReportTableCellRighSide">
                            <span>28</span>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div
                          className="attendanceReportTableCell"
                          style={{ backgroundColor: "rgb(249, 184, 34)" }}
                        >
                          <div className="attendanceReportTableCellLeftSide">
                            <span>Чөлөөтэй</span>
                            <span>67%</span>
                          </div>
                          <div className="attendanceReportTableCellRighSide">
                            <span>28</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-5">
                      <div className="col">
                        <div
                          className="attendanceReportTableCell"
                          style={{ backgroundColor: "rgb(87, 89, 98)" }}
                        >
                          <div className="attendanceReportTableCellLeftSide">
                            <span>Хоцорсон</span>
                            <span>67%</span>
                          </div>
                          <div className="attendanceReportTableCellRighSide">
                            <span>28</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 px-md-2">
                  <div className="p-5 h-100 shadow-sm">
                    <AttendanceReportChart />
                  </div>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col shadow-sm">
                  <DataTable
                    className="table table-bordered"
                    config={config}
                    records={records}
                    columns={columns}
                    tdClick={this.renderModal}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
