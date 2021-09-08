import React from "react";
import "./tasks.scss"

const Tasks: React.FC = () => {
    return (<div className="tasks-bar d-flex justify-content-center align-items-center">
        <p>Name</p>
        <p>Status</p>
        <p>Expired at</p>
    </div>)
}

export default Tasks