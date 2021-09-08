import React, { FC } from "react";
import "./tasks-main-list.scss";
import Header from "../../header/header";
import Footer from "../../footer/footer";
import TasksInfo from "../../tasks-info/tasks-info";
import ToDosWrapper from "../../../todos-wrapper/todosWrapper";
import Button from "../../tasks-details/buttons/main-button/main-button";
import ButtonDropdownMain from "../../../button-dropdown/button-dropdown-main";
import { TodoInput } from "../../../todo-input/todoInput";
import {useTypedSelector} from "../../../hooks/useTypedSelector";

const TasksList: FC = () => {

    const {todos} = useTypedSelector(state => state.taskList)

    return (
        <div>
            <Header />
            <div className="main_content">
                <div className="tasks-group-list d-flex justify-content-center mb-5">
                    <TasksInfo tasksNumber={todos.length} tasksName={"Created tasks"} />
                    <TasksInfo tasksNumber={todos.length} tasksName={"Completed tasks"} />
                </div>
                <div className="tasks-bar-wrapper d-flex justify-content-center align-items-center">
                    <div className="tasks-bar d-flex justify-content-start align-items-center">
                        <p>Name</p>
                        <p>Status</p>
                        <p>Expired at</p>
                    </div>
                </div>
                <ToDosWrapper />
                <div className="d-flex justify-content-center">
                    <div className="tasks-list-wrapper d-flex justify-content-start">
                        <ButtonDropdownMain
                            classNames={"tasks-list-button"}
                            iName={"Actions"}
                            iIcons={"keyboard_arrow_down"}
                            actionName={"Actions:"}
                            action0={"Done"}
                            action1={"Edit Task"}
                            action2={"Remove Task"}
                        />
                    </div>
                    <div className="add-new-wrapper">
                        <Button
                            text={"Add New"}
                            singleButton={"material-icons-margin-0"}
                            classNames={"add-new-button"}
                        />
                    </div>
                </div>

                <div className="inputTodo">
                    <TodoInput />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default TasksList;
