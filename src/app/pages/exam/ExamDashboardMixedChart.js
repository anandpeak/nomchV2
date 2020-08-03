import React, { useMemo, useEffect } from "react";
import objectPath from "object-path";
import ApexCharts from "apexcharts";
import { useHtmlClassService } from "../../../_metronic/layout";
import { KTUtil } from "../../../_metronic/_assets/js/components/util";

export default function ExamDashbaordMixedChart({ groupAvg, selfAvg, dateList }) {
  const uiService = useHtmlClassService();
  console.log('props = ', groupAvg)
  const layoutProps = useMemo(() => {
    return {
      colorsGrayGray100: objectPath.get(
        uiService.config,
        "js.colors.gray.gray100"
      ),
      colorsGrayGray700: objectPath.get(
        uiService.config,
        "js.colors.gray.gray700"
      ),
      colorsThemeBaseSuccess: objectPath.get(
        uiService.config,
        "js.colors.theme.base.success"
      ),
      colorsThemeLightSuccess: objectPath.get(
        uiService.config,
        "js.colors.theme.light.success"
      ),
      fontFamily: objectPath.get(uiService.config, "js.fontFamily"),
    };
  }, [uiService]);

  useEffect(() => {
    const element = document.getElementById(
      "kt_mixed_widget_ExamDashboard_chart"
    );
    if (!element) {
      return;
    }

    const height = parseInt(KTUtil.css(element, "height"));
    const options = getChartOptions(groupAvg, selfAvg, dateList);

    var chart = new ApexCharts(element, options);
    chart.render();

    return function cleanUp() {
      chart.destroy();
    };
  }, [layoutProps, groupAvg, selfAvg, dateList]);

  return (
    <>
      <div className="flex-grow-1">
        <div
          id="kt_mixed_widget_ExamDashboard_chart"
          style={{ height: "200px" }}
        ></div>
      </div>
    </>
  );
}

function getChartOptions(groupAvg, selfAvg, dateList) {
  const options = {
    series: [
      {
        name: "Өөрийн дундаж",
        type: "column",
        data: selfAvg,
      },
      {
        name: "Ангийн дундаж дүн",
        type: "line",
        data: groupAvg,
      },
    ],
    chart: {
      toolbar: {
        show: true,
        offsetX: 0,
        offsetY: 0,
        tools: {
          download: true,
          selection: true,
          zoom: true,
          zoomin: true,
          zoomout: true,
          pan: true,
          customIcons: [],
        },
        autoSelected: "zoom",
      },
      height: 250,
      type: "line",
    },
    stroke: {
      width: [0, 4],
    },
    title: {
      text: "Хичээлийн шалгалт",
    },
    dataLabels: {
      enabled: true,
      enabledOnSeries: [1],
    },
    labels: dateList,
    xaxis: {
      type: "datetime",
    },
    yaxis: [
      {
        title: {
          text: "Өөрийн оноо",
        },
      },
      {
        opposite: true,
        title: {
          text: "Ангийн дундаж оноо",
        },
      },
    ],
  };
  return options;
}
