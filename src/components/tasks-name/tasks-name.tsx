import React from "react";
import "./tasks-name.scss";

export type sType = {
    text: string;
}

const TasksName: React.FC<sType> = ({text}) => {
    return (<div className="text">
        <p>{text}</p>
    </div>)
}

export default TasksName