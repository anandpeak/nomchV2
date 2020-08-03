import React from "react";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import ExamDashboardMixedChart from "./ExamDashboardMixedChart.js";
import { ExamModalMixedWidget } from "./ExamModalMixedWidget";
import DataTable from "../../../_metronic/_partials/widgets/util/table/DataTable";
import ModalMain from "../../../_metronic/_partials/modal/ModalMain";
import TreeView from "../../../_metronic/_partials/widgets/util/tree/TreeView";

const examGroupData = {
  "data": {
    "exams": [
      {
        "id": 16668,
        "date": "2020-03-15",
        "name": "Явцын шалгалт ",
        "description": "",
        "min": "23.00",
        "max": "95.00",
        "avg": "78.15",
        "studentCount": 20,
        "place": "20",
        "studentScore": "43.00",
        "studentDescription": null
      }, {
        "id": 16673,
        "date": "2020-03-17",
        "name": "Явцын шалгалт ",
        "description": "",
        "min": "23.00",
        "max": "95.00",
        "avg": "50.15",
        "studentCount": 20,
        "place": "20",
        "studentScore": "40.00",
        "studentDescription": null
      },
      {
        "id": 16660,
        "date": "2020-03-19",
        "name": "Явцын шалгалт ",
        "description": "",
        "min": "23.00",
        "max": "95.00",
        "avg": "68.15",
        "studentCount": 20,
        "place": "20",
        "studentScore": "43.00",
        "studentDescription": null
      }
    ],
    "pageSize": 10,
    "page": 1,
    "message": "Амжилттай"
  },
  "success": true
}

const examInitData = {
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
    "selectedSeasonId": 79,
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
    "groups": [
      {
        "groupId": 421,
        "groupName": "Монгол хэл | 2Б",
        "ordering": 3,
        "teacherName": "Оч",
        "teacherImage": "https://www.nomch.mn/media/cache/medium_photo/uploads/images/525cb4c0e0c4e5bab240917a595ff05d10c9e30c.png",
        "examCount": 0
      },
      {
        "groupId": 3725,
        "groupName": "Монгол хэл | 2Б",
        "ordering": 3,
        "teacherName": "Туяа",
        "teacherImage": "https://www.nomch.mn/media/cache/medium_photo/uploads/images/dbb89656fceaad84f86cf56876ca21579a0308c5.jpeg",
        "examCount": 0
      },
      {
        "groupId": 3746,
        "groupName": "Монгол хэл | 2Б",
        "ordering": 3,
        "teacherName": "Ундрал",
        "teacherImage": "https://www.nomch.mn/media/cache/medium_photo/uploads/images/00c35987f3ec72bcd0c45dfc9fd87410df5ad46b",
        "examCount": 0
      },
      {
        "groupId": 422,
        "groupName": "Англи хэл | 2Б",
        "ordering": 6,
        "teacherName": "Ган-Эрдэнэ",
        "teacherImage": "https://www.nomch.mn/media/cache/medium_photo/uploads/images/31ff739b3ba0c66eca2a3b43befd85e1b102c9f9.png",
        "examCount": 0
      },
      {
        "groupId": 3745,
        "groupName": "Нийгмийн ухаан | 2Б",
        "ordering": 11,
        "teacherName": "Жаргалсайхан 1",
        "teacherImage": "http://dev.nomch.mn/media/cache/medium_photo/uploads/images/5f23eb682b94d.jpeg",
        "examCount": 1
      },
      {
        "groupId": 424,
        "groupName": "Оюуны хөгжил | 2Б",
        "ordering": 13,
        "teacherName": "Туяа",
        "teacherImage": "https://www.nomch.mn/media/cache/medium_photo/uploads/images/dbb89656fceaad84f86cf56876ca21579a0308c5.jpeg",
        "examCount": 0
      },
      {
        "groupId": 398,
        "groupName": "Сагсан бөмбөг | B-04-Ган-Эрдэнэ",
        "ordering": 14,
        "teacherName": "Ган-Эрдэнэ",
        "teacherImage": "https://www.nomch.mn/media/cache/medium_photo/uploads/images/31ff739b3ba0c66eca2a3b43befd85e1b102c9f9.png",
        "examCount": 0
      },
      {
        "groupId": 361,
        "groupName": "Теннис | 10-р анги",
        "ordering": 15,
        "teacherName": "Оч",
        "teacherImage": "https://www.nomch.mn/media/cache/medium_photo/uploads/images/525cb4c0e0c4e5bab240917a595ff05d10c9e30c.png",
        "examCount": 0
      },
      {
        "groupId": 426,
        "groupName": "Монгол бичиг | 2Б",
        "ordering": 17,
        "teacherName": "Билгүүн",
        "teacherImage": "https://www.nomch.mn/media/cache/medium_photo/uploads/images/e55b76d6d3c8146385489aaaecb3534c9355eec5.png",
        "examCount": 0
      },
      {
        "groupId": 3750,
        "groupName": "Мат сонгон",
        "ordering": 22,
        "teacherName": "Оч",
        "teacherImage": "https://www.nomch.mn/media/cache/medium_photo/uploads/images/525cb4c0e0c4e5bab240917a595ff05d10c9e30c.png",
        "examCount": 0
      },
      {
        "groupId": 423,
        "groupName": "Биологи | 2Б",
        "ordering": null,
        "teacherName": "Ундрал",
        "teacherImage": "https://www.nomch.mn/media/cache/medium_photo/uploads/images/00c35987f3ec72bcd0c45dfc9fd87410df5ad46b",
        "examCount": 0
      }
    ],
    "message": "Амжилттай"
  },
  "success": true
}

const examDetailData = {
  "data": {
    "exam": {
      "id": 16668,
      "date": "2020-05-15",
      "name": "Явцын шалгалт ",
      "description": "",
      "min": "23.00",
      "max": "95.00",
      "avg": "78.15",
      "studentCount": 20,
      "place": "20",
      "studentScore": "23.00",
      "studentDescription": null,
      "questions": []
    },
    "message": "Амжилттай"
  },
  "success": true
}

const columns = [
  {
    key: "id",
    text: "№",
    align: "center",
    width: 50,
    sortable: false,
  },
  {
    key: "date",
    text: "Шалгалтын огноо",
    sortable: false,
    align: "center",
  },
  {
    key: "name",
    text: "Нэр",
    align: "left",
    sortable: true,
    clickableTd: true,
    tdClassName: "underline",
  },
  {
    key: "totalScore",
    text: "Авах оноо",
    align: "left",
    sortable: true,
  },
  {
    key: "takenScore",
    text: "Авсан оноо",
    align: "left",
    sortable: true,
  },
  {
    key: "quality",
    text: "Чансаа",
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

class ExamDashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tabValue: 0,
      showModel: false,
      dataTreeToShow: [],
      selectedGroupId: [],
      initRecordToShow: [],
      groupAvg: [],
      selfAvg: [],
      dateList: [],
      examDetail: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.renderModal = this.renderModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }


  componentDidMount() {
    console.log('exam = ', examInitData);

    let initTreeData = [{
      key: 0,
      title: "Бүгд",
      children: [],
    }]

    examInitData.data.groups.forEach(group => {
      let tmpObj = {}

      tmpObj.key = group.groupId;
      tmpObj.gradeId = group.groupId;
      tmpObj.title = group.groupName;

      initTreeData[0].children.push(tmpObj);
    })

    this.setState({ dataTreeToShow: initTreeData })
  }

  handleChange(event, newValue) {
    this.setState({ tabValue: newValue });
  }

  renderTabs() {
    const rows = ["1-р улирал", "2-р улирал"];
    let tabRows = rows.map((row) => <Tab label={<span>{row}</span>} />);

    return tabRows;
  }

  renderModal(row, column) {
    this.setState({ showModel: true });
  }

  hideModal() {
    this.setState({ showModel: false });
  }

  onTreeSelected = (idArray) => {
    let id = idArray && idArray.length > 0 ? idArray[0] : null;


    this.setState({ selectedGroupId: idArray })

    let tmpArr = [];
    let groupAvg = [];
    let selfAvg = [];
    let dateList = [];

    console.log('examGroupData = ', examGroupData)
    examGroupData.data.exams.forEach(exam => {
      let tmpObj = {}
      tmpObj.date = exam.date;
      tmpObj.id = exam.id;
      tmpObj.name = exam.name;
      // tmpObj.totalScore = 
      tmpObj.takenScore = parseInt(exam.studentScore);
      tmpObj.clickable = true;
      tmpObj.quality = exam.place

      tmpArr.push(tmpObj);
      groupAvg.push(parseInt(exam.avg));
      selfAvg.push(parseInt(exam.studentScore));
      dateList.push(exam.date)
    })



    this.setState({ initRecordToShow: tmpArr, groupAvg, selfAvg, dateList, examDetail: examDetailData.data.exam })
  }

  render() {
    const lessons = ["Монгол хэл", "Математик", "Түүх"];

    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="card shadow-sm">
            <div className="custom-card-body">
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
                <div className="col-md-4 px-md-2">
                  <div className="p-3 shadow-sm">
                    <TreeView
                      treeDatas={this.state.dataTreeToShow}
                      selectedNodes={this.state.selectedGroupId}
                      onSelect={this.onTreeSelected}
                    />
                  </div>
                </div>
                <div className="col-md-8 px-md-2">
                  <div className="p-3 shadow-sm">
                    <ExamDashboardMixedChart groupAvg={this.state.groupAvg} selfAvg={this.state.selfAvg} dateList={this.state.dateList} />
                  </div>
                  <div className="p-3 mt-3 shadow-sm">
                    <DataTable
                      className="table table-bordered"
                      config={config}
                      records={this.state.initRecordToShow}
                      columns={columns}
                      tdClick={this.renderModal}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {this.state.showModel && (
            <ModalMain
              title="hicheel"
              hideModal={this.hideModal}
              show={this.state.showModel}
            >
              <div className="row h-70 shadow-sm">
                <div className="col-md-2 px-md-0">
                  <div className="p-3 ">
                    <ExamModalMixedWidget />
                  </div>
                </div>
                <div className="col-md-3 px-md-2">
                  <div className="p-3 ">
                    <div className="row">
                      <div className="col-sm-7 pt-3 examModelTxtToRight">
                        <span>Шалгалт авсан огноо</span>
                      </div>
                      <div className="col-sm-5 pt-3 examModelTxtToLeft">
                        <span>{this.state.examDetail.date}</span>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-7 pt-3 examModelTxtToRight">
                        <span>Нэр</span>
                      </div>
                      <div className="col-sm-5 pt-3 examModelTxtToLeft">
                        <span>{this.state.examDetail.name}</span>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-7 pt-3 examModelTxtToRight">
                        <span>Авах оноо</span>
                      </div>
                      <div className="col-sm-5 pt-3 examModelTxtToLeft">
                        <span>{this.state.examDetail.totalScore}</span>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-7 pt-3 examModelTxtToRight">
                        <span>Авсан оноо</span>
                      </div>
                      <div className="col-sm-5 pt-3 examModelTxtToLeft">
                        <span>{this.state.examDetail.studentScore}</span>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-7 pt-3 examModelTxtToRight">
                        <span>Чансаа</span>
                      </div>
                      <div className="col-lg-5 pt-3 examModelTxtToLeft">
                        <span>{this.state.examDetail.place}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-2 px-md-0">
                  <div className="p-3 ">
                    <div className="row">
                      <div className="col-lg-6 pt-3 examModelTxtToRight">
                        <span>Max</span>
                      </div>
                      <div className="col-lg-6 pt-3 examModelTxtToLeft">
                        <span>{this.state.examDetail.max}</span>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6 pt-3 examModelTxtToRight">
                        <span>Min</span>
                      </div>
                      <div className="col-lg-6 pt-3 examModelTxtToLeft">
                        <span>{this.state.examDetail.min}</span>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6 pt-3 examModelTxtToRight">
                        <span>Average</span>
                      </div>
                      <div className="col-lg-6 pt-3 examModelTxtToLeft">
                        <span>{this.state.examDetail.avg}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-5 px-md-2">
                  <div className="p-3 h-100 ">
                    <div className="row">
                      <div className="col-lg-6 pt-3 examModelTxtToRight">
                        <span>Шалгалтын тухай</span>
                      </div>
                      <div className="col-lg-6 pt-3 examModelTxtToLeft">
                        <span>{this.state.examDetail.description}</span>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6 pt-3 examModelTxtToRight">
                        <span>Анхаарах</span>
                      </div>
                      <div className="col-lg-6 pt-3 examModelTxtToLeft">
                        <span></span>
                      </div>
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
                    columns={columns}
                    tdClick={this.renderModal}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 p-5 shadow-sm mt-5">
                  <DataTable
                    className="table table-bordered"
                    config={config}
                    records={records}
                    columns={columns}
                    tdClick={this.renderModal}
                  />
                </div>
              </div>
            </ModalMain>
          )}
        </div>
      </div>
    );
  }
}

const mapStateProps = (state) => {
  return {
    studentId: state.student.student
  }
};

export default connect(mapStateProps, null)(ExamDashboard);