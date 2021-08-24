import React, { useMemo, useState } from "react";
import Button from "../layouts/tasks-details/buttons/main-button/main-button";
import "../layouts/tasks-category/task-category-own/task-category-own.scss";

import "./todosWrapper.scss";
import { useDispatch } from "react-redux";
import { taskTypes } from "../store/types/types";
import { time } from "../store/reducers/tasks-list-reducer";
import { useHistory } from "react-router-dom";
import Pagination from "../pagination/pagination";
import { useTypedSelector } from "../hooks/useTypedSelector";

const ToDosWrapper: React.FC = () => {
    const { todos } = useTypedSelector((state) => state.taskList);

    const dispatch = useDispatch();

    const history = useHistory();

    const handleClickTasks = () => {
        history.push("/tasksDetails");
    };

    const handleDelete = (id) =>
        dispatch({
            type: taskTypes.DELETE_TASK,
            payload: id,
        });
    const [currentPage, setCurrentPage] = useState(1);

    let PageSize = 5;

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return todos.slice(firstPageIndex, lastPageIndex);
    }, [PageSize, currentPage, todos]);

    const todosEverything = currentTableData.map((todo, index) => (
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
        <div className="d-flex justify-content-center align-items-center">
            {!todos.length ? (
                <p className="todos-empty d-flex justify-content-center align-items-center">
                    You have’t any created tasks.
                </p>
            ) : (
                <div>
                    <>{todosEverything}</>
                    <div className="mt-4">
                        <Pagination
                            className="pagination-bar"
                            currentPage={currentPage}
                            totalCount={todos.length}
                            pageSize={PageSize}
                            onPageChange={(page) => setCurrentPage(page)}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ToDosWrapper;
