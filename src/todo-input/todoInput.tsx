import React, { ChangeEvent, useCallback, useState } from "react";
import { taskTypes } from "../store/types/types";
import { useDispatch } from "react-redux";
import { StatusTypesEnum } from "../store/constants/constans";
import { v4 as uuidv4 } from "uuid";
import "./todoInput.scss";
import Button from "../layouts/tasks-details/buttons/main-button/main-button";

export const TodoInput: React.FC = () => {
    const dispatch = useDispatch();

    const defaultValue = StatusTypesEnum.INACTIVE;

    const [title, setTitle] = useState<string>("");

    const [status, setStatus] = useState<string>(defaultValue);

    const id = uuidv4();

    const expiredAt = "2021-07-20T16:09:00.765Z";

    const handleTitleChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => setTitle(event.target.value),
        [],
    );

    const handleStatusChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => setStatus(event.target.value),
        [],
    );

    const handleSubmit = (e) => {
        if (title) {
            dispatch({
                type: taskTypes.ADD_TASK,
                payload: {
                    id,
                    title,
                    status,
                    expiredAt,
                },
            });
            setTitle("");
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSubmit(e);
        }
    };

    if (title.length > 10) {
        alert("no");
    }

    return (
        <div>
            <div className="input-wrapper">
                <p className="input-todos-title mb-1 font-weight-bold d-flex justify-content-center">
                    Title:
                </p>
                <input
                    className="big-input mb-2"
                    value={title}
                    onChange={handleTitleChange}
                    onKeyDown={handleKeyPress}
                    type="text"
                    placeholder="type anything..."
                />
            </div>

            <div className="ml-3 mt-3">
                <div>
                    <p className="mb-1 font-weight-bold">Status:</p>
                    <label
                        className="d-flex align-items-center"
                        htmlFor={`input_radio-${StatusTypesEnum.INACTIVE}`}
                    >
                        <input
                            className="input-todos"
                            value={StatusTypesEnum.INACTIVE}
                            onChange={handleStatusChange}
                            type="radio"
                            name="status"
                            defaultChecked={true}
                            id={`input_radio-${StatusTypesEnum.INACTIVE}`}
                        />
                        <span className="status-text-block ml-2">Inactive</span>
                    </label>
                </div>

                <div>
                    <label
                        className="d-flex align-items-center"
                        htmlFor={`input_radio-${StatusTypesEnum.PENDING}`}
                    >
                        <input
                            className="input-todos"
                            value={StatusTypesEnum.PENDING}
                            onChange={handleStatusChange}
                            type="radio"
                            name="status"
                            id={`input_radio-${StatusTypesEnum.PENDING}`}
                        />
                        <span className="status-text-block ml-2">Pending</span>
                    </label>
                </div>

                <div className="mb-2">
                    <label
                        className="d-flex align-items-center"
                        htmlFor={`input_radio-${StatusTypesEnum.COMPLETED}`}
                    >
                        <input
                            className="input-todos"
                            value={StatusTypesEnum.COMPLETED}
                            onChange={handleStatusChange}
                            type="radio"
                            name="status"
                            id={`input_radio-${StatusTypesEnum.COMPLETED}`}
                        />
                        <span className="status-text-block ml-2">Completed</span>
                    </label>
                </div>

                <div className="mb-2">
                    <label
                        className="d-flex align-items-center"
                        htmlFor={`input_radio-${StatusTypesEnum.EXPIRED}`}
                    >
                        <input
                            className="input-todos"
                            value={StatusTypesEnum.EXPIRED}
                            onChange={handleStatusChange}
                            type="radio"
                            name="status"
                            id={`input_radio-${StatusTypesEnum.EXPIRED}`}
                        />
                        <span className="status-text-block ml-2">Expired</span>
                    </label>
                </div>
                <Button
                    text="Add task"
                    classNames="add-category-task-list-button"
                    action={handleSubmit}
                />
            </div>
        </div>
    );
};
