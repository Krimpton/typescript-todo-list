import React, { ChangeEvent, FC, useCallback, useEffect, useState } from "react";
import "./dashboard-component.scss";
import Header from "../../header/header";
import Footer from "../../footer/footer";
import TasksInfo from "../../tasks-info/tasks-info";
import Button from "../../tasks-details/buttons/main-button/main-button";
import { useDispatch } from "react-redux";
import { taskBlockTypes, taskTypes } from "../../../store/types/types";
import { v4 as uuidv4 } from "uuid";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { IconsTypesEnum } from "../../../store/constants/constans";
import { Redirect, useHistory } from "react-router-dom";
import { useInput } from "../../../hooks/useValidation";
import { useCookies } from "react-cookie";

export interface useValue {
    categoryId: number;
    setCategoryId?: any;
}

export const valueCategory: useValue = {
    categoryId: 4,
}


const DashboardComponent: FC = () => {
    const { block } = useTypedSelector((state) => state.taskBlock);


    const [id, setId] = useState<number>(uuidv4());

    const [categoryId, setCategoryId] = useState<useValue | any>(4);

    const [globalId, setGlobalId] = useState<number>(0)

    const taskLength = block.length;

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const history = useHistory();


    const dispatch = useDispatch();


    const [title, setTitle] = useState<string>("");
    const [isTitle, setISTitle] = useState(false);


    const handleDashboardSubmit = (e) => {
        // if (title.length < 20) {
            dispatch({
                type: taskBlockTypes.ADD_TASK_BLOCK,
                payload: {
                    id,
                    icon,
                    title,
                    taskLength,
                    categoryId,
                    globalId,
                }
            }

            );
            setCategoryId(categoryId + 1);
            setTitle("");
            setGlobalId(categoryId);
        // }
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

    const [cookies, setCookies] = useCookies(['email']);

    // function onChange(newName) {
    //     setCookies('name', newName, { path: '/' });
    // }

    const onChange = (e) => {
        setTitle(e.target.value);
        setCookies('email',{path: '/login'})
    }


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
    };


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





// const input = useInput('', {minLength: 3, maxLength: 12, isEmpty: true})


    const [dirty, setDirty] = useState(false);
    const [error, setError] = useState('Поле не должно быть пустым');
    const [formValid, setFormValid] = useState(false)

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'title': {
                setDirty(true)
                break;
            }
            default:
                setDirty(false);
         }
        }

    const dataHandler = (e) => {
        setTitle(e.target.value);
        if (e.target.value.length < 3 || e.target.value.length > 12) {
            setError('Длинна должна быть > 3 и < 12 символов')
            setFormValid(false)
        } else {
            setFormValid(true)
            setError('')
        }
    }


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
                        <form className="dashboard-content">
                            <div className="category-name-section d-flex justify-content-center align-items-start flex-column mb-4">
                                <label className="category-name">Category name:</label>

                                {/*<input onChange={e => dataHandler(e)} value={data} onBlur={e => blurHandler(e)} name='data' type='text'/>*/}
                                {/*{(dirty && error) && <div style={{color: "red"}}>{error}</div>}*/}

                                {/*<button type='submit'>submit</button>*/}


                                {error && dirty && <div style={{color: "red"}}>{error}</div>}
                                <input onBlur={e => blurHandler(e)} onChange={e => dataHandler(e)}
                                       onKeyDown={handleKeyBlockPress} value={title} name='title' type="text" placeholder="type anything..." required/>

                                {/*<input onBlur={e => input.onBlur(e)} onChange={handleTitleBlockChange}*/}
                                {/*       onKeyDown={handleKeyBlockPress} value={title} name="category" type="text" placeholder="type anything... (20 symbols maximum)" required/>*/}
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
                                action={handleDashboardSubmit}
                                disabled={!formValid}
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