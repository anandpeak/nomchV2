import React, { useMemo, useEffect } from "react";
import objectPath from "object-path";
import ApexCharts from "apexcharts";
import { useHtmlClassService } from "../../../_metronic/layout";
import { KTUtil } from "../../../_metronic/_assets/js/components/util";

export function AttendanceMixedWidget({ className }) {
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
    const element = document.getElementById("kt_mixed_widget_14_chart");
    if (!element) {
      return;
    }

    const height = parseInt(KTUtil.css(element, "height"));
    const options = getChartOptions(layoutProps, height);

    const chart = new ApexCharts(element, options);
    chart.render();
    return function cleanUp() {
      chart.destroy();
    };
  }, [layoutProps]);

  return (
    <>
      <div className="flex-grow-1">
        <div id="kt_mixed_widget_14_chart" style={{ height: "150px" }}></div>
      </div>
      <div className="pt-3">
        <p className="text-center font-weight-normal font-size-lg pb-7">
          <span>Нийт ирсэн хувь</span>
        </p>
      </div>
    </>
  );
}

function getChartOptions(layoutProps, height) {
  const options = {
    series: [74],
    chart: {
      height: height,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: "65%",
        },
        dataLabels: {
          showOn: "always",
          name: {
            show: false,
            fontWeight: "700",
          },
          value: {
            color: layoutProps.colorsGrayGray700,
            fontSize: "30px",
            fontWeight: "700",
            offsetY: 12,
            show: true,
          },
        },
        track: {
          background: layoutProps.colorsThemeLightSuccess,
          strokeWidth: "100%",
        },
      },
    },
    colors: [layoutProps.colorsThemeBaseSuccess],
    stroke: {
      lineCap: "round",
    },
    labels: ["Progress"],
  };
  return options;
}
