import React from "react";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import { SeasonGradeMixedWidget } from "./SeasonGradeMixedWidget";
import SeasonGradeMixedChart from "./SeasonGradeMixedChart";
import DataTable from "../../../_metronic/_partials/widgets/util/table/DataTable";
import ModalMain from "../../../_metronic/_partials/modal/ModalMain";
import { SeasonGradeModalWidget } from "./SeasonGradeModalWidget";

const seasonsScoreInit = {
  "data": {
    "seasons": [
      {
        "seasonId": 79,
        "seasonName": "3-р улирал",
        "isCurrent": true,
        "startDate": {
          "date": "2019-12-01 00:00:00.000000",
          "timezone_type": 3,
          "timezone": "Asia/Ulaanbaatar"
        },
        "endDate": {
          "date": "2020-07-03 00:00:00.000000",
          "timezone_type": 3,
          "timezone": "Asia/Ulaanbaatar"
        }
      },
      {
        "seasonId": 74,
        "seasonName": "2-р улирал",
        "isCurrent": false,
        "startDate": {
          "date": "2019-11-04 00:00:00.000000",
          "timezone_type": 3,
          "timezone": "Asia/Ulaanbaatar"
        },
        "endDate": {
          "date": "2019-11-30 00:00:00.000000",
          "timezone_type": 3,
          "timezone": "Asia/Ulaanbaatar"
        }
      },
      {
        "seasonId": 53,
        "seasonName": "1-р улирал",
        "isCurrent": false,
        "startDate": {
          "date": "2019-09-01 00:00:00.000000",
          "timezone_type": 3,
          "timezone": "Asia/Ulaanbaatar"
        },
        "endDate": {
          "date": "2019-11-03 00:00:00.000000",
          "timezone_type": 3,
          "timezone": "Asia/Ulaanbaatar"
        }
      },
      {
        "seasonId": 78,
        "seasonName": "I хагас",
        "isCurrent": false,
        "startDate": {
          "date": "2019-09-01 00:00:00.000000",
          "timezone_type": 3,
          "timezone": "Asia/Ulaanbaatar"
        },
        "endDate": {
          "date": "2019-12-31 00:00:00.000000",
          "timezone_type": 3,
          "timezone": "Asia/Ulaanbaatar"
        }
      }
    ],
    "selectedSeasonId": "79",
    "students": [
      {
        "studentRelationId": 5458,
        "studentId": 2411,
        "studentCode": "SM1801005",
        "firstName": "Ариунзул",
        "lastName": "Тэмүүлин",
        "smallPhoto": "https://www.nomch.mn/media/cache/small_photo/uploads/images/2823122998ff7453344237f964c76b4cbc68caee.jpeg",
        "classId": 220,
        "className": "2В",
        "gradeId": 128,
        "schoolId": 1,
        "schoolShortName": "Тестийн сургууль"
      },
      {
        "studentRelationId": 6218,
        "studentId": 2434,
        "studentCode": "M01",
        "firstName": "Амгаланбат",
        "lastName": "Баатар",
        "smallPhoto": "https://www.nomch.mn/media/cache/small_photo/uploads/images/7684d0350186423d846f1854a2192351de3c2fda.png",
        "classId": 221,
        "className": "2Б",
        "gradeId": 128,
        "schoolId": 1,
        "schoolShortName": "Тестийн сургууль"
      },
      {
        "studentRelationId": 5445,
        "studentId": 2450,
        "studentCode": "M17",
        "firstName": "Нандин-Эрдэнэ",
        "lastName": "Саруул",
        "smallPhoto": "https://www.nomch.mn/media/cache/small_photo/uploads/images/3c4abe3f8aac10dafa44c634c8d052e6d3b5ac4a.jpeg",
        "classId": 221,
        "className": "2Б",
        "gradeId": 128,
        "schoolId": 1,
        "schoolShortName": "Тестийн сургууль"
      },
      {
        "studentRelationId": 5463,
        "studentId": 6446,
        "studentCode": "TS1906017",
        "firstName": "Баярт",
        "lastName": "Төгс",
        "smallPhoto": "https://www.nomch.mn/media/cache/small_photo/uploads/images/49f67d366f480f33cbc02f20dab06d5784199419.png",
        "classId": 241,
        "className": "6-2",
        "gradeId": 132,
        "schoolId": 1,
        "schoolShortName": "Тестийн сургууль"
      },
      {
        "studentRelationId": 5464,
        "studentId": 6490,
        "studentCode": "TS2006009",
        "firstName": "Тэлмэн",
        "lastName": "Сансар",
        "smallPhoto": null,
        "classId": 372,
        "className": "6-3",
        "gradeId": 132,
        "schoolId": 1,
        "schoolShortName": "Тестийн сургууль"
      }
    ],
    "selectedStudentId": 2434,
    "studentResults": [],
    "groups": [
      {
        "groupId": 421,
        "groupName": "Монгол хэл | 2Б",
        "ordering": 3,
        "teacherName": "Оч",
        "teacherImage": "https://www.nomch.mn/media/cache/medium_photo/uploads/images/525cb4c0e0c4e5bab240917a595ff05d10c9e30c.png",
        "exam": null
      },
      {
        "groupId": 3725,
        "groupName": "Монгол хэл | 2Б",
        "ordering": 3,
        "teacherName": "Туяа",
        "teacherImage": "https://www.nomch.mn/media/cache/medium_photo/uploads/images/dbb89656fceaad84f86cf56876ca21579a0308c5.jpeg",
        "exam": null
      },
      {
        "groupId": 3746,
        "groupName": "Монгол хэл | 2Б",
        "ordering": 3,
        "teacherName": "Ундрал",
        "teacherImage": "https://www.nomch.mn/media/cache/medium_photo/uploads/images/00c35987f3ec72bcd0c45dfc9fd87410df5ad46b",
        "exam": null
      },
      {
        "groupId": 422,
        "groupName": "Англи хэл | 2Б",
        "ordering": 6,
        "teacherName": "Ган-Эрдэнэ",
        "teacherImage": "https://www.nomch.mn/media/cache/medium_photo/uploads/images/31ff739b3ba0c66eca2a3b43befd85e1b102c9f9.png",
        "exam": null
      },
      {
        "groupId": 3745,
        "groupName": "Нийгмийн ухаан | 2Б",
        "ordering": 11,
        "teacherName": "Жаргалсайхан 1",
        "teacherImage": "http://dev.nomch.mn/media/cache/medium_photo/uploads/images/5f23eb682b94d.jpeg",
        "exam": {
          "examId": 16667,
          "examStudentCount": 20,
          "averageScore": "58.40",
          "maxScore": "89.30",
          "minScore": "32.20",
          "groupName": "Нийгмийн ухаан | 2Б",
          "teacherName": "Жаргалсайхан 1",
          "teacherImage": "http://dev.nomch.mn/media/cache/medium_photo/uploads/images/5f23eb682b94d.jpeg",
          "studentScore": "46.10",
          "studentPlace": null,
          "scoreTypeCode": "III",
          "scoreTypeName": "III"
        }
      },
      {
        "groupId": 424,
        "groupName": "Оюуны хөгжил | 2Б",
        "ordering": 13,
        "teacherName": "Туяа",
        "teacherImage": "https://www.nomch.mn/media/cache/medium_photo/uploads/images/dbb89656fceaad84f86cf56876ca21579a0308c5.jpeg",
        "exam": {
          "examId": 16337,
          "examStudentCount": 0,
          "averageScore": "60.00",
          "maxScore": "90.00",
          "minScore": "20.00",
          "groupName": "Оюуны хөгжил | 2Б",
          "teacherName": "Туяа",
          "teacherImage": "https://www.nomch.mn/media/cache/medium_photo/uploads/images/dbb89656fceaad84f86cf56876ca21579a0308c5.jpeg",
          "studentScore": "80.00",
          "studentPlace": "3-6",
          "scoreTypeCode": "VII",
          "scoreTypeName": "VII"
        }
      },
      {
        "groupId": 398,
        "groupName": "Сагсан бөмбөг | B-04-Ган-Эрдэнэ",
        "ordering": 14,
        "teacherName": "Ган-Эрдэнэ",
        "teacherImage": "https://www.nomch.mn/media/cache/medium_photo/uploads/images/31ff739b3ba0c66eca2a3b43befd85e1b102c9f9.png",
        "exam": null
      },
      {
        "groupId": 361,
        "groupName": "Теннис | 10-р анги",
        "ordering": 15,
        "teacherName": "Оч",
        "teacherImage": "https://www.nomch.mn/media/cache/medium_photo/uploads/images/525cb4c0e0c4e5bab240917a595ff05d10c9e30c.png",
        "exam": null
      },
      {
        "groupId": 426,
        "groupName": "Монгол бичиг | 2Б",
        "ordering": 17,
        "teacherName": "Билгүүн",
        "teacherImage": "https://www.nomch.mn/media/cache/medium_photo/uploads/images/e55b76d6d3c8146385489aaaecb3534c9355eec5.png",
        "exam": null
      },
      {
        "groupId": 3750,
        "groupName": "Мат сонгон",
        "ordering": 22,
        "teacherName": "Оч",
        "teacherImage": "https://www.nomch.mn/media/cache/medium_photo/uploads/images/525cb4c0e0c4e5bab240917a595ff05d10c9e30c.png",
        "exam": null
      },
      {
        "groupId": 423,
        "groupName": "Биологи | 2Б",
        "ordering": null,
        "teacherName": "Ундрал",
        "teacherImage": "https://www.nomch.mn/media/cache/medium_photo/uploads/images/00c35987f3ec72bcd0c45dfc9fd87410df5ad46b",
        "exam": {
          "examId": 16699,
          "examStudentCount": 20,
          "averageScore": null,
          "maxScore": null,
          "minScore": null,
          "groupName": "Биологи | 2Б",
          "teacherName": "Ундрал",
          "teacherImage": "https://www.nomch.mn/media/cache/medium_photo/uploads/images/00c35987f3ec72bcd0c45dfc9fd87410df5ad46b",
          "studentScore": "45.00",
          "studentPlace": null,
          "scoreTypeCode": null,
          "scoreTypeName": null
        }
      }
    ],
    "message": "Амжилттай"
  },
  "success": true
}

const modalColumns = [
  {
    key: "status",
    text: "",
    align: "center",
    sortable: false,
  },
  {
    key: "totalScore",
    text: "Авах оноо",
    sortable: false,
    align: "left",
  },
  {
    key: "takenScore",
    text: "Авсан оноо",
    align: "left",
    sortable: true,
  },
  {
    key: "performance",
    text: "Гүйцэтгэл",
    align: "left",
    sortable: true,
  },
]

const columns = [
  {
    key: "id",
    text: "№",
    align: "center",
    width: 50,
    sortable: false,
  },
  {
    key: "lesson",
    text: "Хичээл",
    sortable: true,
    align: "left",
    clickableTd: true,
    tdClassName: "underline",
  },
  {
    key: "teacher",
    text: "Багш",
    width: 150,
    align: "left",
    sortable: true,
  },
  {
    key: "credit",
    text: "Багц цаг",
    align: "left",
    sortable: true,
  },
  {
    key: "performance",
    text: "Гүйцэтгэл",
    align: "left",
    sortable: true,
  },
  {
    key: "assessment",
    text: "Үнэлгээ",
    sortable: true,
    align: "left",
  },
  {
    key: "quality",
    width: 50,
    text: "Чансаа",
    sortable: true,
    align: "left",
  },
];

const config = {
  show_all: true,
  show_info: false,
  show_pagination: false,
  dynamic: true,
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

export default class SeasonGradeDashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tabValue: 0,
      showModal: false,
      recordToShow: [],
      groupAvg: [],
      selfAvg: [],
      lessList: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.renderModal = this.renderModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  componentDidMount() {
    let tmpArr = [];
    let groupAvg = [];
    let selfAvg = [];
    let lessList = [];

    console.log('seasonsScoreInit = ', seasonsScoreInit)

    seasonsScoreInit.data.groups.forEach(group => {
      let tmpObj = {};

      tmpObj.lesson = group.groupName;
      tmpObj.id = group.groupId;
      tmpObj.teacher = group.teacherName;

      if (group.exam) {
        tmpObj.performance = group.exam.studentScore;
        tmpObj.assessment = group.exam.scoreTypeName;
        groupAvg.push(group.exam.averageScore);
        selfAvg.push(group.exam.studentScore);
      } else {
        groupAvg.push(0);
        selfAvg.push(0);
      }
      tmpObj.clickable = true;

      lessList.push(group.groupName);

      tmpArr.push(tmpObj);
    })

    this.setState({ recordToShow: tmpArr, groupAvg, selfAvg, lessList })
  }

  handleChange(event, newValue) {
    this.setState({ tabValue: newValue });
  }

  renderTabs() {
    const rows = ["1-р улирал", "2-р улирал"];
    let tabRows = rows.map((row) => <Tab label={<span>{row}</span>} />);

    return tabRows;
  }

  renderModal() {
    this.setState({ showModal: true });
  }
  hideModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="card shadow-sm">
            <div className="card">
              <Tabs
                value={this.state.tabValue}
                onChange={this.handleChange}
                indicatorColor="secondary"
                textColor="secondary"
              >
                {this.renderTabs()}
              </Tabs>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-4 px-md-0">
                  <div className="p-3 shadow-sm">
                    <div className="row">
                      <div className="col-md-5 px-md-0 ">
                        <div className="p-3">
                          <SeasonGradeMixedWidget />
                        </div>
                      </div>
                      <div className="col-md-7 seasonGradeWidgetTxt px-md-3">
                        <div className="row">
                          <div className="col-5">
                            <span className="seasonGradeWidgetTxtKey">
                              Гүйцэтгэл
                            </span>
                          </div>
                          <div className="seasonGradeWidgetTxtValue">
                            <span className="seasonGradeWidgetTxtValue">
                              87
                            </span>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-5">
                            <span className="seasonGradeWidgetTxtKey">
                              Үнэлгээ
                            </span>
                          </div>
                          <div className="seasonGradeWidgetTxtValue">
                            <span className="seasonGradeWidgetTxtValue">
                              34-35 | 67
                            </span>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-5">
                            <span className="seasonGradeWidgetTxtKey">
                              Чансаа
                            </span>
                          </div>
                          <div className="seasonGradeWidgetTxtValue">
                            <span className="seasonGradeWidgetTxtValue">
                              34-35 | 67
                            </span>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-5">
                            <span className="seasonGradeWidgetTxtKey">
                              Чанар
                            </span>
                          </div>
                          <div className="seasonGradeWidgetTxtValue">
                            <span className="seasonGradeWidgetTxtValue">
                              34-35 | 67
                            </span>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-5">
                            <span className="seasonGradeWidgetTxtKey">
                              Амжилт
                            </span>
                          </div>
                          <div className="seasonGradeWidgetTxtValue">
                            <span className="seasonGradeWidgetTxtValue">
                              34-35 | 67
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-2 mt-3 shadow-sm">
                    <span>
                      <b>A</b> Үнэлгээтэй хичээл <b>7</b>
                    </span>
                  </div>
                  <div className="p-2 mt-3 shadow-sm">
                    <span>
                      <b>A</b> Үнэлгээтэй хичээл <b>7</b>
                    </span>
                  </div>
                  <div className="p-2 mt-3 shadow-sm">
                    <span>
                      <b>A</b> Үнэлгээтэй хичээл <b>7</b>
                    </span>
                  </div>
                </div>
                <div className="col-md-8 px-md-3">
                  <div className="p-3 shadow-sm">
                    <SeasonGradeMixedChart
                      groupAvg={this.state.groupAvg}
                      selfAvg={this.state.selfAvg}
                      lessList={this.state.lessList}
                    />
                  </div>
                  <div className="p-3 mt-3 shadow-sm">
                    <DataTable
                      className="table table-bordered"
                      config={config}
                      records={this.state.recordToShow}
                      columns={columns}
                      tdClick={this.renderModal}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ModalMain
            title="1r uliral, lessName"
            hideModal={this.hideModal}
            show={this.state.showModal}
          >
            <div className="row shadow-sm">
              <div className="col-md-2 seasonGradeModalWidget px-md-0">
                <div className="p-3 h-100">
                  <SeasonGradeModalWidget />
                </div>
              </div>
              <div className="col-md-7 seasonGradeModalGroup px-md-2">
                <div className="row">
                  <div className="col-md-12">
                    <ul className="seasonGrade-list-group">
                      <li className="row">
                        <span className="col-md seasonGradeList-group-key">
                          Хичээл
                        </span>
                        <span className="col-md seasonGradeList-group-value">
                          Математик
                        </span>
                      </li>
                      <li className="row">
                        <span className="col-md seasonGradeList-group-key">
                          Багш
                        </span>
                        <span className="col-md seasonGradeList-group-value">
                          Математик
                        </span>
                      </li>
                      <li className="row">
                        <span className="col-md seasonGradeList-group-key">
                          Гүйцэтгэл
                        </span>
                        <span className="col-md seasonGradeList-group-value">
                          Математик
                        </span>
                      </li>
                      <li className="row">
                        <span className="col-md seasonGradeList-group-key">
                          Үнэлгээ
                        </span>
                        <span className="col-md seasonGradeList-group-value">
                          Математик
                        </span>
                      </li>
                      <li className="row">
                        <span className="col-md seasonGradeList-group-key">
                          Чансаа
                        </span>
                        <span className="col-md seasonGradeList-group-value">
                          Математик
                        </span>
                      </li>
                      <li className="row">
                        <span className="col-md seasonGradeList-group-key">
                          Max
                        </span>
                        <span className="col-md seasonGradeList-group-value">
                          Математик
                        </span>
                      </li>
                      <li className="row">
                        <span className="col-md seasonGradeList-group-key">
                          Min
                        </span>
                        <span className="col-md seasonGradeList-group-value">
                          Математик
                        </span>
                      </li>
                      <li className="row">
                        <span className="col-md seasonGradeList-group-key">
                          Avg
                        </span>
                        <span className="col-md seasonGradeList-group-value">
                          Математик
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 p-5 shadow-sm mt-5">
                <DataTable
                  className="table table-bordered"
                  config={config}
                  records={records}
                  columns={modalColumns}
                  tdClick={this.renderModal}
                />
              </div>
            </div>
          </ModalMain>
        </div>
      </div>
    );
  }
}
