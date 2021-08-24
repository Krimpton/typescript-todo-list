import React, { ChangeEvent, useCallback, useState } from "react";
import { taskTypes } from "../store/types/types";
import { useDispatch } from "react-redux";
import { StatusTypesEnum } from "../store/constants/constans";
import { v4 as uuidv4 } from "uuid";
import "./todoInput.scss";

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
        alert("nooo");
    }

    return (
        <div className="input-wrapper d-flex justify-content-center align-items-center flex-column font-weight-bold">
            <div className="mb-3">
                <p className="mb-1 font-weight-bold">Title:</p>

                <input
                    value={title}
                    onChange={handleTitleChange}
                    onKeyDown={handleKeyPress}
                    type="text"
                    placeholder="type anything..."
                />
            </div>

            <div className="mb-3">
                <p className="mb-1 font-weight-bold">Status:</p>
                <div className="mb-2">
                    <label htmlFor={`input_radio-${StatusTypesEnum.INACTIVE}`}>
                        <input
                            value={StatusTypesEnum.INACTIVE}
                            onChange={handleStatusChange}
                            type="radio"
                            name="status"
                            defaultChecked={true}
                            id={`input_radio-${StatusTypesEnum.INACTIVE}`}
                        />
                        <span className="ml-2">Inactive</span>
                    </label>
                </div>
                <div className="mb-2">
                    <label htmlFor={`input_radio-${StatusTypesEnum.PENDING}`}>
                        <input
                            value={StatusTypesEnum.PENDING}
                            onChange={handleStatusChange}
                            type="radio"
                            name="status"
                            id={`input_radio-${StatusTypesEnum.PENDING}`}
                        />
                        <span className="ml-2">Pending</span>
                    </label>
                </div>

                <div className="mb-2">
                    <label htmlFor={`input_radio-${StatusTypesEnum.COMPLETED}`}>
                        <input
                            value={StatusTypesEnum.COMPLETED}
                            onChange={handleStatusChange}
                            type="radio"
                            name="status"
                            id={`input_radio-${StatusTypesEnum.COMPLETED}`}
                        />
                        <span className="ml-2">Completed</span>
                    </label>
                </div>

                <div className="mb-2">
                    <label htmlFor={`input_radio-${StatusTypesEnum.EXPIRED}`}>
                        <input
                            value={StatusTypesEnum.EXPIRED}
                            onChange={handleStatusChange}
                            type="radio"
                            name="status"
                            id={`input_radio-${StatusTypesEnum.EXPIRED}`}
                        />
                        <span className="ml-2">Expired</span>
                    </label>
                </div>
            </div>
        </div>
    );
};