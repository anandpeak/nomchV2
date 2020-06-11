import React from "react";

import { DaySelector } from "./DaySelector";
import ScheduleTable from "./ScheduleTable";

export function DaySchedule() {
  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <div className="card card-custom">
            <DaySelector />
            <ScheduleTable />
          </div>
        </div>
      </div>
    </>
  );
}
