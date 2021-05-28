import React, {FC} from 'react';
import { useHistory } from "react-router-dom";
import "./empty-tasks-main-list.scss"
import TasksInfo from "../../tasks-info/tasks-info";
import Tasks from "../../tasks-list/tasks";
import EmptyTask from "../../../components/empty-tasks/empty-task";
import ButtonDropdownTest from "../../../button-dropdown-button/button-dropdown-test";
import Button from "../../tasks-details/buttons/main-button/main-button";
import Header from "../../header/header";
import Footer from "../../footer/footer";

const EmptyTasksMainList: FC = () => {


    const history = useHistory();

    const handleClick = () => {
        history.push("/dashboard");
    }

    return (

        <div>


            <Header/>

            <div className="tasks-group-list d-flex justify-content-center mb-5">
                <TasksInfo tasksNumber={0} tasksName={'Created tasks'}/>
                <TasksInfo tasksNumber={0} tasksName={'Completed tasks'}/>
            </div>
            <Tasks/>
            <EmptyTask/>

            <ButtonDropdownTest iName={'Actions'} iIcons={'keyboard_arrow_down'} actionName={"Actions:"} action0={"Done"} action1={"Edit Task"} action2={"Remove Task"}/>

            <Button text={"Add New"} singleButton={'material-icons-margin-0'} classNames={'add-new-button'} action={handleClick}/>


            <div className="footer-bottom">
                <Footer/>
            </div>

        </div>
    );
};

export default EmptyTasksMainList;