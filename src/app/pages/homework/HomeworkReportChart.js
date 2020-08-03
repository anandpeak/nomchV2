import React, { useMemo, useEffect } from "react";
import objectPath from "object-path";
import ApexCharts from "apexcharts";
import { useHtmlClassService } from "../../../_metronic/layout";
import { KTUtil } from "../../../_metronic/_assets/js/components/util";

export function HomeworkReportChart({ completed, unfinished, unmade, unchecked, willDo }) {
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
    const element = document.getElementById("kt_mixed_widget_homework_chart");
    if (!element) {
      return;
    }

    const height = parseInt(KTUtil.css(element, "height"));
    const options = getChartOptions(completed, unfinished, unmade, unchecked, willDo);

    var chart = new ApexCharts(element, options);
    chart.render();

    return function cleanUp() {
      chart.destroy();
    };
  }, [layoutProps, completed, unfinished, unmade, unchecked, willDo]);

  return (
    <>
      <div className="flex-grow-1">
        <div
          id="kt_mixed_widget_homework_chart"
          style={{ height: "200px" }}
        ></div>
      </div>
    </>
  );
}

function getChartOptions(completed, unfinished, unmade, unchecked, willDo) {
  const options = {
    series: [
      {
        data: [willDo, completed, unfinished, unmade, unchecked],
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
      "rgba(87, 89, 98, 0.8)",
      "rgba(62, 191, 163, 0.8)",
      "rgb(249, 184, 34)",
      "rgb(244, 81, 107)",
      "rgb(87, 89, 98)",
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
        ["Хийх"],
        ["Бүрэн"],
        ["Дутуу"],
        ["Хийгээгүй"],
        ["Шалгуулаагүй"],
      ],
      labels: {
        style: {
          colors: [
            "rgba(87, 89, 98, 0.8)",
            "rgba(62, 191, 163, 0.8)",
            "rgb(249, 184, 34)",
            "rgb(244, 81, 107)",
            "rgb(87, 89, 98)",
          ],
          fontSize: "12px",
        },
      },
    },
  };
  return options;
}
