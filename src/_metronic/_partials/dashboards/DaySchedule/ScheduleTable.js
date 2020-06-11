import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles({});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function ScheduleTable() {
  const classes = useStyles();

  return (
    <div className="card card-custom">
      <TableContainer>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="scheduleTableHeaderTxt">
                <span>Цаг</span>
              </TableCell>
              <TableCell className="scheduleTableHeaderTxt" align="left">
                <span>Хичээл</span>
              </TableCell>
              <TableCell className="scheduleTableHeaderTxt" align="right">
                <span>Ирц</span>
              </TableCell>
              <TableCell className="scheduleTableHeaderTxt" align="right">
                <span>Гэрийн даалгавар</span>
              </TableCell>
              <TableCell className="scheduleTableHeaderTxt" align="right">
                <span>Шалгалт</span>
              </TableCell>
              <TableCell className="scheduleTableHeaderTxt" align="right">
                <span>Улирлын дүн</span>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>
                  <div>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTWKfiwjCSvgs5NQUSxpyx7jhxWDl5LrVpQ036rm_0kuIzNNuPc&usqp=CAU"
                      width="50"
                      height="50"
                      className="scheduleTableImg"
                    ></img>
                    <div className="scheduleTableImgTxts">
                      <div className="scheduleTableImgLesson">{row.name}</div>
                      <div className="scheduleTableImgLessonName">
                        {row.name}
                      </div>
                      <div className="scheduleTableImgUserName">{row.name}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
