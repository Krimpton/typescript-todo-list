import React from "react";
import "./tasks-category.scss";
import Checkbox from "../../components/checkbox/checkbox";
import TasksName from "../../components/tasks-name/tasks-name";
import TasksDate from "../../components/tasks-date/tasks-date";
import ViewButton from "../../components/view-button/view";
import Completed from "../../components/tasks-status/completed/completed";
import Pending from "../../components/tasks-status/pending/pending";
import Expired from "../../components/tasks-status/exprired/expired";
import Inactive from "../../components/tasks-status/inactive/inactive";

const TasksCategory: React.FC = () => {
    return (<div className="wrapper-list">
            <div className="tasks-bar-list">
                <Checkbox/>
                <TasksName/>

                <Pending/>
                {/*<Completed/>*/}
                {/*<Expired/>*/}
                {/*<Inactive/>*/}

                <TasksDate/>
                <ViewButton/>
            </div>

            <div className="tasks-bar-list">
                <Checkbox/>
                <TasksName/>

                {/*<Pending/>*/}
                <Completed/>
                {/*<Expired/>*/}
                {/*<Inactive/>*/}

                <TasksDate/>
                <ViewButton/>
            </div>

            <div className="tasks-bar-list">
                <Checkbox/>
                <TasksName/>

                {/*<Pending/>*/}
                {/*<Completed/>*/}
                <Expired/>
                {/*<Inactive/>*/}

                <TasksDate/>
                <ViewButton/>
            </div>

            <div className="tasks-bar-list">
                <Checkbox/>
                <TasksName/>

                {/*<Pending/>*/}
                {/*<Completed/>*/}
                {/*<Expired/>*/}
                <Inactive/>

                <TasksDate/>
                <ViewButton/>
            </div>

        </div>
    )
}

export default TasksCategory;