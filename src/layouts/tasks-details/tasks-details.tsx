import React, { FC } from "react";
import "./tasks-details.scss";
import ModalWindow from "../../components/modal-windows/modal-tasks-datails-delete/modal-window";
import Button from "./buttons/main-button/main-button";
import InputComponent from "../../components/input-component/input-component";
import TasksText from "../a-complete-layouts/tasks-details-component/tasks-text/tasks-text";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { IArticle } from "../../store/actions/actions-type/types";
import { removeArticle } from "../../store/actions/actionCreators";

export type TasksDetailsProps = {
    active: boolean;
    setActive: (active: boolean) => void;
};

export type InputDetailsProps = {
    inputTitle: string;
    expiredAt?: string;
    description?: string;
};

const TasksDetails: FC = () => {
    const [modalActive2, setModalActive2] = React.useState(true);

    const toggleVisibleHandler = () => {
        setModalActive2((modalActive2) => !modalActive2);
        console.log(setModalActive2);
        console.log(modalActive2);
    };

    const dispatch: Dispatch<any> = useDispatch();

    const deleteArticle = React.useCallback(
        (article: IArticle) => dispatch(removeArticle(article)),
        [dispatch, removeArticle],
    );

    return (
        <div className="tasks-wrapper">
            {modalActive2 && <input/>  }
            <ModalWindow active={modalActive2} setActive={setModalActive2}>
                <div className="edit-wrapper">
                    <div className="edit-header d-flex justify-content-center align-items-center">
                        <p>Task edit</p>
                        <span onClick={toggleVisibleHandler} className="material-icons">
                            cancel
                        </span>
                    </div>
                    <div className="edit-main-content">
                        <InputComponent
                            inputTitle={"Name"}
                            description={"Description"}
                            expiredAt={"Expired at"}
                        />
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

            <p className="tasks-title">Lorem ipsum dolor</p>
            <h1 className="tasks-created">Created at: 20/02/2020, 07:00 pm</h1>
            <h1 className="tasks-expired">Expired at: 21/02/2020, 07:58 am</h1>
            <Button text={"Pending"} classNames={"button-pending"} />

            <div className="status-wrapper">
                <Button text={"Done"}
                        classNames={"done-button"}
                        mIcons={"done"}
                        action={() => setModalActive2(true)}/>


                <button onClick={() => setModalActive2(true)}>DDDDDDDDDDDDDDDD</button>


                <Button
                    text={"Edit"}
                    classNames={"edit-button"}
                    mIcons={"edit"}
                    action={toggleVisibleHandler}
                />

                <Button
                    text={"Remove"}
                    classNames={"remove-button"}
                    mIcons={"remove"}
                    action={() => deleteArticle}
                />
            </div>

            <div className="status-text">
                <TasksText />
            </div>
        </div>
    );
};
export default TasksDetails;
