import React from "react";

import { AttendanceMixedWidget } from "./AttendanceMixedWidget.js";
import { AttendanceReportChart } from "./AttendanceReportChart.js";

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
          <div className="card shadow">
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
                  <div className="p-3 shadow h-100">
                    <AttendanceMixedWidget />
                  </div>
                </div>
                <div className="col-sm-4 px-md-2">
                  <div className="p-5 h-100 shadow">
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
                  <div className="p-5 h-100 shadow">
                    <AttendanceReportChart />
                  </div>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col shadow">
                  <span>DataTable орж ирэх</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
