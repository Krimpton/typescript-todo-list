import React from "react";
import "./done-status-button.scss"

const DoneStatus:React.FC = () => {
    return(<div>
        <div className="done-status d-flex">
            <span className="material-icons">done</span>
            <span>Done</span>
        </div>
    </div>)
}

export default DoneStatus