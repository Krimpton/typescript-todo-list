import React, { FC } from "react";
import "./tasks-details.scss";
import Button from "./buttons/main-button/main-button";
import TasksText from "../a-complete-layouts/tasks-details-component/tasks-text/tasks-text";
import ModalWindow from "../../components/modal-windows/modal-tasks-datails-delete/modal-window";
import InputComponent from "../../components/input-component/input-component";
import { useHistory } from "react-router-dom";
import { time } from "../../store/reducers/reducer";
import { useSelector } from "react-redux";
import { TaskItemType } from "../../store/types/types";

export type TasksDetailsProps = {
    active: boolean;
    setActive: (active: boolean) => void;
};

export type InputDetailsProps = {
    inputTitle: string;
    expiredAt?: string;
};

const TasksDetails: FC = () => {
    const [modalActive2, setModalActive2] = React.useState<boolean>(true);

    const toggleVisibleHandler = () => {
        setModalActive2((modalActive2) => !modalActive2);
        console.log(setModalActive2);
        console.log(modalActive2);
    };

    const history = useHistory();

    const handleClickTasks = () => {
        history.push("/tasksList");
    };

    const title = useSelector((state: TaskItemType) => state.title);

    return (
        <div className="tasks-wrapper">
            <ModalWindow active={modalActive2} setActive={setModalActive2}>
                <div className="edit-wrapper">
                    <div className="edit-header d-flex justify-content-center align-items-center">
                        <p>Task edit</p>
                        <span onClick={toggleVisibleHandler} className="material-icons">
                            cancel
                        </span>
                    </div>
                    <div className="edit-main-content">
                        <InputComponent inputTitle={"Name"} expiredAt={"Expired at"} />
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
            </ModalWindow>

            <p className="tasks-title">LOREM</p>
            <h1 className="tasks-created">{time}</h1>
            <h1 className="tasks-expired ">{time}</h1>
            <Button text={"Pending"} classNames={"button-pending"} />

            <div className="status-wrapper">
                <Button
                    text={"Done"}
                    classNames={"done-button"}
                    mIcons={"done"}
                    action={() => setModalActive2(true)}
                />

                <Button
                    text={"Edit"}
                    classNames={"edit-button"}
                    mIcons={"edit"}
                    action={toggleVisibleHandler}
                />

                <Button text={"Remove"} classNames={"remove-button"} mIcons={"remove"} />
            </div>

            <div className="status-text">
                <TasksText />
            </div>
            <div className="d-flex justify-content-end align-items-center">
                <Button
                    text="Return"
                    classNames={"return-button"}
                    mIcons={"remove"}
                    action={handleClickTasks}
                />
            </div>
        </div>
    );
};

export default TasksDetails;
