import React from "react";
import "./tasks-details.scss"
import DoneStatus from "./buttons/done-button-status/done-status-button";
import EditStatus from "./buttons/edit-button-status/edit-status-button";
import RemoveStatus from "./buttons/remove-button-status/remove-status-button";


const TasksDetails: React.FC = () => {
    return (
        <div className="tasks-wrapper">
            <p>Lorem ipsum dolor</p>
            <h1 className="created">Created at: 20/02/2020, 07:00 pm</h1>
            <h1 className="expireds">Expired at: 21/02/2020, 07:58 am</h1>

            <div className="status-wrapper">

                <DoneStatus/>

                <EditStatus/>

                <RemoveStatus/>


            </div>

            <div className="status-text">
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when
                    looking
                    at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
                    letters,
                    as opposed to using 'Content here, content here', making it look like readable English. Many desktop
                    publishing packages and web page editors now use Lorem Ipsum as their default model text, and a
                    search for
                    'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over
                    the
                    years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
            </div>

        </div>)
}

export default TasksDetails