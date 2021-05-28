import React from "react";
import "./mini-tasks.scss";

export type tasksPropsNew = {
    ttIcon: string;
    taskName: string;
    tasksNumber: string;
}

const MiniTasks: React.FC<tasksPropsNew> = ({ttIcon, tasksNumber, taskName}) => {
    return (<div className="mini-tasks">
        <span className="material-icons tasks-icons d-flex justify-content-center">{ttIcon}</span>
        <span className="tasks-names d-flex justify-content-center">{taskName}</span>
        <p className="tasks-numbers d-flex justify-content-center">{tasksNumber}</p>
    </div>)

}
export default MiniTasks;