import React, { useEffect } from "react";
import Button from "../layouts/tasks-details/buttons/main-button/main-button";
import "../layouts/tasks-category/task-category-own/task-category-own.scss";

import "./todosWrapper.scss";
import { useDispatch, useSelector } from "react-redux";
import { TaskItemType, TaskState, taskTypes } from "../store/types/types";
import { time } from "../store/reducers/reducer";
import {useHistory} from "react-router-dom";

const ToDosWrapper: React.FC = () => {
    const status = useSelector((state: TaskItemType) => state.status);
    const dispatch = useDispatch();

    const history = useHistory();

    const handleClickTasks = () => {
        history.push("/tasksDetails");
    };

    useEffect(() => {
        console.log(status);
    }, [status]);

    const todos = useSelector((state: TaskState) => state.todos);

    const handleDelete = (id) =>
        dispatch({
            type: taskTypes.DELETE_TASK,
            payload: id,
        });

    const todosEverything = todos.map((todo, index) => (
        <div
            className="todos-name d-flex justify-content-center align-items-center"
            key={todo.id}
            onClick={() => handleDelete(todo.id)}
        >
            <input type="checkbox" name="checkbox" className="check" />
            <div className="title">{todo.title}</div>
            <Button
                key={todo.id}
                text={todo.status}
                singleButton={"material-icons-margin-0"}
                classNames={"inactive-button"}
            />
            <div key={index} className="date d-flex justify-content-center align-items-center">
                <p>{time}</p>
                <Button
                    text={"View"}
                    singleButton={"material-icons-margin-0"}
                    classNames={"button-view"}
                    action={handleClickTasks}
                />
            </div>
        </div>
    ));

    return (
        <div>
            {!todos.length ? (
                <p className="todos-empty d-flex justify-content-center align-items-center">
                    You have’t any created tasks.
                </p>
            ) : (
                <div>{todosEverything}</div>
            )}
        </div>
    );
};

export default ToDosWrapper;
