import React from "react";
import "./tasks-info.scss";

export type TasksProps = {
    tasksNumber: number;
    tasksName: string;
};

const TasksInfo: React.FC<TasksProps> = ({ tasksName, tasksNumber }) => {
    return (
        <div className="tasks-info d-flex justify-content-center align-items-center">
            <div className="created-tasks-container d-flex justify-content-center align-items-center">
                <p className="tasks-number">{tasksNumber}</p>
                <span className="task-name">{tasksName}</span>
            </div>
        </div>
    );
};

export default TasksInfo;
