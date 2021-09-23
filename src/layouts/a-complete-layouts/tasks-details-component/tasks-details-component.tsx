import React, { FC } from "react";
import "./tasks-details-component.scss";
import TasksDetails from "../../tasks-details/tasks-details";
import Header from "../../header/header";
import Footer from "../../footer/footer";

const TasksDetailsComponent: FC = () => {
    return (
        <div>
            <Header />
            <div className="main_content">
                <TasksDetails />
            </div>

            <Footer />
        </div>
    );
};

export default TasksDetailsComponent;
