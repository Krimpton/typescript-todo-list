import React, { FC, useState } from "react";
import "./tasks-list.scss";
import Header from "../../header/header";
import Footer from "../../footer/footer";
import TasksInfo from "../../tasks-info/tasks-info";
import ToDosWrapper from "../../../todos-wrapper/todosWrapper";
import Button from "../../tasks-details/buttons/main-button/main-button";
import { TodoInput } from "../../../todo-input/todoInput";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { DashboardActionList, IconsTypesEnum, StatusTypesEnum } from "../../../store/constants/constans";
import { useDispatch } from "react-redux";
import { taskTypes } from "../../../store/types/types";
import { useHistory } from "react-router-dom";

const TasksList: FC = () => {
  const { todos } = useTypedSelector((state) => state.taskList);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const defaultValue = IconsTypesEnum.LIST;

  const [selected, setSelected] = useState("Actions");

  const [isActive, setIsActive] = useState(false);

  const [icon, setIcon] = useState<string>(defaultValue);

  const dispatch = useDispatch();

  const history = useHistory();

  const options = [
    DashboardActionList.DONE,
    DashboardActionList.EDIT,
    DashboardActionList.DELETE
  ];

  const toggleVisibleHandler = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  const todoStatusFilter = (status) => {
    dispatch({
      type: taskTypes.FILTER_STATUS_FILTER,
      payload: { status }
    });
  };

  const dropdownHandler = () => {
    history.push("/tasksDetails/1");
  };

  return (
    <div>
      <Header />

      <div className="main-wrapper-list">
        <div className="main_content">
          <div className="tasks-group-list d-flex mb-5">
            <TasksInfo tasksNumber={todos.length} tasksName={"Created tasks"} />
            <TasksInfo tasksNumber={todos.length} tasksName={"Completed tasks"} />
          </div>

          <div className="button-group d-flex ml-1">
            <Button
              text={"All tasks"}
              singleButton={"material-icons-margin-0"}
              classNames={"All"}
              action={() => todoStatusFilter(StatusTypesEnum.ALL)}
            />
            <Button
              text={"Inactive"}
              singleButton={"material-icons-margin-0"}
              classNames={"Inactive"}
              action={() => todoStatusFilter(StatusTypesEnum.INACTIVE)}
            />
            <Button
              text={"Completed"}
              singleButton={"material-icons-margin-0"}
              classNames={"Completed"}
              action={() => todoStatusFilter(StatusTypesEnum.COMPLETED)}
            />
            <Button
              text={"Expired"}
              singleButton={"material-icons-margin-0"}
              classNames={"Expired"}
              action={() => todoStatusFilter(StatusTypesEnum.EXPIRED)}
            />
            <Button
              text={"Pending"}
              singleButton={"material-icons-margin-0"}
              classNames={"Pending"}
              action={() => todoStatusFilter(StatusTypesEnum.PENDING)}
            />
          </div>

          <div className="tasks-bar-wrapper d-flex justify-content-center align-items-center">
            <div className="tasks-bar d-flex justify-content-start align-items-center">
              <p className="block-name">Name</p>
              <p className="block-status">Status</p>
              <p className="block-expired">Expired at</p>
            </div>
          </div>

          <ToDosWrapper />

          <div className="d-flex justify-content-center">
            <div className="tasks-list-wrapper d-flex justify-content-start">
              <div className="category-icon-wrapper d-flex justify-content-start align-items-start flex-column">
                <div className="dropdown-task-list">
                  <div
                    className="dropdown-btn-task-list"
                    onClick={(e) => setIsActive(!isActive)}
                  >
                    {selected}
                    <span className="material-icons task-list-arrow">
                                        keyboard_arrow_down
                                    </span>
                    <span className="fas fa-caret-down-task-list" />
                  </div>

                  {isActive && (
                    <div className="dropdown-content-task-list">
                      {options.map((option, index) => (
                        <div
                          key={index}
                          onClick={(e) => {
                            dropdownHandler();
                            setSelected(option);
                            setIsActive(false);
                            setIcon(option);

                          }}
                          className="dropdown-item-task-list"
                        >
                          {option}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="add-new-wrapper">
              <Button
                text={"Add New"}
                singleButton={"material-icons-margin-0"}
                classNames={"add-new-button"}
                action={() => setIsOpen((prev) => !prev)}
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />

      {isOpen && (
        <div className="isModal-task-list" onClick={() => setIsOpen(false)}>
          <div className="task-list-modal" onClick={(e) => e.stopPropagation()}>
            <TodoInput />
            <div className="return-btn-section ">
              <Button
                text="Return"
                classNames={"return-button"}
                action={toggleVisibleHandler}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TasksList;
