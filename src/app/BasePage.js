import React, { Suspense, lazy } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { LayoutSplashScreen, ContentRoute } from "../_metronic/layout";
import { BuilderPage } from "./pages/BuilderPage";
import { MyPage } from "./pages/MyPage";
import { DashboardPage } from "./pages/DashboardPage";
import AttendanceSeasons from "./pages/attendance/AttendanceSeasons";
import AttendanceReport from "./pages/attendance/AttendanceReport";
import HomeworkDashboard from "./pages/homework/HomeworkDashboard.js";
import HomeworkReport from './pages/homework/HomeworkReport'
import ExamDashboard from './pages/exam/ExamDashboard'
import SeasonGradeDashBoard from './pages/seasonGrade/SeasonGradeDashboard.js'
import { Layout } from "../_metronic/layout";

const GoogleMaterialPage = lazy(() =>
  import("./modules/GoogleMaterialExamples/GoogleMaterialPage")
);
const ReactBootstrapPage = lazy(() =>
  import("./modules/ReactBootstrapExamples/ReactBootstrapPage")
);
const ECommercePage = lazy(() =>
  import("./modules/ECommerce/pages/eCommercePage")
);

export default function BasePage() {
  // useEffect(() => {
  //   console.log('Base page');
  // }, []) // [] - is required if you need only one call
  // https://reactjs.org/docs/hooks-reference.html#useeffect

  return (
    <>
      <Suspense fallback={<LayoutSplashScreen />}>
        <Layout>
          <Switch>
            {
              /* Redirect from root URL to /dashboard. */
              <Redirect exact from="/" to="/dashboard" />
            }
            <ContentRoute path="/dashboard" component={DashboardPage} />
            <ContentRoute path="/builder" component={BuilderPage} />
            <ContentRoute path="/my-page" component={MyPage} />
            <ContentRoute path="/attendance" component={AttendanceSeasons} />
            <ContentRoute path="/homework" component={HomeworkDashboard} />
            <ContentRoute path="/exam" component={ExamDashboard} />
            <ContentRoute path="/grade/:id" component={SeasonGradeDashBoard} />

            <Route path="/google-material" component={GoogleMaterialPage} />
            <Route path="/react-bootstrap" component={ReactBootstrapPage} />
            <Route path="/e-commerce" component={ECommercePage} />
            <Redirect to="error/error-v1" />
          </Switch>
        </Layout>
      </Suspense>
      <ContentRoute path="/attendance/:id" component={AttendanceReport} />
      <ContentRoute path="/homework/:id" component={HomeworkReport} />
    </>
  );
}
