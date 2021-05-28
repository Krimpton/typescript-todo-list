import React, {FC} from "react";
import "./main-content.scss";

import DashboardComponent from "../layouts/a-complete-layouts/dashboard-component/dashboard-component";
import EmptyTasksMainList from "../layouts/a-complete-layouts/empty-tasks-main-list/empty-tasks-main-list";
import {BrowserRouter, Route} from "react-router-dom";
import TasksMainList from "../layouts/a-complete-layouts/tasks-main-list/tasks-main-list";
import TasksDetailsComponent from "../layouts/a-complete-layouts/tasks-details-component/tasks-details-component";
import Auth from "../layouts/a-complete-layouts/auth-page/auth";
import PageNotFound from "../layouts/page-404/page-404";


const MainContent: FC = () => {

    return (
        <BrowserRouter>
            <div className="main-wrapper">
                <Route exact path="/" component={DashboardComponent}/>

                <Route path={'/dashboard'} exact>
                    <DashboardComponent/>
                </Route>

                <Route path={'/tasksList/empty'} exact>
                    <EmptyTasksMainList/>
                </Route>

                <Route path={'/tasksList'} exact>
                    <TasksMainList/>
                </Route>

                <Route path={'/tasksDetails'} exact>
                    <TasksDetailsComponent/>
                </Route>

                <Route path={'/auth'} exact>
                    <Auth/>
                </Route>

                <Route path={'/page404'} exact>
                    <PageNotFound/>
                </Route>
            </div>
        </BrowserRouter>
    );
};


export default MainContent;
