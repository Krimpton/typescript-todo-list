import React, { ChangeEvent, useCallback, useMemo, useState } from "react";
import Button from "../layouts/tasks-details/buttons/main-button/main-button";
import "../layouts/tasks-category/task-category-own/task-category-own.scss";

import "./todosWrapper.scss";
import { useDispatch } from "react-redux";
import { taskTypes } from "../store/types/types";
import { time } from "../store/reducers/tasks-list-reducer";
import { useHistory } from "react-router-dom";
import Pagination from "../pagination/pagination";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { StatusTypesEnum } from "../store/constants/constans";
import TodosStatus from "../todos-status/todos-status";

const ToDosWrapper: React.FC = () => {
    const { todos } = useTypedSelector((state) => state.taskList);

    const dispatch = useDispatch();

    const history = useHistory();

    // const handleDelete = (item) =>
    //     dispatch({
    //         type: taskTypes.DELETE_TASK,
    //         payload: item,
    //     });

    const [tasks, setTasks] = useState(todos);

    const handleDelete = (id) => {
        const remainingTasks = tasks.filter((task) => id !== task.id);
        setTasks(remainingTasks);
    };

    // const removeTodo = (id: any) => {
    //     setTasks(tasks.filter((todos) => todos.id !== id));
    //     console.log(id);
    // };
    // const removeTodoRedux = (id: any) => {
    //     dispatch(taskTypes.DELETE_TASK({id}))
    //     console.log(id)
    // }

    const removeTodo = (id) =>
        dispatch({
            type: taskTypes.DELETE_TASK,
            payload: { id },
        });

    const [currentPage, setCurrentPage] = useState(1);

    let PageSize = 5;

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return todos.slice(firstPageIndex, lastPageIndex);
    }, [PageSize, currentPage, todos]);

    // const todosStatusList = todos.map((item, index) => (
    //     <div
    //         className="status-type d-flex justify-content-center flex-column align-items-center"
    //         key={index}
    //     >
    //         {item.status[1]}
    //     </div>
    // ));

    const handleClickTasks = (taskNumber) => {
        history.push("/tasksDetails");
      dispatch({
        type: taskTypes.RETURN_FILTERED_TASKS,
        payload: {taskNumber},
      });
      console.log(taskNumber);
    };

    const [checkboxValue, setCheckboxValue] = useState(false);

    if (checkboxValue) {
      console.log("yo")
    }



  const checkboxHandler = (id) => {
      dispatch({
        type: taskTypes.SELECT_TASK,
        payload: {id}
      })
    console.log(id)
  }

    const todosEverything = currentTableData.map((todo, index) => (
        <div className="todos-name d-flex justify-content-center align-items-center" key={todo.id}>
            <input
                type="checkbox"
                name="checkbox"
                // checked={checkboxValue}
                onChange={() => {setCheckboxValue(!checkboxValue)}}
                className="check"
                onClick={() => checkboxHandler(todo.id)}
                // onClick={() => removeTodo(todo.id)}
            />
            <div className="title">{todo.title}</div>
            <div className="mr-3">
                <Button
                    key={todo.id}
                    text={todo.status}
                    singleButton={"material-icons-margin-0"}
                    classNames={todo.status}
                />
            </div>
            {/*<div className={StatusTypesEnum.EXPIRED ? "expired" : ""}>*/}
            {/*  {todo.status}*/}
            {/*</div>*/}
              {/*<TodosStatus />*/}

            <div key={index} className="date d-flex justify-content-center align-items-center">
                <p>{time}</p>
                <Button
                    text={"View"}
                    singleButton={"material-icons-margin-0"}
                    classNames={"button-view"}
                    action={() => handleClickTasks(todo.taskNumber)}
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
