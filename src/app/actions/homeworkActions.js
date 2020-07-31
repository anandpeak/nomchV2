import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export const actionTypes = {
    homeworkDatatable: "HOMEWORK_DATATABLE"
};


export const homeworkDatatableReducer = persistReducer(
    { storage, key: "homeworkDatatable", whitelist: ["homeworkDatatable"] },
    (state = { homeworkDatatable: {} }, action) => {
        switch (action.type) {
            case actionTypes.homeworkDatatable: {
                return { homeworkDatatable: action.payload };
            }
            default:
                return state;
        }
    }
);


export const actions = {
    homeworkDatatable: tableData => ({ type: actionTypes.homeworkDatatable, payload: { tableData } })
};


