import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { put, takeLatest } from "redux-saga/effects";
// import { getUserByToken } from "./authCrud";

export const actionTypes = {
    initAttendance: "INIT_ATTENDACE",
    attendanceDatatable: "ATTENDANCE_DATATABLE"
};


export const initAttendanceReducer = persistReducer(
    { storage, key: "initAttendanceData", whitelist: ["initAttendanceData"] },
    (state = { initAttendanceData: {} }, action) => {
        switch (action.type) {
            case actionTypes.initAttendance: {
                return { initAttendanceData: action.payload.initData };
            }
            default:
                return state;
        }
    }
);

export const attendanceDatatableReducer = persistReducer(
    { storage, key: "attendanceDatatable", whitelist: ["attendanceDatatable"] },
    (state = { attendanceDatatable: {} }, action) => {
        switch (action.type) {
            case actionTypes.attendanceDatatable: {
                return { attendanceDatatable: action.payload };
            }
            default:
                return state;
        }
    }
);


export const actions = {
    initAttendance: initData => ({ type: actionTypes.initAttendance, payload: { initData } }),
    attendanceDatatable: tableData => ({ type: actionTypes.attendanceDatatable, payload: { tableData } })
};


export function* saga() {
    yield takeLatest(actionTypes.Login, function* loginSaga() {
        yield put(actions.requestUser());
    });

    yield takeLatest(actionTypes.Register, function* registerSaga() {
        yield put(actions.requestUser());
    });

    // yield takeLatest(actionTypes.UserRequested, function* userRequested() {
    //     const { data: user } = yield getUserByToken();

    //     yield put(actions.fulfillUser(user));
    // });


}
