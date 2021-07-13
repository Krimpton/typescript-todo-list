import React from "react";
import "./tasks-name.scss";
import {useDispatch, useSelector} from "react-redux";
import {TaskState, taskTypes} from "../../storeOwn/types/ownTypes";

export type sType = {
    text?: string;
}

const TaskText: React.FC<sType> = ({text}) => {

    const dispatch = useDispatch();

    const ToDos2: React.FC = () => {
        const todos = useSelector((state: TaskState) => state.todos);
        const handleCLick = id => dispatch({
            type: taskTypes.DELETE_TASK,
            payload: id,
        });
        if (!todos || !todos.length) {
            return <p>NO TODOS</p>
        }
        return (<ul>{todos.map(todo => <li onClick={() => handleCLick(todo.id)}>{todo.label}</li>)}</ul>)
    }

    return (<div className="text">
        {/*<p>{text}</p>*/}
        {/*<ToDos2/>*/}
        <ul>
            {/*{todos.map( (task))}*/}
        </ul>

    </div>)
}

export default TaskText;