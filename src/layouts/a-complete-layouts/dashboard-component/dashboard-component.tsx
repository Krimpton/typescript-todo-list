import React, { ChangeEvent, FC, useCallback, useEffect, useState } from "react";
import "./dashboard-component.scss";
import Header from "../../header/header";
import Footer from "../../footer/footer";
import TasksInfo from "../../tasks-info/tasks-info";
import Button from "../../tasks-details/buttons/main-button/main-button";
import { useDispatch } from "react-redux";
import { initialCategory, taskBlockTypes, taskTypes } from "../../../store/types/types";
import { SubmitHandler, useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { IconsTypesEnum } from "../../../store/constants/constans";
import { Redirect, useHistory } from "react-router-dom";
import { useAuth } from "../../../hooks/use-auth";
import { useInput } from "../../../hooks/useValidation";

export interface useValue {
    categoryId: number;
    setCategoryId?: any;
}

export const valueCategory: useValue = {
    categoryId: 4,
}


const DashboardComponent: FC = () => {
    const { block } = useTypedSelector((state) => state.taskBlock);

    const [title, setTitle] = useState<string>("");

    const [id, setId] = useState<number>(uuidv4());

    const [categoryId, setCategoryId] = useState<useValue | any>(4);

    const [globalId, setGlobalId] = useState<number>(0)

    console.log(globalId)

    const taskLength = block.length;

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const { todos } = useTypedSelector((state) => state.taskList);

    type Category = {
        category: string;
    };

    const history = useHistory();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Category>();

    const onSubmit: SubmitHandler<Category> = (data, block) => {
        console.log(data);
    };

    const dispatch = useDispatch();

    const handleDashboardSubmit = (e) => {
        if (title) {
            dispatch({
                type: taskBlockTypes.ADD_TASK_BLOCK,
                payload: {
                    id,
                    icon,
                    title,
                    taskLength,
                    categoryId,
                    globalId,
                },
            });
            setCategoryId(categoryId + 1);
            setTitle("");

            setGlobalId(categoryId);
        }
        if (categoryId === globalId) {
            return;
        }
    };

    const handleKeyBlockPress = (e) => {
        if (e.key === "Enter") {
            handleDashboardSubmit(e);
        }
    };

    const handleTitleBlockChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => setTitle(event.target.value),
        [],
    );

    const [selected, setSelected] = useState("Choose One");

    const [isActive, setIsActive] = useState(false);

    const options = [
        IconsTypesEnum.LIST,
        IconsTypesEnum.GLOBAL,
        IconsTypesEnum.SAVINGS,
        IconsTypesEnum.PAID,
        IconsTypesEnum.FAVORITE,
    ];

    const defaultValue = IconsTypesEnum.LIST;

    const [icon, setIcon] = useState<string>(defaultValue);

    const handleCategoryId = (categoryId) => {
        history.push(`/tasksList/${categoryId}`)

        dispatch({
            type: taskTypes.RETURN_FILTERED_TODOS,
            payload: { categoryId, globalId }
        });

        if (categoryId) {
            // return console.log(setGlobalId(categoryId))
        }
    };

    // const handleCategoryId = todos.filter((todos) => (todos.categoryId = 1));
    // const handleCategoryId = console.log("d")

    // useEffect(() => {
    //     console.log(categoryId);
    // }, []);

    const blockItems = block.map((item, index) => (
        <div key={index} className="mini-tasks" onClick={() => handleCategoryId(item.categoryId)}>
            <div className="d-flex justify-content-center align-items-center flex-md-row">
                <span className="material-icons tasks-icons second-item">{item.icon}</span>
                <div className="second-item">{item.title}</div>
            </div>
            <div className="third-item d-flex justify-content-center align-items-center">
                {item.categoryId} tasks
            </div>
        </div>
    ));



const input = useInput('', {minLength: 3, maxLength: 12, isEmpty: true})

    // return isAuth ? (
    return  (
        <>
            {isOpen && (
                <div className="isModal-dashboard" onClick={() => setIsOpen(false)}>
                    <div className="dashboard-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="dashboard-header d-flex justify-content-center mt-2">
                            <p className="dashboard-header-text d-flex justify-content-center align-items-center">
                                Add new category
                            </p>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className="dashboard-content">
                            <div className="category-name-section d-flex justify-content-center align-items-start flex-column mb-4">
                                <label className="category-name">Category name:</label>

                                {input.isDirty && input.isEmpty && <div className="validation">{input.empty}</div>}
                                {input.isDirty && input.isMinLength && <div className="validation">{input.minLength}</div>}
                                {input.isDirty && input.isMaxLength && <div className="validation">{input.maxLength}</div>}
                                {input.isDirty && input.isEmailError && <div className="validation">{input.emailError}</div>}

                                <input onBlur={e => input.onBlur(e)} onChange={handleTitleBlockChange} value={title} name="input" type="text" placeholder="type anything..." />

                                {/*<input*/}
                                {/*    {...register("category", {*/}
                                {/*        required: "⚠ Field can’t be empty...",*/}
                                {/*        minLength: 3,*/}
                                {/tat*        maxLength: 10,*/}
                                {/*    })}*/}
                                {/*    value={title}*/}
                                {/*    onChange={handleTitleBlockChange}*/}
                                {/*    onKeyDown={handleKeyBlockPress}*/}
                                {/*    type="text"*/}
                                {/*    placeholder="type anything..."*/}
                                {/*    required*/}
                                {/*/>*/}
                                {/*{errors.category && (*/}
                                {/*    <div className="error">⚠ Field can’t be empty...</div>*/}
                                {/*)}*/}
                            </div>

                            <div className="category-icon-wrapper d-flex justify-content-start align-items-start flex-column">
                                <p className="category-icon">Category icon:</p>

                                <div className="dropdown">
                                    <div
                                        className="dropdown-btn"
                                        onClick={(e) => setIsActive(!isActive)}
                                    >
                                        {selected}
                                        <span className="material-icons dashboard-arrow">
                                            keyboard_arrow_down
                                        </span>
                                        <span className="fas fa-caret-down" />
                                    </div>
                                    {isActive && (
                                        <div className="dropdown-content">
                                            {options.map((option, index) => (
                                                <div
                                                    onSelect={handleDashboardSubmit}
                                                    key={index}
                                                    onClick={(e) => {
                                                        setSelected(option);
                                                        setIsActive(false);
                                                        setIcon(option);
                                                    }}
                                                    className="dropdown-item"
                                                >
                                                    {option}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </form>

                        <div className="dashboard-footer d-flex justify-content-around align-items-center ml-1">
                            <Button
                                text="Cancel"
                                classNames="cancel-button"
                                action={() => setIsOpen((prev) => !prev)}
                            />
                            <Button
                                text="Add category"
                                classNames="add-category-button"
                                mIcons={"add"}
                                action={handleKeyBlockPress}
                                disabled={!input.formValid}
                            />
                        </div>
                    </div>
                </div>
            )}

            <div>
                <Header />
                <div className="dashboard-wrapper d-flex align-items-center">
                    <div className="d-flex justify-content-center align-items-center mb-4">
                        <TasksInfo tasksNumber={block.length} tasksName={"Created tasks"} />
                        <TasksInfo tasksNumber={block.length} tasksName={"Completed tasks"} />
                    </div>

                    <div className="block-items">{blockItems}</div>

                    <Button
                        text="Add category"
                        classNames={"big-button-add"}
                        mIcons={"add"}
                        action={() => setIsOpen((prev) => !prev)}
                    />
                </div>
                <Footer />
            </div>
        </>
    // )
      // : (
      // <Redirect to={"/login"} />
    );
};

export default DashboardComponent;