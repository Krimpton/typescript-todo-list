import React, { FC, useEffect } from "react";
import "./tasks-main-list.scss";
import Header from "../../header/header";
import Footer from "../../footer/footer";
import TasksInfo from "../../tasks-info/tasks-info";
import { useDispatch, useSelector } from "react-redux";
import { TaskState } from "../../../store/types/types";
import { TodoInput } from "../../../todo-input/todoInput";
import ToDosWrapper from "../../../todos-wrapper/todosWrapper";
import Button from "../../tasks-details/buttons/main-button/main-button";
import ButtonDropdownMain from "../../../button-dropdown/button-dropdown-main";

const TasksList: FC = () => {
    const dispatch = useDispatch();

    const todos = useSelector((state: TaskState) => state.todos);

    const pages = [1, 2, 3, 4, 5];

    useEffect(() => {
        console.log(todos);
    }, [todos]);

    return (
        <div>
            <Header />
            <div className="tasks-group-list d-flex justify-content-center mb-5">
                <TasksInfo tasksNumber={todos.length} tasksName={"Created tasks"} />
                <TasksInfo tasksNumber={todos.length + 1} tasksName={"Completed tasks"} />
            </div>
            <div className="tasks-bar-wrapper d-flex justify-content-center align-items-center">
                <div className="tasks-bar d-flex justify-content-start align-items-center">
                    <p>Name</p>
                    <p>Status</p>
                    <p>Expired at</p>
                </div>
            </div>
            <div className="d-flex justify-content-center align-items-center">
                <ToDosWrapper />
            </div>
            {/*<div className="d-flex justify-content-center">*/}
            {/*    /!*NEED to FIX*!/*/}
            {/*    <div className="tasks-list-wrapper d-flex justify-content-start">*/}

            {/*        <div className="button-list-wrapper d-flex justify-content-center align-items-center">*/}
            {/*            <div className="button-list d-flex justify-content-center align-items-center">*/}
            {/*                <Button*/}
            {/*                    text={"1"}*/}
            {/*                    classNames={"pagination-button"}*/}
            {/*                    singleButton={"material-icons-margin-0"}*/}
            {/*                />*/}

            {/*                <Button*/}
            {/*                    text={"2"}*/}
            {/*                    classNames={"pagination-button"}*/}
            {/*                    singleButton={"material-icons-margin-0"}*/}
            {/*                />*/}

            {/*                <Button*/}
            {/*                    text={"..."}*/}
            {/*                    classNames={"pagination-button"}*/}
            {/*                    singleButton={"material-icons-margin-0"}*/}
            {/*                />*/}

            {/*                <Button*/}
            {/*                    text={"10"}*/}
            {/*                    classNames={"pagination-button"}*/}
            {/*                    singleButton={"material-icons-margin-0"}*/}
            {/*                />*/}
            {/*            </div>*/}
            {/*        </div>*/}

            {/*        <ButtonDropdownMain*/}
            {/*            classNames={"tasks-list-button"}*/}
            {/*            iName={"Actions"}*/}
            {/*            iIcons={"keyboard_arrow_down"}*/}
            {/*            actionName={"Actions:"}*/}
            {/*            action0={"Done"}*/}
            {/*            action1={"Edit Task"}*/}
            {/*            action2={"Remove Task"}*/}
            {/*        />*/}
            {/*    </div>*/}
            {/*    <div className="add-new-wrapper">*/}
            {/*        <Button*/}
            {/*            text={"Add New"}*/}
            {/*            singleButton={"material-icons-margin-0"}*/}
            {/*            classNames={"add-new-button"}*/}
            {/*        />*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className="inputTodo">
                <TodoInput />
            </div>
            <Footer />
        </div>
    );
};

export default TasksList;
