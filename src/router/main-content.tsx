import React, { FC } from "react";
import "./main-content.scss";

import { BrowserRouter, Route } from "react-router-dom";
import TasksList from "../layouts/a-complete-layouts/tasks-list/tasks-list";
import Auth from "../layouts/a-complete-layouts/auth-page/auth";
import PageNotFound from "../layouts/page-404/page-404";
import TasksDetailsComponent from "../layouts/a-complete-layouts/tasks-details-component/tasks-details-component";
import DashboardComponent from "../layouts/a-complete-layouts/dashboard-component/dashboard-component";
import { ButtonProps } from "../store/store";

const MainContent: FC<ButtonProps> = () => {
    return (
        <BrowserRouter>
            <div className="main-wrapper">
                <Route exact path={"/dashboard"} component={DashboardComponent} />
                <Route exact path={"/tasksList"} component={TasksList} />
                <Route exact path={"/tasksDetails"} component={TasksDetailsComponent} />
                <Route exact path={"/auth"} component={Auth} />
                <Route exact path={"/pageError"} component={PageNotFound} />
                <Route exact path="/" component={DashboardComponent} />
            </div>
        </BrowserRouter>
    );
};

export default MainContent;
