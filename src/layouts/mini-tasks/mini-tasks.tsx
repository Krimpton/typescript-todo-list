import React from "react";
import "./mini-tasks.scss";

const MiniTasks: React.FC = () => {
    return (<div className="tasks-category d-flex justify-content-center">

                <div className="mini-tasks">
                    <span className="material-icons">list</span>
                    <h6>All tasks</h6>
                    <p>50 tasks</p>
                </div>

                <div className="mini-tasks">
                    <span className="material-icons">gamepad</span>
                    <h6>Rust</h6>
                    <p>21 tasks</p>
                </div>

                <div className="mini-tasks">
                    <span className="material-icons">add_business</span>
                    <h6>Supermarket</h6>
                    <p>21 tasks</p>
                </div>
            </div>)
}

export default MiniTasks;