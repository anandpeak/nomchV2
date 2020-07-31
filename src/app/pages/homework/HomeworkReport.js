import React from "react";

import { HomeworkMixedWidget } from "./HomeworkMixedWidget.js";
import { HomeworkReportChart } from "./HomeworkReportChart.js";
import DataTable from '../../../_metronic/_partials/widgets/util/table/DataTable'

const tmpHWReportData = {
  "data": {
    "homeworks": [
      {
        "id": 3195,
        "dueDate": {
          "date": "2020-04-17 00:00:00.000000",
          "timezone_type": 3,
          "timezone": "Asia/Ulaanbaatar"
        },
        "typeId": 35,
        "typeName": "Бүрэн",
        "typeColor": "3ebfa3",
        "subjectId": 3,
        "subjectName": "Монгол хэл",
        "classId": 221,
        "personId": 6211,
        "takenScore": "0",
        "totalScore": "100"
      },
      {
        "id": 3199,
        "dueDate": {
          "date": "2020-04-15 00:00:00.000000",
          "timezone_type": 3,
          "timezone": "Asia/Ulaanbaatar"
        },
        "typeId": 35,
        "typeName": "Бүрэн",
        "typeColor": "3ebfa3",
        "subjectId": 3,
        "subjectName": "Монгол хэл",
        "classId": 221,
        "personId": 6211,
        "takenScore": "0",
        "totalScore": "100"
      },
      {
        "id": 3191,
        "dueDate": {
          "date": "2020-04-10 00:00:00.000000",
          "timezone_type": 3,
          "timezone": "Asia/Ulaanbaatar"
        },
        "typeId": 35,
        "typeName": "Бүрэн",
        "typeColor": "3ebfa3",
        "subjectId": 3,
        "subjectName": "Монгол хэл",
        "classId": 221,
        "personId": 6211,
        "takenScore": "100",
        "totalScore": "100"
      },
      {
        "id": 3187,
        "dueDate": {
          "date": "2020-04-08 00:00:00.000000",
          "timezone_type": 3,
          "timezone": "Asia/Ulaanbaatar"
        },
        "typeId": 35,
        "typeName": "Бүрэн",
        "typeColor": "3ebfa3",
        "subjectId": 3,
        "subjectName": "Монгол хэл",
        "classId": 221,
        "personId": 6211,
        "takenScore": "0",
        "totalScore": "100"
      },
      {
        "id": 3198,
        "dueDate": {
          "date": "2020-04-01 00:00:00.000000",
          "timezone_type": 3,
          "timezone": "Asia/Ulaanbaatar"
        },
        "typeId": 35,
        "typeName": "Бүрэн",
        "typeColor": "3ebfa3",
        "subjectId": 3,
        "subjectName": "Монгол хэл",
        "classId": 221,
        "personId": 6211,
        "takenScore": "0",
        "totalScore": "100"
      },
      {
        "id": 3203,
        "dueDate": {
          "date": "2020-03-11 00:00:00.000000",
          "timezone_type": 3,
          "timezone": "Asia/Ulaanbaatar"
        },
        "typeId": 35,
        "typeName": "Бүрэн",
        "typeColor": "3ebfa3",
        "subjectId": 3,
        "subjectName": "Монгол хэл",
        "classId": 221,
        "personId": 6211,
        "takenScore": "0",
        "totalScore": "100"
      },
      {
        "id": 3200,
        "dueDate": {
          "date": "2020-03-04 00:00:00.000000",
          "timezone_type": 3,
          "timezone": "Asia/Ulaanbaatar"
        },
        "typeId": 35,
        "typeName": "Бүрэн",
        "typeColor": "3ebfa3",
        "subjectId": 3,
        "subjectName": "Монгол хэл",
        "classId": 221,
        "personId": 6211,
        "takenScore": "0",
        "totalScore": "100"
      },
      {
        "id": 1905,
        "dueDate": {
          "date": "2020-01-07 00:00:00.000000",
          "timezone_type": 3,
          "timezone": "Asia/Ulaanbaatar"
        },
        "typeId": 36,
        "typeName": "Дутуу",
        "typeColor": "f9b822",
        "subjectId": 3,
        "subjectName": "Монгол хэл",
        "classId": 221,
        "personId": 3890,
        "takenScore": "50",
        "totalScore": "100"
      },
      {
        "id": 1906,
        "dueDate": {
          "date": "2020-01-06 00:00:00.000000",
          "timezone_type": 3,
          "timezone": "Asia/Ulaanbaatar"
        },
        "typeId": 35,
        "typeName": "Бүрэн",
        "typeColor": "3ebfa3",
        "subjectId": 3,
        "subjectName": "Монгол хэл",
        "classId": 221,
        "personId": 3890,
        "takenScore": "100",
        "totalScore": "100"
      },
      {
        "id": 1907,
        "dueDate": {
          "date": "2019-12-30 00:00:00.000000",
          "timezone_type": 3,
          "timezone": "Asia/Ulaanbaatar"
        },
        "typeId": 35,
        "typeName": "Бүрэн",
        "typeColor": "3ebfa3",
        "subjectId": 3,
        "subjectName": "Монгол хэл",
        "classId": 221,
        "personId": 3890,
        "takenScore": "100",
        "totalScore": "100"
      }
    ],
    "subject": {
      "subjectId": 3,
      "subjectName": "Монгол хэл",
      "counter": [
        {
          "id": 35,
          "name": "Бүрэн",
          "color": "3ebfa3",
          "count": 9
        },
        {
          "id": 36,
          "name": "Дутуу",
          "color": "f9b822",
          "count": 1
        },
        {
          "id": 37,
          "name": "Хийгээгүй",
          "color": "f4516b",
          "count": 0
        }
      ]
    },
    "message": "Амжилттай"
  },
  "success": true
}
export default class HomeworkReport extends React.Component {
  constructor(props) {
    super(props);

    this.columns = [
      {
        key: "id",
        text: "№",
        align: "left",
        width: 50,
      },
      {
        key: "date",
        text: "Огноо",
        width: 250,
        align: "left",
        sortable: true,
        clickableTd: true,
        tdClassName: "underline",
      },
      {
        key: "dueDate",
        text: "Шалгах огноо",
        width: 200,
        align: "left",
        sortable: true,
      },
      {
        key: "status",
        text: "Төлөв",
        align: "center",
        sortable: true,
        colType: 'html',
      },
      {
        key: "totalScore",
        text: "Авах оноо",
        align: "center",
        sortable: true,
      },
      {
        key: "takenScore",
        text: "Авсан оноо",
        align: "center",
        sortable: true,
      },
      {
        key: "description",
        text: "Тайлбар",
        align: "center",
        sortable: true,
      },

    ];


    this.state = {
      lessName: "",
      recordsToShow: []
    };
  }

  componentDidMount() {

    let tmpArr = [];

    tmpHWReportData.data.homeworks.forEach(homework => {
      let tmpObj = {}
      tmpObj.id = homework.id;

      tmpObj.dueDate = homework.dueDate.date.substring(0, 10);
      // tmpObj.status;

      if (homework.typeName === "Completed" || homework.typeName === "Бүрэн") {
        tmpObj['status'] = '<button type="button" class="btn btn-sm attendanceTableBtn came"><span>Бүрэн</span></button>';
      }
      else if (homework.typeName === "unfinished" || homework.typeName === "Дутуу") {
        tmpObj['status'] = '<button type="button" class="btn btn-sm  attendanceTableBtn unexcused"><span>Дутуу</span></button>';
      } else if (homework.typeName === "Unexcused" || homework.typeName === "Хийгээгүй") {
        tmpObj['status'] = '<button type="button" class="btn btn-sm  attendanceTableBtn late"><span>Хийгээгүй</span></button>';
      }



      tmpObj.totalScore = homework.totalScore;
      tmpObj.takenScore = homework.takenScore;
      // tmpObj.description = homework.description;
      tmpArr.push(tmpObj);
    })


    this.setState({ lessName: this.props.match.params.id, recordsToShow: tmpArr });
  }

  render() {
    console.log('tmpObj = ', this.state);

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
                  <div className="p-5 h-100 shadow-sm">
                    <HomeworkReportChart />
                  </div>
                </div>
              </div>
              <div className="row mt-5 shadow-sm">
                <div className="col-lg-8  p-5">
                  <DataTable config={this.config}
                    records={this.state.recordsToShow}
                    columns={this.columns}
                    tdClick={this._onTdClick}
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
