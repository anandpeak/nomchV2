/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import SVG from "react-inlinesvg";
import * as auth from "../../../../../app/modules/Auth/_redux/authRedux";

import { toAbsoluteUrl, checkIsActive } from "../../../../_helpers";

const templateInitData = {
    "data": {
        "user": {
            "userId": 3306,
            "firstName": "Saruul",
            "lastName": "S",
            "avatar": null
        },
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
                "schoolShortName": "Тестийн сургууль",
                "seasons": [
                    {
                        "seasonId": 79,
                        "seasonName": "3-р улирал",
                        "isCurrent": true,
                        "parentSeason": 52,
                        "isResult": true,
                        "isExam": true,
                        "isTimetable": true,
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
                        "seasonId": 52,
                        "seasonName": "2019-2020",
                        "isCurrent": false,
                        "isResult": true,
                        "isExam": true,
                        "isTimetable": true,
                        "startDate": {
                            "date": "2019-06-30 00:00:00.000000",
                            "timezone_type": 3,
                            "timezone": "Asia/Ulaanbaatar"
                        },
                        "endDate": {
                            "date": "2020-07-01 00:00:00.000000",
                            "timezone_type": 3,
                            "timezone": "Asia/Ulaanbaatar"
                        },
                        "parentSeason": 0
                    },
                    {
                        "seasonId": 78,
                        "seasonName": "I хагас",
                        "isCurrent": false,
                        "parentSeason": 52,
                        "isResult": true,
                        "isExam": true,
                        "isTimetable": true,
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
                    },
                    {
                        "seasonId": 74,
                        "seasonName": "2-р улирал",
                        "isCurrent": false,
                        "parentSeason": 52,
                        "isResult": true,
                        "isExam": true,
                        "isTimetable": true,
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
                        "parentSeason": 52,
                        "isResult": true,
                        "isExam": true,
                        "isTimetable": true,
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
                    }
                ]
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
                "schoolShortName": "Тестийн сургууль",
                "seasons": [
                    {
                        "seasonId": 79,
                        "seasonName": "3-р улирал",
                        "isCurrent": true,
                        "parentSeason": 52,
                        "isResult": true,
                        "isExam": true,
                        "isTimetable": true,
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
                        "seasonId": 52,
                        "seasonName": "2019-2020",
                        "isCurrent": false,
                        "isResult": true,
                        "isExam": true,
                        "isTimetable": true,
                        "startDate": {
                            "date": "2019-06-30 00:00:00.000000",
                            "timezone_type": 3,
                            "timezone": "Asia/Ulaanbaatar"
                        },
                        "endDate": {
                            "date": "2020-07-01 00:00:00.000000",
                            "timezone_type": 3,
                            "timezone": "Asia/Ulaanbaatar"
                        },
                        "parentSeason": 0
                    },
                    {
                        "seasonId": 78,
                        "seasonName": "I хагас",
                        "isCurrent": false,
                        "parentSeason": 52,
                        "isResult": true,
                        "isExam": true,
                        "isTimetable": true,
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
                    },
                    {
                        "seasonId": 74,
                        "seasonName": "2-р улирал",
                        "isCurrent": false,
                        "parentSeason": 52,
                        "isResult": true,
                        "isExam": true,
                        "isTimetable": true,
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
                        "parentSeason": 52,
                        "isResult": true,
                        "isExam": true,
                        "isTimetable": true,
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
                    }
                ]
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
                "schoolShortName": "Тестийн сургууль",
                "seasons": [
                    {
                        "seasonId": 79,
                        "seasonName": "3-р улирал",
                        "isCurrent": true,
                        "parentSeason": 52,
                        "isResult": true,
                        "isExam": true,
                        "isTimetable": true,
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
                        "seasonId": 52,
                        "seasonName": "2019-2020",
                        "isCurrent": false,
                        "isResult": true,
                        "isExam": true,
                        "isTimetable": true,
                        "startDate": {
                            "date": "2019-06-30 00:00:00.000000",
                            "timezone_type": 3,
                            "timezone": "Asia/Ulaanbaatar"
                        },
                        "endDate": {
                            "date": "2020-07-01 00:00:00.000000",
                            "timezone_type": 3,
                            "timezone": "Asia/Ulaanbaatar"
                        },
                        "parentSeason": 0
                    },
                    {
                        "seasonId": 78,
                        "seasonName": "I хагас",
                        "isCurrent": false,
                        "parentSeason": 52,
                        "isResult": true,
                        "isExam": true,
                        "isTimetable": true,
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
                    },
                    {
                        "seasonId": 74,
                        "seasonName": "2-р улирал",
                        "isCurrent": false,
                        "parentSeason": 52,
                        "isResult": true,
                        "isExam": true,
                        "isTimetable": true,
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
                        "parentSeason": 52,
                        "isResult": true,
                        "isExam": true,
                        "isTimetable": true,
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
                    }
                ]
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
                "schoolShortName": "Тестийн сургууль",
                "seasons": [
                    {
                        "seasonId": 79,
                        "seasonName": "3-р улирал",
                        "isCurrent": true,
                        "parentSeason": 52,
                        "isResult": true,
                        "isExam": true,
                        "isTimetable": true,
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
                        "seasonId": 52,
                        "seasonName": "2019-2020",
                        "isCurrent": false,
                        "isResult": true,
                        "isExam": true,
                        "isTimetable": true,
                        "startDate": {
                            "date": "2019-06-30 00:00:00.000000",
                            "timezone_type": 3,
                            "timezone": "Asia/Ulaanbaatar"
                        },
                        "endDate": {
                            "date": "2020-07-01 00:00:00.000000",
                            "timezone_type": 3,
                            "timezone": "Asia/Ulaanbaatar"
                        },
                        "parentSeason": 0
                    },
                    {
                        "seasonId": 78,
                        "seasonName": "I хагас",
                        "isCurrent": false,
                        "parentSeason": 52,
                        "isResult": true,
                        "isExam": true,
                        "isTimetable": true,
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
                    },
                    {
                        "seasonId": 74,
                        "seasonName": "2-р улирал",
                        "isCurrent": false,
                        "parentSeason": 52,
                        "isResult": true,
                        "isExam": true,
                        "isTimetable": true,
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
                        "parentSeason": 52,
                        "isResult": true,
                        "isExam": true,
                        "isTimetable": true,
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
                    }
                ]
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
                "schoolShortName": "Тестийн сургууль",
                "seasons": [
                    {
                        "seasonId": 79,
                        "seasonName": "3-р улирал",
                        "isCurrent": true,
                        "parentSeason": 52,
                        "isResult": true,
                        "isExam": true,
                        "isTimetable": true,
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
                        "seasonId": 52,
                        "seasonName": "2019-2020",
                        "isCurrent": false,
                        "isResult": true,
                        "isExam": true,
                        "isTimetable": true,
                        "startDate": {
                            "date": "2019-06-30 00:00:00.000000",
                            "timezone_type": 3,
                            "timezone": "Asia/Ulaanbaatar"
                        },
                        "endDate": {
                            "date": "2020-07-01 00:00:00.000000",
                            "timezone_type": 3,
                            "timezone": "Asia/Ulaanbaatar"
                        },
                        "parentSeason": 0
                    },
                    {
                        "seasonId": 78,
                        "seasonName": "I хагас",
                        "isCurrent": false,
                        "parentSeason": 52,
                        "isResult": true,
                        "isExam": true,
                        "isTimetable": true,
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
                    },
                    {
                        "seasonId": 74,
                        "seasonName": "2-р улирал",
                        "isCurrent": false,
                        "parentSeason": 52,
                        "isResult": true,
                        "isExam": true,
                        "isTimetable": true,
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
                        "parentSeason": 52,
                        "isResult": true,
                        "isExam": true,
                        "isTimetable": true,
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
                    }
                ]
            }
        ],
        "menus": [],
        "message": "Амжилттай"
    },
    "success": true
}
class HeaderMenu extends React.Component {
    constructor(props) {
        super(props)


        this.state = {
            students: props.students ? props.students : [],
            selectedStudent: props.selectedStudent ? props.selectedStudent : null,
            initStu: false,
        }
    }

    componentDidMount() {
        this.props.initData(templateInitData);
    }

    componentWillReceiveProps = (nextProps) => {

        if (nextProps.students) {
            this.setState({ students: nextProps.students, selectedStudent: nextProps.selectedStudent })
        }

        if (this.state.initStu === false && nextProps.students) {
            this.setState({ selectedStudent: nextProps.students[0].studentId, initStu: true })
        }
    }

    changeStudent = (stuId) => {
        this.props.changeStudent(stuId);

    }

    renderStudentsList = () => {
        // const { students } = this.state;

        let stuNames = [];

        const students = this.state.students

        students.forEach(stu => {
            stuNames.push(
                stu.studentId === this.state.selectedStudent
                    ?
                    <li key={stu.studentRelationId.toString()} className={`menu-item menu-item-rel menu-item-active`} onClick={() => this.changeStudent(stu.studentId)}>
                        <div className="menu-link">
                            <span className="menu-text">{stu.firstName}</span>
                            {this.props.layoutProps.rootArrowEnabled && (<i className="menu-arrow" />)}
                        </div>
                    </li>
                    :
                    <li key={stu.studentRelationId.toString()} className={`menu-item menu-item-rel`} onClick={() => this.changeStudent(stu.studentId)}>
                        <div className="menu-link">
                            <span className="menu-text">{stu.firstName}</span>
                            {this.props.layoutProps.rootArrowEnabled && (<i className="menu-arrow" />)}
                        </div>
                    </li>
            )
        });

        return stuNames;
    }

    render() {
        return <div
            id="kt_header_menu"
            className={`header-menu header-menu-mobile ${this.props.layoutProps.ktMenuClasses}`}
        // {...layoutProps.headerMenuAttributes}
        >
            {/*begin::Header Nav*/}
            <ul className={`menu-nav ${this.props.layoutProps.ulClasses}`}>
                {/*begin::1 Level*/}
                {this.renderStudentsList()}
            </ul>
            {/*end::Header Nav*/}
        </div>;
    }
}


const mapStateProps = (state) => {
    return {
        students: state.initData.initData.data ? state.initData.initData.data.students : [],
        selectedStudent: state.student.student ? state.student.student : null,
    }
};

export default connect(mapStateProps, auth.changeStudentActions)(HeaderMenu);


