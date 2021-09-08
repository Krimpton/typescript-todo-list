import React, {ChangeEvent, FC, useCallback, useState} from "react";
import "./dashboard-component.scss";
import Header from "../../header/header";
import Footer from "../../footer/footer";
import MiniTasks from "../../mini-tasks/mini-tasks";
import TasksInfo from "../../tasks-info/tasks-info";
import Button from "../../tasks-details/buttons/main-button/main-button";
import {useDispatch} from "react-redux";
import {taskBlockTypes} from "../../../store/types/types";
import ButtonDropdownMain from "../../../button-dropdown/button-dropdown-main";
import {SubmitHandler, useForm} from "react-hook-form";
import {v4 as uuidv4} from "uuid";
import {useTypedSelector} from "../../../hooks/useTypedSelector";

const DashboardComponent: FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(true);

    const [block, setBlock] = useState<string>("");

    const {todos} = useTypedSelector((state) => state.taskList);

    const id = uuidv4();

    type Category = {
        category: string;
    };

    const {
        register,
        handleSubmit,
        watch,
        formState: {errors},
    } = useForm<Category>();

    const onSubmit: SubmitHandler<Category> = (data, block) => {
        console.log(data);
    };

    console.log(watch("category"));

    const dispatch = useDispatch();

    const handleDashboardSubmit = (e) => {
        if (block) {
            dispatch({
                type: taskBlockTypes.ADD_TASK_BLOCK,
                payload: {
                    id,
                },
            });
            setBlock("");
        }
    };

    const handleKeyBlockPress = (e) => {
        if (e.key === "Enter") {
            handleDashboardSubmit(e);
        }
    };

    const handleTitleBlockChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => setBlock(event.target.value),
        [],
    );

    return (
        <>
            {isOpen && (
                <div className="isModal">
                    <div className="dashboard-modal">
                        <div className="dashboard-header d-flex justify-content-center mt-2">
                            <p className="dashboard-header-text">Add new category</p>
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)} className="dashboard-content">
                            <div
                                className="category-name-section d-flex justify-content-center align-items-start flex-column mb-4">
                                <label className="category-name">Category name:</label>
                                <input
                                    {...register("category", {
                                        required: "⚠ Field can’t be empty...",
                                        minLength: 3,
                                        maxLength: 10,
                                    })}
                                    value={block}
                                    onChange={handleTitleBlockChange}
                                    onKeyDown={handleKeyBlockPress}
                                    type="text"
                                    placeholder="type anything..."
                                    required
                                />
                                {errors.category && (
                                    <div className="error">⚠ Field can’t be empty...</div>
                                )}
                            </div>

                            <div
                                className="category-icon-wrapper d-flex justify-content-start align-items-start flex-column">
                                <p className="category-icon mb-2">Category icon:</p>
                                <ButtonDropdownMain
                                    action0="fun"
                                    action2="ignore"
                                    action3="vizils"
                                    classNames="dashboard-modal-btn mb-4"
                                />
                            </div>
                        </form>

                        <div className="dashboard-footer d-flex justify-content-around align-items-center">
                            <Button
                                text="Cancel"
                                classNames="cancel-button"
                                action={() => setIsOpen((prev) => !prev)}
                            />
                            <Button
                                text="+ Add category"
                                classNames="add-category-button"
                                action={() => console.log(block)}
                            />
                        </div>
                    </div>
                </div>
            )}

            <div>
                <Header/>
                <div className="dashboard-wrapper d-flex align-items-center">
                    {isOpen ? <div>YESSS</div> : <div>NOO!</div>}

                    <div className="d-flex justify-content-center align-items-center mb-4">
                        <TasksInfo tasksNumber={todos.length} tasksName={"Created tasks"}/>
                        <TasksInfo tasksNumber={todos.length} tasksName={"Completed tasks"}/>
                    </div>

                    <div className="tasks-list d-flex justify-content-center align-items-center">
                        <MiniTasks
                            tasksNumber={"50 tasks"}
                            taskName={"All tasks"}
                            ttIcon={"list"}
                        />
                        <MiniTasks tasksNumber={"21 tasks"} taskName={"Rust"} ttIcon={"gamepad"}/>
                        <MiniTasks
                            tasksNumber={"21 tasks"}
                            taskName={"Supermarket"}
                            ttIcon={"add_business"}
                        />
                        <MiniTasks
                            tasksNumber={"21 tasks"}
                            taskName={"Supermarket"}
                            ttIcon={"add_business"}
                        />
                    </div>

                    <Button
                        text={"Add category"}
                        classNames={"big-button-add"}
                        mIcons={"add"}
                        action={() => setIsOpen((prev) => !prev)}
                    />
                </div>
                <Footer/>
            </div>
        </>
    );
};

export default DashboardComponent;