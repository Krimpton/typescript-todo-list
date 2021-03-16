import React from "react";
import "./main-content.scss";
import Footer from "../footer/footer";
import Header from "../ header/header";
import Tasks from "../tasks-list/tasks";
import TasksCategory from "../tasks-category/tasks-category";
import PageButtons from "../../components/page-buttons/page-buttons";
import NewButton from "../../components/new-button/new-button";
import ButtonDropdown from "../../components/button-dropdown/button-dropdown";
import TasksInfo from "../tasks-info/tasks-info";
import MiniTasks from "../mini-tasks/mini-tasks";
import AddCategory from "../../components/button-add-category/btn-add-category";
import TasksDetails from "../tasks-details/tasks-details";
import EmptyTask from "../../components/empty-tasks/empty-task";
import PageNotFound from "../page-404/page-404";
import Auth from "../auth-page/auth";

const MainContent: React.FC = () => {
    return (
        <div className="main-wrapper">

            <Header/>

            <div className="main-content">
                <div className="second-wrapper">

                    <TasksInfo/>

                    <MiniTasks/>

                </div>

                <AddCategory/>

                {/*<TasksDetails/>*/}
                {/*<EmptyTask/>*/}


                {/*<PageNotFound/>*/}
            </div>

            {/*<Tasks/>*/}
            {/*<TasksCategory/>*/}
            {/*<PageButtons/>*/}


            {/*<Auth/>*/}

            {/*<NewButton/>*/}
            {/*<ButtonDropdown/>*/}


            {/*<Footer/>*/}

        </div>
    );
};


export default MainContent;
