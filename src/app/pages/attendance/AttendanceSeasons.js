import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import * as action from '../../actions/attendanceActions';
import DataTable from '../../../_metronic/_partials/widgets/util/table/DataTable'

const tempData = {
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
    "type": "subject",
    "groups": [
      {
        "groupId": 421,
        "groupName": "Монгол хэл | 2Б",
        "ordering": 3,
        "teacherName": "Оч",
        "teacherImage": "https://www.nomch.mn/media/cache/medium_photo/uploads/images/525cb4c0e0c4e5bab240917a595ff05d10c9e30c.png",
        "types": [
          {
            "id": 1,
            "color": "7ed321",
            "name": "Came",
            "total": 0
          },
          {
            "id": 3,
            "color": "fa0101",
            "name": "Unexcused",
            "total": 0
          },
          {
            "id": 5,
            "color": "9b9b9b",
            "name": "Late",
            "total": 0
          },
          {
            "id": 4,
            "color": "9012fe",
            "name": "Sick",
            "total": 0
          },
          {
            "id": 2,
            "color": "ff6c00",
            "name": "Excused ",
            "total": 0
          }
        ]
      },
      {
        "groupId": 3725,
        "groupName": "Монгол хэл | 2Б",
        "ordering": 3,
        "teacherName": "Туяа",
        "teacherImage": "https://www.nomch.mn/media/cache/medium_photo/uploads/images/dbb89656fceaad84f86cf56876ca21579a0308c5.jpeg",
        "types": [
          {
            "id": 1,
            "color": "7ed321",
            "name": "Came",
            "total": 0
          },
          {
            "id": 3,
            "color": "fa0101",
            "name": "Unexcused",
            "total": 1
          },
          {
            "id": 5,
            "color": "9b9b9b",
            "name": "Late",
            "total": 0
          },
          {
            "id": 4,
            "color": "9012fe",
            "name": "Sick",
            "total": 0
          },
          {
            "id": 2,
            "color": "ff6c00",
            "name": "Excused ",
            "total": 0
          }
        ]
      },
      {
        "groupId": 3746,
        "groupName": "Монгол хэл | 2Б",
        "ordering": 3,
        "teacherName": "Ундрал",
        "teacherImage": "https://www.nomch.mn/media/cache/medium_photo/uploads/images/00c35987f3ec72bcd0c45dfc9fd87410df5ad46b",
        "types": [
          {
            "id": 1,
            "color": "7ed321",
            "name": "Came",
            "total": 0
          },
          {
            "id": 3,
            "color": "fa0101",
            "name": "Unexcused",
            "total": 0
          },
          {
            "id": 5,
            "color": "9b9b9b",
            "name": "Late",
            "total": 0
          },
          {
            "id": 4,
            "color": "9012fe",
            "name": "Sick",
            "total": 0
          },
          {
            "id": 2,
            "color": "ff6c00",
            "name": "Excused ",
            "total": 0
          }
        ]
      },
      {
        "groupId": 422,
        "groupName": "Англи хэл | 2Б",
        "ordering": 6,
        "teacherName": "Ган-Эрдэнэ",
        "teacherImage": "https://www.nomch.mn/media/cache/medium_photo/uploads/images/31ff739b3ba0c66eca2a3b43befd85e1b102c9f9.png",
        "types": [
          {
            "id": 1,
            "color": "7ed321",
            "name": "Came",
            "total": 23
          },
          {
            "id": 3,
            "color": "fa0101",
            "name": "Unexcused",
            "total": 1
          },
          {
            "id": 5,
            "color": "9b9b9b",
            "name": "Late",
            "total": 0
          },
          {
            "id": 4,
            "color": "9012fe",
            "name": "Sick",
            "total": 0
          },
          {
            "id": 2,
            "color": "ff6c00",
            "name": "Excused ",
            "total": 0
          }
        ]
      },
      {
        "groupId": 3745,
        "groupName": "Нийгмийн ухаан | 2Б",
        "ordering": 11,
        "teacherName": "Жаргалсайхан",
        "teacherImage": "http://dev.nomch.mn/media/cache/medium_photo/uploads/images/8aa40168b7bf6c5c11fb3b06b137959cc3d2acce.jpeg",
        "types": [
          {
            "id": 1,
            "color": "7ed321",
            "name": "Came",
            "total": 0
          },
          {
            "id": 3,
            "color": "fa0101",
            "name": "Unexcused",
            "total": 0
          },
          {
            "id": 5,
            "color": "9b9b9b",
            "name": "Late",
            "total": 0
          },
          {
            "id": 4,
            "color": "9012fe",
            "name": "Sick",
            "total": 0
          },
          {
            "id": 2,
            "color": "ff6c00",
            "name": "Excused ",
            "total": 0
          }
        ]
      },
      {
        "groupId": 424,
        "groupName": "Оюуны хөгжил | 2Б",
        "ordering": 13,
        "teacherName": "Туяа",
        "teacherImage": "https://www.nomch.mn/media/cache/medium_photo/uploads/images/dbb89656fceaad84f86cf56876ca21579a0308c5.jpeg",
        "types": [
          {
            "id": 1,
            "color": "7ed321",
            "name": "Came",
            "total": 0
          },
          {
            "id": 3,
            "color": "fa0101",
            "name": "Unexcused",
            "total": 0
          },
          {
            "id": 5,
            "color": "9b9b9b",
            "name": "Late",
            "total": 0
          },
          {
            "id": 4,
            "color": "9012fe",
            "name": "Sick",
            "total": 0
          },
          {
            "id": 2,
            "color": "ff6c00",
            "name": "Excused ",
            "total": 0
          }
        ]
      },
      {
        "groupId": 398,
        "groupName": "Сагсан бөмбөг | B-04-Ган-Эрдэнэ",
        "ordering": 14,
        "teacherName": "Ган-Эрдэнэ",
        "teacherImage": "https://www.nomch.mn/media/cache/medium_photo/uploads/images/31ff739b3ba0c66eca2a3b43befd85e1b102c9f9.png",
        "types": [
          {
            "id": 1,
            "color": "7ed321",
            "name": "Came",
            "total": 0
          },
          {
            "id": 3,
            "color": "fa0101",
            "name": "Unexcused",
            "total": 0
          },
          {
            "id": 5,
            "color": "9b9b9b",
            "name": "Late",
            "total": 0
          },
          {
            "id": 4,
            "color": "9012fe",
            "name": "Sick",
            "total": 0
          },
          {
            "id": 2,
            "color": "ff6c00",
            "name": "Excused ",
            "total": 0
          }
        ]
      },
      {
        "groupId": 361,
        "groupName": "Теннис | 10-р анги",
        "ordering": 15,
        "teacherName": "Оч",
        "teacherImage": "https://www.nomch.mn/media/cache/medium_photo/uploads/images/525cb4c0e0c4e5bab240917a595ff05d10c9e30c.png",
        "types": [
          {
            "id": 1,
            "color": "7ed321",
            "name": "Came",
            "total": 0
          },
          {
            "id": 3,
            "color": "fa0101",
            "name": "Unexcused",
            "total": 0
          },
          {
            "id": 5,
            "color": "9b9b9b",
            "name": "Late",
            "total": 0
          },
          {
            "id": 4,
            "color": "9012fe",
            "name": "Sick",
            "total": 0
          },
          {
            "id": 2,
            "color": "ff6c00",
            "name": "Excused ",
            "total": 0
          }
        ]
      },
      {
        "groupId": 426,
        "groupName": "Монгол бичиг | 2Б",
        "ordering": 17,
        "teacherName": "Билгүүн",
        "teacherImage": "https://www.nomch.mn/media/cache/medium_photo/uploads/images/e55b76d6d3c8146385489aaaecb3534c9355eec5.png",
        "types": [
          {
            "id": 1,
            "color": "7ed321",
            "name": "Came",
            "total": 0
          },
          {
            "id": 3,
            "color": "fa0101",
            "name": "Unexcused",
            "total": 0
          },
          {
            "id": 5,
            "color": "9b9b9b",
            "name": "Late",
            "total": 0
          },
          {
            "id": 4,
            "color": "9012fe",
            "name": "Sick",
            "total": 0
          },
          {
            "id": 2,
            "color": "ff6c00",
            "name": "Excused ",
            "total": 0
          }
        ]
      },
      {
        "groupId": 3750,
        "groupName": "Мат сонгон",
        "ordering": 22,
        "teacherName": "Оч",
        "teacherImage": "https://www.nomch.mn/media/cache/medium_photo/uploads/images/525cb4c0e0c4e5bab240917a595ff05d10c9e30c.png",
        "types": [
          {
            "id": 1,
            "color": "7ed321",
            "name": "Came",
            "total": 0
          },
          {
            "id": 3,
            "color": "fa0101",
            "name": "Unexcused",
            "total": 0
          },
          {
            "id": 5,
            "color": "9b9b9b",
            "name": "Late",
            "total": 0
          },
          {
            "id": 4,
            "color": "9012fe",
            "name": "Sick",
            "total": 0
          },
          {
            "id": 2,
            "color": "ff6c00",
            "name": "Excused ",
            "total": 0
          }
        ]
      },
      {
        "groupId": 423,
        "groupName": "Биологи | 2Б",
        "ordering": null,
        "teacherName": "Ундрал",
        "teacherImage": "https://www.nomch.mn/media/cache/medium_photo/uploads/images/00c35987f3ec72bcd0c45dfc9fd87410df5ad46b",
        "types": [
          {
            "id": 1,
            "color": "7ed321",
            "name": "Came",
            "total": 24
          },
          {
            "id": 3,
            "color": "fa0101",
            "name": "Unexcused",
            "total": 1
          },
          {
            "id": 5,
            "color": "9b9b9b",
            "name": "Late",
            "total": 0
          },
          {
            "id": 4,
            "color": "9012fe",
            "name": "Sick",
            "total": 0
          },
          {
            "id": 2,
            "color": "ff6c00",
            "name": "Excused ",
            "total": 0
          }
        ]
      }
    ],
    "message": "Амжилттай"
  },
  "success": true
}
class AttendanceSeasons extends React.Component {
  constructor(props) {
    super(props);


    this.config = {
      show_all: false,
      show_info: true,
      show_pagination: true,
      dynamic: true,
    };

    this.columns = [
      {
        key: "id",
        text: "№",
        align: "left",
        width: 50,
        sortable: false,
      },
      {
        key: "lesson",
        text: "Хичээл",
        width: 250,
        align: "left",
        sortable: false,
        clickableTd: true,
        tdClassName: "underline",
      },
      {
        key: "teacher",
        text: "Багш",
        width: 200,
        align: "left",
        sortable: false,
      },
      {
        key: "total",
        text: "Нийт",
        align: "center",
        sortable: false,
      },
      {
        key: "Came",
        text: "Ирсэн",
        align: "center",
        sortable: false,
      },
      {
        key: "Unexcused",
        text: "Тасалсан",
        align: "center",
        sortable: false,
      },
      {
        key: "late",
        text: "Хоцорсон",
        align: "center",
        sortable: false,
      },

      {
        key: "Sick",
        text: "Өвчтэй",
        align: "center",
        sortable: false,
      },
      {
        key: "Excused",
        text: "Чөлөөтэй",
        align: "center",
        sortable: false,
      },

    ];

    this.state = {
      tabValue: "1-р улирал",
      recordToShow: [],
      tableToProps: false,
      studentId: this.props.studentId
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.studentId !== nextProps.studentId) {
      console.log('student changed');
    }

    if (nextProps.attendanceInitData.data) {
      let tmpList = [];

      nextProps.attendanceInitData.data.groups.forEach(subject => {
        let tmpObj = {};
        let total = 0;
        tmpObj.id = subject.groupId;
        tmpObj.lesson = subject.groupName;
        tmpObj.teacher = subject.teacherName;

        subject.types.forEach((type, index) => {
          total += type.total
        })

        tmpObj.Came = subject.types[0].total;
        tmpObj.Unexcused = subject.types[1].total;
        tmpObj.Late = subject.types[2].total;
        tmpObj.Sick = subject.types[3].total;
        tmpObj.Excused = subject.types[4].total;
        tmpObj.total = total;
        tmpObj.clickable = true;

        tmpList.push(tmpObj)

      });

      this.setState({ recordToShow: tmpList });

      if (!this.state.tableToProps) {
        this.props.attendanceDatatable(tmpList);
        this.setState({ tableToProps: true })
      }
    }
  }

  componentDidMount() {

    this.props.initAttendance(tempData);
  }

  handleChange(event, newValue) {
    console.log('event = ', event, 'newVal = ', newValue);
    this.setState({ tabValue: newValue });
  }

  _onTdClick = (columnKey, id) => {


    window.open(`/attendance/${id}/${columnKey}/${79}`)

  }


  renderTabs() {
    const rows = ["1-р улирал", "2-р улирал"];
    let tabRows = rows.map((row) => <Tab value={`${row}`} label={<span>{row}</span>} />);

    return tabRows;
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
              <DataTable config={this.config}
                records={this.props.attendanceDataTable}
                columns={this.columns}
                tdClick={this._onTdClick}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateProps = (state) => {
  console.log('AttAtte:', state)
  return {
    attendanceDataTable: state.attendanceTable.attendanceDatatable.tableData,
    attendanceInitData: state.attendanceInitData.initAttendanceData,
    studentId: state.student.student
  }
};

export default connect(mapStateProps, action.actions)(AttendanceSeasons);