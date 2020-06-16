import React from "react";

import { HomeworkMixedWidget } from "./HomeworkMixedWidget.js";
import { HomeworkReportChart } from "./HomeworkReportChart.js";

export default class HomeworkReport extends React.Component {
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
                <span>{this.state.lessName}</span>
                <div className="backButtonAttendanceReport">
                  <a href="/homework">Буцах</a>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-sm-2 px-md-2">
                  <div className="p-3 shadow h-100">
                    <HomeworkMixedWidget />
                  </div>
                </div>
                <div className="col-sm-4 px-md-2">
                  <div className="p-5 h-100 shadow">
                    <div className="row">
                      <div className="col">
                        <div
                          className="attendanceReportTableCell"
                          style={{ backgroundColor: "rgb(87, 89, 98)" }}
                        >
                          <div className="attendanceReportTableCellLeftSide">
                            <span>Хийх</span>
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
                          style={{ backgroundColor: "rgba(62, 191, 163, 0.8)" }}
                        >
                          <div className="attendanceReportTableCellLeftSide">
                            <span>Бүрэн</span>
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
                            <span>Дутуу</span>
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
                          style={{ backgroundColor: "rgb(244, 81, 107)" }}
                        >
                          <div className="attendanceReportTableCellLeftSide">
                            <span>Хийгээгүй</span>
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
                          style={{ backgroundColor: "rgb(87, 89, 98)" }}
                        >
                          <div className="attendanceReportTableCellLeftSide">
                            <span>Шалгуулаагүй</span>
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
                    <HomeworkReportChart />
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
