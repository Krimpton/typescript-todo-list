import React from "react";
import "./edit-status-button.scss"

const EditStatus:React.FC = () => {
    return(<div>
        <div className="edit-status d-flex">
            <span className="material-icons">settings</span>
            <span>Edit</span>
        </div>
    </div>)
}

export default EditStatus