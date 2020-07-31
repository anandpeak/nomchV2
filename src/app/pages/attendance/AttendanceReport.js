import React from "react";

import { AttendanceMixedWidget } from "./AttendanceMixedWidget.js";
import { AttendanceReportChart } from "./AttendanceReportChart.js";
import DataTable from "../../../_metronic/_partials/widgets/util/table/DataTable";

const tmpAttendanceReportData = {
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
    "type": "day",
    "days": [
      {
        "date": "2020-07-02",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-07-01",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-06-30",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-06-29",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-06-26",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-06-25",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-06-24",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-06-23",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-06-22",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-06-19",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-06-18",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-06-17",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-06-16",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-06-15",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-06-12",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-06-11",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-06-10",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-06-09",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-06-08",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-06-05",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-06-04",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-06-03",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-06-02",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-06-01",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-05-29",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-05-28",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-05-27",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-05-26",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-05-25",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-05-22",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-05-21",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-05-20",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-05-19",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-05-18",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-05-15",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-05-14",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-05-13",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-05-12",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-05-11",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-05-08",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-05-07",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-05-06",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-05-05",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-05-04",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-05-01",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-04-30",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-04-29",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-04-28",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-04-27",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-04-24",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-04-23",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-04-22",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-04-21",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-04-20",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-04-17",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-04-16",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-04-15",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-04-14",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-04-13",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-04-10",
        "typeId": 1,
        "typeColor": "7ed321",
        "typeName": "Came"
      },
      {
        "date": "2020-04-09",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-04-08",
        "typeId": 3,
        "typeColor": "fa0101",
        "typeName": "Unexcused"
      },
      {
        "date": "2020-04-07",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-04-06",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-04-03",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-04-02",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-04-01",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-03-31",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-03-30",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-03-27",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-03-26",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-03-25",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-03-24",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-03-23",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-03-20",
        "typeId": 1,
        "typeColor": "7ed321",
        "typeName": "Came"
      },
      {
        "date": "2020-03-19",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-03-18",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-03-17",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-03-16",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-03-13",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-03-12",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-03-11",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-03-10",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-03-09",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-03-06",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-03-05",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-03-04",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-03-03",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-03-02",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-02-28",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-02-27",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-02-26",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-02-25",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-02-24",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-02-21",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-02-20",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-02-19",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-02-18",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-02-17",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-02-14",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-02-13",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-02-12",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-02-11",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-02-10",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-02-07",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-02-06",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-02-05",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-02-04",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-02-03",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-01-31",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-01-30",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-01-29",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-01-28",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-01-27",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-01-24",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-01-23",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-01-22",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-01-21",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-01-20",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-01-17",
        "typeId": 1,
        "typeColor": "7ed321",
        "typeName": "Came"
      },
      {
        "date": "2020-01-16",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-01-15",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-01-14",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-01-13",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-01-10",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-01-09",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-01-08",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-01-07",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-01-06",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-01-03",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2020-01-02",
        "typeId": 1,
        "typeColor": "7ed321",
        "typeName": "Came"
      },
      {
        "date": "2020-01-01",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2019-12-31",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2019-12-30",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2019-12-27",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2019-12-26",
        "typeId": 1,
        "typeColor": "7ed321",
        "typeName": "Came"
      },
      {
        "date": "2019-12-25",
        "typeId": 1,
        "typeColor": "7ed321",
        "typeName": "Came"
      },
      {
        "date": "2019-12-24",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2019-12-23",
        "typeId": 1,
        "typeColor": "7ed321",
        "typeName": "Came"
      },
      {
        "date": "2019-12-20",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2019-12-19",
        "typeId": 1,
        "typeColor": "7ed321",
        "typeName": "Came"
      },
      {
        "date": "2019-12-18",
        "typeId": 1,
        "typeColor": "7ed321",
        "typeName": "Came"
      },
      {
        "date": "2019-12-17",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2019-12-16",
        "typeId": 1,
        "typeColor": "7ed321",
        "typeName": "Came"
      },
      {
        "date": "2019-12-13",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2019-12-12",
        "typeId": 1,
        "typeColor": "7ed321",
        "typeName": "Came"
      },
      {
        "date": "2019-12-11",
        "typeId": 1,
        "typeColor": "7ed321",
        "typeName": "Came"
      },
      {
        "date": "2019-12-10",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2019-12-09",
        "typeId": 1,
        "typeColor": "7ed321",
        "typeName": "Came"
      },
      {
        "date": "2019-12-06",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2019-12-05",
        "typeId": 1,
        "typeColor": "7ed321",
        "typeName": "Came"
      },
      {
        "date": "2019-12-04",
        "typeId": 1,
        "typeColor": "7ed321",
        "typeName": "Came"
      },
      {
        "date": "2019-12-03",
        "typeId": null,
        "typeColor": null,
        "typeName": null
      },
      {
        "date": "2019-12-02",
        "typeId": 1,
        "typeColor": "7ed321",
        "typeName": "Came"
      },
      {
        "date": "2019-11-28",
        "typeId": 1,
        "typeColor": "7ed321",
        "typeName": "Came"
      },
      {
        "date": "2019-11-27",
        "typeId": 1,
        "typeColor": "7ed321",
        "typeName": "Came"
      },
      {
        "date": "2019-11-25",
        "typeId": 1,
        "typeColor": "7ed321",
        "typeName": "Came"
      },
      {
        "date": "2019-11-21",
        "typeId": 1,
        "typeColor": "7ed321",
        "typeName": "Came"
      },
      {
        "date": "2019-11-20",
        "typeId": 1,
        "typeColor": "7ed321",
        "typeName": "Came"
      },
      {
        "date": "2019-11-18",
        "typeId": 1,
        "typeColor": "7ed321",
        "typeName": "Came"
      },
      {
        "date": "2019-11-14",
        "typeId": 1,
        "typeColor": "7ed321",
        "typeName": "Came"
      },
      {
        "date": "2019-11-13",
        "typeId": 1,
        "typeColor": "7ed321",
        "typeName": "Came"
      },
      {
        "date": "2019-11-11",
        "typeId": 1,
        "typeColor": "7ed321",
        "typeName": "Came"
      },
      {
        "date": "2019-11-07",
        "typeId": 1,
        "typeColor": "7ed321",
        "typeName": "Came"
      },
      {
        "date": "2019-11-06",
        "typeId": 1,
        "typeColor": "7ed321",
        "typeName": "Came"
      },
      {
        "date": "2019-11-04",
        "typeId": 1,
        "typeColor": "7ed321",
        "typeName": "Came"
      }
    ],
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
    text: "Огноо",
    sortable: true,
    align: "left",
    width: 200,
  },
  {
    key: "status",
    text: "Төлөв",
    align: "left",
    sortable: true,
    width: 100,
    colType: 'html',
  },
];

const config = {
  show_all: false,
  show_info: true,
  show_pagination: true,
  dynamic: true,
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

export default class AttendanceReport extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lessName: "",
      recordsToShow: [],
      late: 0,
      came: 0,
      unexcused: 0,
      excused: 0,
      sick: 0,
      total: 0
    };
  }

  //   [0 … 99]
  // 0:
  // date: "2020-07-02"
  // typeColor: null
  // typeId: null
  // typeName: null
  // __proto__: Object
  // 1: {date: "2020-07-01", typeId: null, typeColor: null, typeName: null}
  // 2: {date: "2020-06-30", typeId: null, typeColor: null, typeName: null}
  // 3: {date: "2020-06-29", typeId: null, typeColor: null, typeName: null}
  // 4: {date: "2020-06-26", typeId: null, typeColor: null, typeName: null}
  componentDidMount() {

    this.setState({ lessName: this.props.match.params.id });


    let tmpArr = [];
    let total = 0, excused = 0, unexcused = 0, late = 0, came = 0, sick = 0;

    tmpAttendanceReportData.data.days.forEach(day => {
      let tmpObj = {};

      tmpObj.date = day.date;
      if (day.typeName === "Came") {
        tmpObj['status'] = '<button type="button" class="btn btn-sm attendanceTableBtn came"><span>Ирсэн</span></button>';
        came++;
      }
      else if (day.typeName === "Unexcused") {
        tmpObj['status'] = '<button type="button" class="btn btn-sm  attendanceTableBtn unexcused"><span>Тасалсан</span></button>';
        unexcused++;
      }
      else if (day.typeName === "Late") {
        tmpObj['status'] = '<button type="button" class="btn btn-sm  attendanceTableBtn late"><span>Хоцорсон</span></button>';
        late++
      }
      else if (day.typeName === "Excused") {
        tmpObj['status'] = '<button type="button" class="btn btn-sm  attendanceTableBtn excused"><span>Чөлөөтэй</button>';
        excused++;
      }
      else if (day.typeName === "Sick") {
        tmpObj['status'] = '<button type="button" class="btn btn-sm attendanceTableBtn sick"><span>Өвчтэй</span></button>';
        sick++
      } else {
        tmpObj['status'] = '<button type="button"  class="btn btn-sm attendanceTableBtn unrecorded"><span>Бүртгээгүй</span></button>';
      }

      tmpArr.push(tmpObj);
    })

    total = excused + unexcused + sick + late + came;

    this.setState({ total, excused, unexcused, late, came, sick })


    console.log(tmpArr);
    this.setState({ recordsToShow: tmpArr })
  }

  render() {
    console.log('attedanceReportState = ', this.state)
    const { came, excused, unexcused, late, total, sick } = this.state;
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
                            <span>{came}</span>
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
                            <span>{unexcused}</span>
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
                            <span>{sick}</span>
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
                            <span>{excused}</span>
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
                            <span>{late}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 px-md-2">
                  <div className="p-5 h-100 shadow-sm">
                    <AttendanceReportChart came={came} sick={sick} late={late} excused={excused} unexcused={unexcused} total={total} />
                  </div>
                </div>
              </div>
              <div className="row mt-5 shadow-sm">
                <div className="col-4 p-5 ">
                  <DataTable
                    className="table table-bordered"
                    config={config}
                    records={this.state.recordsToShow}
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
