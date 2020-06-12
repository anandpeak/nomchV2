import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles({});

function createData(name, calories, fat, carbs, protein, assignment, examStat) {
  return { name, calories, fat, carbs, protein, assignment, examStat };
}

const rows = [
  createData("8:00 8:40", "Хичээл", "Монгол хэл", "Баатарсайхан", 1, 0, 1),
  createData("8:00 8:40", "Хичээл", "Математик", "Баатарсайхан", 0, 1, 0),
  createData("8:00 8:40", "Хичээл", "Хими", "Баатарсайхан", 1, 0, 0),
];

export default function ScheduleTable() {
  const classes = useStyles();

  return (
    <div className="card-body">
      <TableContainer>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="scheduleTableHeaderTxt">
                <span>Цаг</span>
              </TableCell>
              <TableCell className="scheduleTableHeaderTxt" align="center">
                <span>Хичээл</span>
              </TableCell>
              <TableCell className="scheduleTableHeaderTxt" align="center">
                <span>Ирц</span>
              </TableCell>
              <TableCell className="scheduleTableHeaderTxt" align="center">
                <span>Гэрийн даалгавар</span>
              </TableCell>
              <TableCell className="scheduleTableHeaderTxt" align="center">
                <span>Шалгалт</span>
              </TableCell>
              <TableCell className="scheduleTableHeaderTxt" align="center">
                <span>Улирлын дүн</span>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="scheduleTableBody">
            {rows.map((row) => (
              <TableRow key={row.protein}>
                <TableCell
                  className="scheduleTableCellTime"
                  component="th"
                  scope="row"
                >
                  <span>{row.name}</span>
                </TableCell>
                <TableCell align="center">
                  <div>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTWKfiwjCSvgs5NQUSxpyx7jhxWDl5LrVpQ036rm_0kuIzNNuPc&usqp=CAU"
                      width="50"
                      height="50"
                      className="scheduleTableImg"
                    ></img>
                    <div className="scheduleTableImgTxts">
                      <div className="scheduleTableImgLesson">
                        <span>{row.calories}</span>
                      </div>
                      <div className="scheduleTableImgLessonName">
                        <span>{row.fat}</span>
                      </div>
                      <div className="scheduleTableImgUserName">
                        <span>{row.carbs}</span>
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell align="center">
                  {row.protein ? (
                    <button type="button" class="btn btn-success">
                      <span>Ирсэн</span>
                    </button>
                  ) : (
                    <button type="button" class="btn btn-danger">
                      <span>Ирээгүй</span>
                    </button>
                  )}
                </TableCell>
                <TableCell align="center">
                  {row.assignment ? (
                    <i
                      className="fa fa-spell-check fa-3x"
                      style={{ color: "#1BC5BD" }}
                    ></i>
                  ) : (
                    <i
                      className="fa fa-spell-check fa-3x"
                      style={{ color: "#F64E60" }}
                    ></i>
                  )}
                </TableCell>
                <TableCell align="center">
                  {row.examStat ? (
                    <i
                      className="fa fa-chart-bar fa-3x"
                      style={{ color: "#1BC5BD" }}
                    ></i>
                  ) : (
                    <i
                      className="fa fa-chart-bar fa-3x"
                      style={{ color: "#F64E60" }}
                    ></i>
                  )}
                </TableCell>
                <TableCell align="center">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
