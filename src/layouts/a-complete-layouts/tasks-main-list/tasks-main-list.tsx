import React, {FC} from 'react';
import "./tasks-main-list.scss";
import Header from "../../header/header";
import Footer from "../../footer/footer";
import TasksInfo from "../../tasks-info/tasks-info";
import Tasks from "../../tasks-list/tasks";
import TasksCategory from "../../tasks-category/tasks-category";
import PageButtons from "../../../components/page-buttons/page-buttons";
import ButtonDropdownTest from "../../../button-dropdown-button/button-dropdown-test";
import Button from "../../tasks-details/buttons/main-button/main-button";

const TasksMainList: FC = () => {
    return (
        <div>
            <Header/>
            <div className="tasks-group-list d-flex justify-content-center mb-5">

                <TasksInfo tasksNumber={21} tasksName={'Created tasks'}/>
                <TasksInfo tasksNumber={7} tasksName={'Completed tasks'}/>

            </div>

            <Tasks/>

            <TasksCategory/>

            <PageButtons/>

            <ButtonDropdownTest classNames={"tasks-button"} iName={'Actions'} iIcons={'keyboard_arrow_down'}
                                actionName={"Actions:"} action0={"Done"} action1={"Edit Task"} action2={"Remove Task"}/>

            {/*<Button text={"Add New"} singleButton={'material-icons-margin-0'} classNames={'add-new-button'}/>*/}


            <Footer/>
        </div>
    );
};

export default TasksMainList;