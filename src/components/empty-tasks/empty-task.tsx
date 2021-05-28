import React from "react";
import "./empty-task.scss"

const EmptyTask: React.FC = () => {
    return (<div className="empty-task-wrapper d-flex justify-content-center align-items-center">
            <p>You have’t any created tasks.</p>
    </div>)
}

export default EmptyTask