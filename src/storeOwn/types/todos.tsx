import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TaskState, taskTypes } from "./ownTypes";

export const ToDos: FC = () => {

    React.useEffect(() => {
        console.log("UPDATE!");
    }, []);

    const dispatch = useDispatch();

    const todos = useSelector((state: TaskState) => state.todos);

    const handleCLick = (id) =>
        dispatch({
            type: taskTypes.DELETE_TASK,
            payload: id,
        });
    if (!todos || !todos.length) {
        return <p>NO TODOS</p>;
    }


    const todoItem = todos.map((todo, index) => (
        <li key={todo} onClick={() => handleCLick(todo.id)}>
            {todo.label}
        </li>
    ));

    return <div>
        {todoItem}
    </div>;
};
