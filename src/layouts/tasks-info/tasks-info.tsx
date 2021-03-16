import React from "react";
import "./tasks-info.scss"

const TasksInfo: React.FC = () => {
    return (<div className="tasks-info">

            <div className="tasks-container d-flex">
                <p>57</p>
                <span>Created tasks</span>
            </div>

            <div className="tasks-container">
                <p>22</p>
                <span>Completed tasks</span>
            </div>

    </div>)
}

export default TasksInfo