import React, { ChangeEvent, useCallback, useState } from "react";
import { taskTypes } from "./ownTypes";
import { useDispatch } from "react-redux";
import { StatusTypesEnum } from "../../constans";
import Button from "../../layouts/tasks-details/buttons/main-button/main-button";

export const TodoInput: React.FC = () => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState<string>("");


    const [status, setStatus] = useState<string>("");

    const id = Math.round(Math.random() * 10);

    const expiredAt = new Date();

    const handleTitleChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => setTitle(event.target.value),
        [],
    );



    const handleStatusChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => setStatus(event.target.value),
        [],
    );

    const handleSubmit = () => {
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
    };

    return (
        <div>
            <div className="mb-3">
                <p className="mb-1 font-weight-bold">Title:</p>
                <input
                    value={title}
                    onChange={handleTitleChange}
                    type="text"
                    placeholder="type anything"
                />
            </div>


            <div className="mb-3">
                <p className="mb-1 font-weight-bold">Status:</p>
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

                <div className="mb-2">
                    <label htmlFor={`input_radio-${StatusTypesEnum.INACTIVE}`}>
                        <input
                            value={StatusTypesEnum.INACTIVE}
                            onChange={handleStatusChange}
                            type="radio"
                            name="status"
                            id={`input_radio-${StatusTypesEnum.INACTIVE}`}
                        />
                        <span className="ml-2">Inactive</span>
                    </label>
                </div>
            </div>
            <button onClick={handleSubmit}>ADD</button>
            <Button text={"Add New"} singleButton={'material-icons-margin-0'} classNames={'add-new-button'} action={handleSubmit}/>
        </div>
    );
};