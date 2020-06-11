import React from "react";
import { TextField } from "@material-ui/core";

export function DaySelector() {
  return (
    <>
      <div className="card-header align-items-center border-0 mt-4">
        <TextField
          id="DaySchedulePicker"
          label="DAY"
          type="date"
          defaultValue="2020-06-11"
        ></TextField>
      </div>
    </>
  );
}
