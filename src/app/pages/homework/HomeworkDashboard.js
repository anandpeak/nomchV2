import React from "react";
import { connect } from "react-redux";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import { Link } from 'react-router-dom';
import * as action from '../../actions/homeworkActions';
import DataTable from '../../../_metronic/_partials/widgets/util/table/DataTable'



const tmpHWData = {
  "data": {
    "locale": "en",
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
    "seasons": [
      {
        "seasonId": 79,
        "seasonName": "3-р улирал",
        "isCurrent": true,
        "parentSeason": "2019-2020"
      },
      {
        "seasonId": 78,
        "seasonName": "I хагас",
        "isCurrent": false,
        "parentSeason": "2019-2020"
      },
      {
        "seasonId": 74,
        "seasonName": "2-р улирал",
        "isCurrent": false,
        "parentSeason": "2019-2020"
      },
      {
        "seasonId": 53,
        "seasonName": "1-р улирал",
        "isCurrent": false,
        "parentSeason": "2019-2020"
      }
    ],
    "selectedStudentId": 2434,
    "selectedSeasonId": 79,
    "homeworks": [
      {
        "id": 3215,
        "dueDate": {
          "date": "2020-06-23 00:00:00.000000",
          "timezone_type": 3,
          "timezone": "Asia/Ulaanbaatar"
        },
        "typeId": 35,
        "typeName": "Бүрэн",
        "typeColor": "3ebfa3",
        "subjectId": 21,
        "subjectName": "Нийгмийн ухаан",
        "personId": 989,
        "ordering": "1"
      },
      {
        "id": 3214,
        "dueDate": {
          "date": "2020-06-17 00:00:00.000000",
          "timezone_type": 3,
          "timezone": "Asia/Ulaanbaatar"
        },
        "typeId": null,
        "typeName": null,
        "typeColor": null,
        "subjectId": 18,
        "subjectName": "Биологи",
        "personId": 751,
        "ordering": "0"
      },
      {
        "id": 3212,
        "dueDate": {
          "date": "2020-05-05 00:00:00.000000",
          "timezone_type": 3,
          "timezone": "Asia/Ulaanbaatar"
        },
        "typeId": 35,
        "typeName": "Бүрэн",
        "typeColor": "3ebfa3",
        "subjectId": 21,
        "subjectName": "Нийгмийн ухаан",
        "personId": 989,
        "ordering": "1"
      },
      {
        "id": 3192,
        "dueDate": {
          "date": "2020-04-24 00:00:00.000000",
          "timezone_type": 3,
          "timezone": "Asia/Ulaanbaatar"
        },
        "typeId": 35,
        "typeName": "Бүрэн",
        "typeColor": "3ebfa3",
        "subjectId": 3,
        "subjectName": "Монгол хэл",
        "personId": 6211,
        "ordering": "1"
      },
      {
        "id": 3197,
        "dueDate": {
          "date": "2020-04-22 00:00:00.000000",
          "timezone_type": 3,
          "timezone": "Asia/Ulaanbaatar"
        },
        "typeId": null,
        "typeName": null,
        "typeColor": null,
        "subjectId": 3,
        "subjectName": "Монгол хэл",
        "personId": 6211,
        "ordering": "0"
      },
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
        "personId": 6211,
        "ordering": "1"
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
        "personId": 6211,
        "ordering": "1"
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
        "personId": 6211,
        "ordering": "1"
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
        "personId": 6211,
        "ordering": "1"
      },
      {
        "id": 3196,
        "dueDate": {
          "date": "2020-04-03 00:00:00.000000",
          "timezone_type": 3,
          "timezone": "Asia/Ulaanbaatar"
        },
        "typeId": null,
        "typeName": null,
        "typeColor": null,
        "subjectId": 3,
        "subjectName": "Монгол хэл",
        "personId": 6211,
        "ordering": "0"
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
        "personId": 6211,
        "ordering": "1"
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
        "personId": 6211,
        "ordering": "1"
      },
      {
        "id": 3185,
        "dueDate": {
          "date": "2020-03-06 00:00:00.000000",
          "timezone_type": 3,
          "timezone": "Asia/Ulaanbaatar"
        },
        "typeId": null,
        "typeName": null,
        "typeColor": null,
        "subjectId": 3,
        "subjectName": "Монгол хэл",
        "personId": 6211,
        "ordering": "0"
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
        "personId": 6211,
        "ordering": "1"
      },
      {
        "id": 2540,
        "dueDate": {
          "date": "2020-02-25 00:00:00.000000",
          "timezone_type": 3,
          "timezone": "Asia/Ulaanbaatar"
        },
        "typeId": null,
        "typeName": null,
        "typeColor": null,
        "subjectId": 20,
        "subjectName": "Мэдээлэл зүй",
        "personId": 6211,
        "ordering": "0"
      },
      {
        "id": 2544,
        "dueDate": {
          "date": "2020-02-18 00:00:00.000000",
          "timezone_type": 3,
          "timezone": "Asia/Ulaanbaatar"
        },
        "typeId": null,
        "typeName": null,
        "typeColor": null,
        "subjectId": 175,
        "subjectName": "Оюуны хөгжил",
        "personId": 6211,
        "ordering": "0"
      },
      {
        "id": 2534,
        "dueDate": {
          "date": "2020-02-13 00:00:00.000000",
          "timezone_type": 3,
          "timezone": "Asia/Ulaanbaatar"
        },
        "typeId": null,
        "typeName": null,
        "typeColor": null,
        "subjectId": 175,
        "subjectName": "Оюуны хөгжил",
        "personId": 6211,
        "ordering": "0"
      },
      {
        "id": 2531,
        "dueDate": {
          "date": "2020-02-06 00:00:00.000000",
          "timezone_type": 3,
          "timezone": "Asia/Ulaanbaatar"
        },
        "typeId": null,
        "typeName": null,
        "typeColor": null,
        "subjectId": 175,
        "subjectName": "Оюуны хөгжил",
        "personId": 6211,
        "ordering": "0"
      },
      {
        "id": 3182,
        "dueDate": {
          "date": "2020-02-05 00:00:00.000000",
          "timezone_type": 3,
          "timezone": "Asia/Ulaanbaatar"
        },
        "typeId": null,
        "typeName": null,
        "typeColor": null,
        "subjectId": 3,
        "subjectName": "Монгол хэл",
        "personId": 6211,
        "ordering": "0"
      },
      {
        "id": 2438,
        "dueDate": {
          "date": "2020-02-04 00:00:00.000000",
          "timezone_type": 3,
          "timezone": "Asia/Ulaanbaatar"
        },
        "typeId": 36,
        "typeName": "Дутуу",
        "typeColor": "f9b822",
        "subjectId": 20,
        "subjectName": "Мэдээлэл зүй",
        "personId": 6211,
        "ordering": "2"
      }
    ],
    "subjects": [
      {
        "subjectId": 6,
        "subjectName": "Англи хэл",
        "notCheckedCount": 0,
        "counter": [
          {
            "id": 35,
            "name": "Бүрэн",
            "color": "3ebfa3",
            "count": 3
          },
          {
            "id": 36,
            "name": "Дутуу",
            "color": "f9b822",
            "count": 0
          },
          {
            "id": 37,
            "name": "Хийгээгүй",
            "color": "f4516b",
            "count": 0
          }
        ]
      },
      {
        "subjectId": 18,
        "subjectName": "Биологи",
        "notCheckedCount": 1,
        "counter": [
          {
            "id": 35,
            "name": "Бүрэн",
            "color": "3ebfa3",
            "count": 0
          },
          {
            "id": 36,
            "name": "Дутуу",
            "color": "f9b822",
            "count": 0
          },
          {
            "id": 37,
            "name": "Хийгээгүй",
            "color": "f4516b",
            "count": 0
          }
        ]
      },
      {
        "subjectId": 3,
        "subjectName": "Монгол хэл",
        "notCheckedCount": 0,
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
      {
        "subjectId": 20,
        "subjectName": "Мэдээлэл зүй",
        "notCheckedCount": 0,
        "counter": [
          {
            "id": 35,
            "name": "Бүрэн",
            "color": "3ebfa3",
            "count": 4
          },
          {
            "id": 36,
            "name": "Дутуу",
            "color": "f9b822",
            "count": 3
          },
          {
            "id": 37,
            "name": "Хийгээгүй",
            "color": "f4516b",
            "count": 0
          }
        ]
      },
      {
        "subjectId": 21,
        "subjectName": "Нийгмийн ухаан",
        "notCheckedCount": 0,
        "counter": [
          {
            "id": 35,
            "name": "Бүрэн",
            "color": "3ebfa3",
            "count": 2
          },
          {
            "id": 36,
            "name": "Дутуу",
            "color": "f9b822",
            "count": 0
          },
          {
            "id": 37,
            "name": "Хийгээгүй",
            "color": "f4516b",
            "count": 0
          }
        ]
      },
      {
        "subjectId": 175,
        "subjectName": "Оюуны хөгжил",
        "notCheckedCount": 0,
        "counter": [
          {
            "id": 35,
            "name": "Бүрэн",
            "color": "3ebfa3",
            "count": 6
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
      }
    ],
    "page": 1,
    "pageSize": 20,
    "message": "Амжилттай"
  },
  "success": true
}
class HomeworkDashboard extends React.Component {
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
        key: "subject",
        text: "Хичээл",
        width: 250,
        align: "left",
        sortable: true,
        clickableTd: true,
        tdClassName: "underline",
      },
      {
        key: "teacher",
        text: "Багш",
        width: 200,
        align: "left",
        sortable: true,
      },
      {
        key: "total",
        text: "Нийт",
        align: "center",
        sortable: true,
      },
      {
        key: "unchecked",
        text: "Шалгаагүй",
        align: "center",
        sortable: true,
      },
      {
        key: "completed",
        text: "Бүрэн",
        align: "center",
        sortable: true,
      },
      {
        key: "unfinished",
        text: "Дутуу",
        align: "center",
        sortable: true,
      },

      {
        key: "unmade",
        text: "Хийгээгүй",
        align: "center",
        sortable: true,
      },
    ];

    this.state = {
      tabValue: 0,
      recordToShow: []
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    console.log('homeworkProps = ', tmpHWData.data.subjects)

    let tmpArr = [];

    tmpHWData.data.subjects.forEach(subject => {
      let tmpObj = {};
      tmpObj.id = subject.subjectId;
      tmpObj.subject = subject.subjectName;
      tmpObj.unckecked = subject.notCheckedCount;
      tmpObj.completed = subject.counter[0].count;
      tmpObj.unfinished = subject.counter[1].count;
      tmpObj.unmade = subject.counter[2].count;
      tmpObj.total = subject.counter[0].count + subject.counter[1].count + subject.counter[0].count;
      tmpObj.clickable = true;

      tmpArr.push(tmpObj);
    })

    this.setState({ recordToShow: tmpArr })
    // this.props.homeworkDatatable(tmpHWData);
  }

  handleChange(event, newValue) {
    this.setState({ tabValue: newValue });
  }

  renderTabs() {
    const rows = ["1-р улирал", "2-р улирал"];
    let tabRows = rows.map((row) => <Tab label={<span>{row}</span>} />);

    return tabRows;
  }

  _onTdClick = (columnKey, id) => {
    //   <Link target="_blank" to={`/homework/${lesson}`}>
    //   <span>{lesson}</span>
    // </Link>

    window.open(`/homework/${id}/${columnKey}/${79}`)

    console.log('col = ', columnKey, 'id = ', id)
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
                records={this.state.recordToShow}
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
  console.log('Att:', state)
  return {
    datatable: state.homeworkTable
  }
};

export default connect(mapStateProps, action.actions)(HomeworkDashboard);