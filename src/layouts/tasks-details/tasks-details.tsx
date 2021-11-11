import React, { ChangeEvent, FC, useCallback, useState } from "react";
import "./tasks-details.scss";
import Button from "./buttons/main-button/main-button";
import { useHistory, useParams } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { taskTypes } from "../../store/types/types";
import { useDispatch } from "react-redux";
import { StatusTypesEnum } from "../../store/constants/constans";

export type TasksDetailsProps = {
    active: boolean;
    setActive: (active: boolean) => void;
};

const TasksDetails: FC = () => {
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = React.useState<boolean>(false);

    const [isOpenSecond, setIsOpenSecond] = React.useState<boolean>(false);

    const toggleVisibleHandler = () => {
        setIsOpen((isOpen) => !isOpen);
    };

    const toggleVisibleHandlerSecond = () => {
        setIsOpenSecond((isOpenSecond) => !isOpenSecond);
    };

    const removeTodo = (id) => {
        history.push("/tasksList")
        setIsOpenSecond((prev) => !prev);
        dispatch({
            type: taskTypes.DELETE_TASK,
            payload: { id },
        });
    };



    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const expiredAtValue = "2021-07-20T16:09:00.765Z";

    const [expiredAt, setExpiredAt] = useState<string>(expiredAtValue);

    const handleTitleChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => setTitle(event.target.value),
        [],
    );

    const handleDescriptionChange = useCallback(
        (event: ChangeEvent<HTMLTextAreaElement>) => setDescription(event.target.value),
        [],
    );

    const handleExpiredAtChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => setExpiredAt(event.target.value),
        [],
    );

    const handleCLickEditTask = (e) => {
        if (title) {
            dispatch({
                type: taskTypes.EDIT_TASK,
                payload: {
                    title,
                    expiredAtValue,
                    // description,
                    // status,
                },
            });
            setTitle("");
            setDescription("");
            setExpiredAt("2021-07-20T16:09:00.765Z");
        }
    };

    const history = useHistory();

    const handleClickTasks = () => {
        history.push("/tasksList");
    };

    const handleSetStatusDone = () => {
        // history.push("/tasksList");

        dispatch({
            type: taskTypes.FILTER_STATUS_FILTER,
            payload: StatusTypesEnum.COMPLETED,
        });
    };

    // const editItem = (id) => {
    //     const items = todos.find((item) => item.id === id)
    // }

    const { todos } = useTypedSelector((state) => state.taskList);

    const todosEverything = todos.map((todo, index) => (
        <div key={index}>
            <p className="tasks-title">{todo.title}</p>
            <h1 className="tasks-created">{todo.expiredAt}</h1>
            <h1 className="tasks-expired ">{todo.expiredAt}</h1>
            <div className={"button-status d-flex justify-content-end"}>
                <Button text={todo.status} classNames={todo.status} />
            </div>

            <div className="status-wrapper">
                <button className="done-button" onClick={handleSetStatusDone}>
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
                <p>{todo.description}</p>
            </div>
            {isOpenSecond && (
                <div className="isModal-task-details-second" onClick={() => setIsOpenSecond(false)}>
                    <div className="task-task-details-second" onClick={(e) => e.stopPropagation()}>
                        <div className="details-title">Do you want to delete task?</div>
                        <div className="details-subtitle">
                            If you are really want to remove this task please click to <br /> remove
                            button.
                        </div>
                        <div className="button-block">
                            <Button
                                text="Cancel"
                                classNames="cancel-button"
                                action={() => setIsOpenSecond((prev) => !prev)}
                            />
                            <Button
                                text="Delete"
                                classNames="delete-button"
                                action={() => removeTodo(todo.id)}
                            />
                        </div>
                    </div>
                </div>
            )}

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
    ));

    return (
        <div className="tasks-details-wrapper d-flex justify-content-center align-items-center">
            <div className="tasks-wrapper">
                {todosEverything}
                {/*<TaskDetailsAdditional title={todos}/>*/}

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
                                        <input value={title} onChange={handleTitleChange} />
                                    </div>

                                    <div>
                                        <div className="expired-title">Expired at:</div>
                                        <input value={expiredAt} onChange={handleExpiredAtChange} />
                                    </div>

                                    <div className="description-block">
                                        <div className="description-title">Description:</div>
                                        <textarea
                                            className="description-textarea"
                                            value={description}
                                            onChange={handleDescriptionChange}
                                        />
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
                                        action={handleCLickEditTask}
                                        classNames={"save-button"}
                                        singleButton={"material-icons-margin-0"}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TasksDetails;
