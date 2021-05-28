import React, {FC} from 'react';
import "./tasks-details-component.scss";
import TasksDetails from "../../tasks-details/tasks-details";
import Header from "../../header/header";
import Footer from "../../footer/footer";

const TasksDetailsComponent:FC = () => {
    return (
        <div>
            <Header/>

            <TasksDetails/>

            <Footer/>
        </div>
    );
};

export default TasksDetailsComponent;