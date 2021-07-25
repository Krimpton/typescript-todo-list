import React, { FC } from "react";
import "./main-content.scss";

import Dashboard from "../layouts/a-complete-layouts/dashboard-component/dashboard-component";
import { BrowserRouter, Route } from "react-router-dom";
import TasksList from "../layouts/a-complete-layouts/tasks-main-list/tasks-list";
import Auth from "../layouts/a-complete-layouts/auth-page/auth";
import PageNotFound from "../layouts/page-404/page-404";
import TasksDetailsComponent from "../layouts/a-complete-layouts/tasks-details-component/tasks-details-component";

const MainContent: FC = () => {
    return (
        <BrowserRouter>
            <div className="main-wrapper">
                <Route exact path="/" component={Dashboard} />
                <Route exact path={"/dashboard"} component={Dashboard} />
                <Route exact path={"/tasksList"} component={TasksList} />
                <Route exact path={"/tasksDetails"} component={TasksDetailsComponent} />
                <Route exact path={"/auth"} component={Auth} />
                <Route exact path={"/page404"} component={PageNotFound} />
            </div>
        </BrowserRouter>
    );
};

export default MainContent;
