import React from "react";
import Checkbox from "../components/checkbox/checkbox";
import Button from "../layouts/tasks-details/buttons/main-button/main-button";
import "../../src/layouts/tasks-category/task-category-own/task-category-own.scss";
import { ToDos } from "./types/todos";

import { useDispatch, useSelector } from "react-redux";
import { TaskState, taskTypes } from "./types/ownTypes";
import "../storeOwn/types/ownComponent.scss";
import moment from "moment";
import ViewButton from "../components/view-button/view";

const TodosWrapper: React.FC = () => {
    const ToDos: React.FC = () => {
        const dispatch = useDispatch();
        const todos = useSelector((state: TaskState) => state.todos);

        React.useEffect(() => {
            console.log("Update");
            console.log(todos);
        });

        if (!todos || !todos.length) {
            return <div className={"todoStyle"}>No todos in your list</div>;
        }

        const handleDelete = (id) =>
            dispatch({
                type: taskTypes.DELETE_TASK,
                payload: id,
            });

        const todosName = todos.map((todo, index) => (
            <div className="todos-name" key={index} onClick={() => handleDelete(todo.id)}>
                {todo.title}
            </div>
        ));

        const todosExpiredAt = todos.map((todo, index) => {
            return (
                <div key={index} className="date">
                    <p>{moment().format("MMMM Do YYYY, h:mm:ss a")}</p>
                </div>
            );
        });

        return (
            <div className="styles">
                <Checkbox />
                {todosName}

                <Button
                    text={"Inactive"}
                    singleButton={"material-icons-margin-0"}
                    classNames={"inactive-button"}
                />
                {todosExpiredAt}

                <ViewButton />
            </div>
        );
    };

    return (
        <div>
            <ToDos />
        </div>
    );
};

export default TodosWrapper;
