import React from "react";
import "./tasks-date.scss";

export type dateProps = {
    date: string;
}

const TasksDate: React.FC<dateProps> = ({date}) => {
    return (<div className="date">
        <p>{date}</p>
    </div>)
}

export default TasksDate