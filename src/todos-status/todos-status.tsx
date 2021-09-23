import React from "react";
import "./todos-status.scss";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { TaskItemType, TaskState } from "../store/types/types";

const TodosStatus: React.FC<TaskItemType> = ({status}) => {
    const { todos } = useTypedSelector((state) => state.taskList);

    const todosStatusList = todos.map((item) => (
        <div
            className="status-type d-flex justify-content-center flex-column align-items-center"
            key={item.id}
        >
            {item.status}
        </div>
    ));

    return <div>{todosStatusList}</div>;
};

export default TodosStatus;
