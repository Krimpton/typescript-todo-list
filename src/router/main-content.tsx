import React, { FC, lazy, Suspense } from "react";
import "./main-content.scss";
import Loader from "react-loader-spinner";
import "../firebase";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CookiesProvider } from "react-cookie";

const TasksList = lazy(() => import("../layouts/a-complete-layouts/tasks-list/tasks-list"));
const Login = lazy(() => import("../layouts/a-complete-layouts/auth-page/login-page/login"));
const PageNotFound = lazy(() => import("../layouts/page-404/page-404"));
const TasksDetailsComponent = lazy(() => import("../layouts/a-complete-layouts/tasks-details-component/tasks-details-component"));
const DashboardComponent = lazy(() => import("../layouts/a-complete-layouts/dashboard-component/dashboard-component"));
const Registration = lazy(() => import("../layouts/a-complete-layouts/auth-page/register-page/registration"));

const MainContent: FC = () => {
  return (
    <BrowserRouter>
      <CookiesProvider>
        <div className="main-wrapper">
          <Suspense fallback={<div className="spinner d-flex justify-content-center align-items-center">
            <Loader type="Circles" color="#00BFFF" height={100} width={100} />
          </div>}>
            <Switch>
              <Route exact path={"/dashboard"} component={DashboardComponent} />
              <Route path={"/tasksList/:id"} component={TasksList} />
              <Route path={"/tasksDetails/:id"} component={TasksDetailsComponent} />
              <Route exact path={"/login"} component={Login} />
              <Route exact path={"/registration"} component={Registration} />
              <Route exact path="/" component={DashboardComponent} />
              <Route component={PageNotFound} />
            </Switch>
          </Suspense>
        </div>
      </CookiesProvider>
    </BrowserRouter>
  );
};

export default MainContent;