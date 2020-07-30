import React from "react";

import DaySelector from "./DaySelector";
import ScheduleTable from "./ScheduleTable";



export default function DaySchedule(props) {
  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <div className="card shadow-sm">
            <DaySelector />
            <ScheduleTable />
          </div>
        </div>
      </div>
    </>
  );
}

