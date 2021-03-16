import React from "react";
import "./tasks.scss"

const Tasks:React.FC = () => {
    return (<div className="wrapper">
        <div className="tasks-bar">
            <p>Name</p>
            <p>Status</p>
            <p>Expired at</p>
        </div>
    </div>)
}

export default Tasks