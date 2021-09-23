import React, { FC } from "react";
import "./tasks-details.scss";
import Button from "./buttons/main-button/main-button";
import TasksText from "../a-complete-layouts/tasks-details-component/tasks-text/tasks-text";
import { useHistory } from "react-router-dom";
import { time } from "../../store/reducers/tasks-list-reducer";

export type TasksDetailsProps = {
    active: boolean;
    setActive: (active: boolean) => void;
};

const TasksDetails: FC = () => {
    const [isOpen, setIsOpen] = React.useState<boolean>(false);

    const [isOpenSecond, setIsOpenSecond] = React.useState<boolean>(false);

    const toggleVisibleHandler = () => {
        setIsOpen((isOpen) => !isOpen);
    };

    const toggleVisibleHandlerSecond = () => {
        setIsOpenSecond((isOpenSecond) => !isOpenSecond);
    };

    const history = useHistory();

    const handleClickTasks = () => {
        history.push("/tasksList");
    };

    return (
        <div className="tasks-details-wrapper d-flex justify-content-center align-items-center">
            <div className="tasks-wrapper">
                {isOpen && (
                    <div className="isModal-task-details" onClick={() => setIsOpen(false)}>
                        <div className="task-task-details" onClick={(e) => e.stopPropagation()}>
                            <div className="edit-wrapper">
                                <div className="edit-header d-flex justify-content-center align-items-center">
                                    <p className="task-title">Task edit</p>
                                    <span onClick={toggleVisibleHandler} className="material-icons">
                                        cancel
                                    </span>
                                </div>
                                <div className="edit-main-content d-flex justify-content-start align-items-start flex-column">
                                    <div>
                                        <div className="name-title">Name:</div>
                                        <input />
                                    </div>

                                    <div>
                                        <div className="expired-title">Expired at:</div>
                                        <input />
                                    </div>

                                    <div className="description-block">
                                        <div className="description-title">Description:</div>
                                        <textarea className="description-textarea" />
                                    </div>
                                </div>
                                <div className="edit-footer">
                                    <Button
                                        text={"Cancel"}
                                        action={toggleVisibleHandler}
                                        classNames={"cancel-button"}
                                        singleButton={"material-icons-margin-0"}
                                    />
                                    <Button
                                        text={"Save"}
                                        action={toggleVisibleHandler}
                                        classNames={"save-button"}
                                        singleButton={"material-icons-margin-0"}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {isOpenSecond && (
                    <div
                        className="isModal-task-details-second"
                        onClick={() => setIsOpenSecond(false)}
                    >
                        <div
                            className="task-task-details-second"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="details-title">Do you want to delete task?</div>
                            <div className="details-subtitle">
                                If you are really want to remove this task please click to <br />{" "}
                                remove button.
                            </div>
                            <div className="button-block">
                                <Button
                                    text="Cancel"
                                    classNames="cancel-button"
                                    action={() => setIsOpenSecond((prev) => !prev)}
                                />
                                <Button text="Delete" classNames="delete-button" />
                            </div>
                        </div>
                    </div>
                )}

                <p className="tasks-title">LOREM</p>
                <h1 className="tasks-created">{time}</h1>
                <h1 className="tasks-expired ">{time}</h1>
                <Button text={"Pending"} classNames={"button-pending"} />

                <div className="status-wrapper">
                    <button className="done-button" onClick={handleClickTasks}>
                        <span className={"material-icons pr-1 pt-1"}>done</span>Done
                    </button>
                    <button className="edit-button" onClick={toggleVisibleHandler}>
                        <span className={"material-icons pr-1 pt-1"}>edit</span>Edit
                    </button>
                    <button className="remove-button" onClick={toggleVisibleHandlerSecond}>
                        <span className={"material-icons pr-1 pt-1"}>remove</span>Remove
                    </button>
                </div>

                <div className="status-text">
                    <TasksText />
                </div>
                <div className="d-flex justify-content-end align-items-center">
                    <div className="details-return">
                        <Button
                            text="Return"
                            classNames={"return-button"}
                            action={handleClickTasks}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TasksDetails;
