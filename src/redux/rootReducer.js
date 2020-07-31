import { all } from "redux-saga/effects";
import { combineReducers } from "redux";

import * as auth from "../app/modules/Auth/_redux/authRedux";
import * as attendance from "../app/actions/attendanceActions"


export const rootReducer = combineReducers({
  auth: auth.reducer,
  student: auth.studentReducer,
  initData: auth.initDataReducer,
  attendanceInitData: attendance.initAttendanceReducer,
  attendanceTable: attendance.attendanceDatatableReducer

});

export function* rootSaga() {
  yield all([auth.saga()]);
}
