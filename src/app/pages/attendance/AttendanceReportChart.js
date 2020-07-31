import React, { useMemo, useEffect } from "react";
import objectPath from "object-path";
import ApexCharts from "apexcharts";
import { useHtmlClassService } from "../../../_metronic/layout";
import { KTUtil } from "../../../_metronic/_assets/js/components/util";

export function AttendanceReportChart({ className, came, sick, total, excused, unexcused, late }) {
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
    const element = document.getElementById("kt_mixed_widget_attendance_chart");
    if (!element) {
      return;
    }

    console.log(' chartData ', came, excused, unexcused, late, sick)

    const height = parseInt(KTUtil.css(element, "height"));
    const options = getChartOptions(layoutProps, height, came, excused, unexcused, late, sick);

    var chart = new ApexCharts(element, options);
    chart.render();

    return function cleanUp() {
      chart.destroy();
    };
  }, [layoutProps, came, excused, unexcused, late, sick]);

  return (
    <>
      <div className="flex-grow-1">
        <div
          id="kt_mixed_widget_attendance_chart"
          style={{ height: "200px" }}
        ></div>
      </div>
    </>
  );
}

function getChartOptions(layoutProps, height, came, excused, unexcused, late, sick) {
  // console.log(' chartData ', came, excused, unexcused, late, sick)
  const options = {
    series: [
      {
        name: '',
        data: [came, excused, unexcused, late, sick],
      },
    ],
    chart: {
      height: 200,
      type: "bar",
      events: {
        click: function (chart, w, e) {
          // console.log(chart, w, e)
        },
      },
    },
    colors: [
      "rgba(62, 191, 163, 0.8)",
      "rgb(249, 184, 34)",
      "rgb(244, 81, 107)",
      "rgb(87, 89, 98)",
      "rgb(113, 106, 202)",
    ],
    plotOptions: {
      bar: {
        columnWidth: "45%",
        distributed: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      categories: [
        ["Ирсэн"],
        ["Чөлөөтэй"],
        ["Тасалсан"],
        "Хоцорсон",
        ["Өвчтэй"],
      ],
      labels: {
        style: {
          colors: [
            "rgba(62, 191, 163, 0.8)",
            "rgb(249, 184, 34)",
            "rgb(244, 81, 107)",
            "rgb(87, 89, 98)",
            "rgb(113, 106, 202)",
          ],
          fontSize: "12px",
        },
      },
    },
  };
  return options;
}
