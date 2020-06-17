import React, { useMemo, useEffect } from "react";
import objectPath from "object-path";
import ApexCharts from "apexcharts";
import { useHtmlClassService } from "../../../_metronic/layout";
import { KTUtil } from "../../../_metronic/_assets/js/components/util";

export default function ExamDashbaordMixedChart() {
  const uiService = useHtmlClassService();

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
    const options = getChartOptions(layoutProps, height);

    var chart = new ApexCharts(element, options);
    chart.render();

    return function cleanUp() {
      chart.destroy();
    };
  }, [layoutProps]);

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

function getChartOptions(layoutProps, height) {
  const options = {
    series: [
      {
        name: "Өөрийн дундаж",
        type: "column",
        data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160],
      },
      {
        name: "Ангийн дундаж дүн",
        type: "line",
        data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16],
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
    labels: [
      "01 Jan 2001",
      "02 Jan 2001",
      "03 Jan 2001",
      "04 Jan 2001",
      "05 Jan 2001",
      "06 Jan 2001",
      "07 Jan 2001",
      "08 Jan 2001",
      "09 Jan 2001",
      "10 Jan 2001",
      "11 Jan 2001",
      "12 Jan 2001",
    ],
    xaxis: {
      type: "datetime",
    },
    yaxis: [
      {
        title: {
          text: "Оноо",
        },
      },
      {
        opposite: true,
        title: {
          text: "Ахиц",
        },
      },
    ],
  };
  return options;
}
