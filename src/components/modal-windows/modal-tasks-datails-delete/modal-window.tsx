import React from "react";
import "./modal-window.scss"
import {TasksDetailsProps} from "../../../layouts/tasks-details/tasks-details";

const ModalWindow: React.FC<TasksDetailsProps> = ({active, setActive, children}) => {

    return (<div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
        <div className={active ? "modal-content active" : "modal-content"} onClick={e => e.stopPropagation()}>
            {children}
        </div>
    </div>)
}

export default ModalWindow