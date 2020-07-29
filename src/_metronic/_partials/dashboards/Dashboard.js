import React, { useMemo } from "react";
import objectPath from "object-path";
import { useHtmlClassService } from "../../layout";
import { DaySchedule } from "./DaySchedule/DaySchedule.js";


export function Dashboard() {
  const uiService = useHtmlClassService();
  const layoutProps = useMemo(() => {
    return {
      demo: objectPath.get(uiService.config, "demo"),
    };
  }, [uiService]);
  return (
    <>
      {layoutProps.demo === "demo1" && <DaySchedule />}
    </>
  );
}
