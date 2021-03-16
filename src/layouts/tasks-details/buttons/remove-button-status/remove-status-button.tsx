import React from "react";
import "./remove-status-button.scss"

const RemoveStatus: React.FC = () => {
    return (<div>
        <div className="remove-status d-flex">
            <span className="material-icons">delete_forever</span>
            <span>Remove</span>
        </div>
    </div>)
}

export default RemoveStatus