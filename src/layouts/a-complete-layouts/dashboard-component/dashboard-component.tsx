import React, {FC, useRef, useState} from 'react';
import "./dashboard-component.scss";
import Header from "../../header/header";
import Footer from "../../footer/footer";
import MiniTasks from "../../mini-tasks/mini-tasks";
import TasksInfo from "../../tasks-info/tasks-info";
import Button from "../../tasks-details/buttons/main-button/main-button";
import ModalWindow from "../../../components/modal-windows/modal-tasks-datails-delete/modal-window";
import TestComponent from "../../../store/actions/test-component/test-component";

const DashboardComponent: FC = () => {
    const [modalActive4, setModalActive4] = useState<boolean>(false);
    const modalWindowClose = useRef();

    return (<div>

        <Header/>

        <div className="tasks-group-list d-flex justify-content-center mb-4">
            <TasksInfo tasksNumber={57} tasksName={'Created tasks'}/>
            <TasksInfo tasksNumber={22} tasksName={'Completed tasks'}/>
        </div>

        <div className="tasks-list d-flex justify-content-center align-items-center">
            <MiniTasks tasksNumber={"50 tasks"} taskName={"All tasks"} ttIcon={'list'}/>
            <MiniTasks tasksNumber={"21 tasks"} taskName={"Rust"} ttIcon={'gamepad'}/>
            <MiniTasks tasksNumber={"21 tasks"} taskName={"Supermarket"} ttIcon={'add_business'}/>
        </div>

        <Button text={"Add category"} classNames={"big-button-add"} mIcons={"add"} action={setModalActive4}>
            <ModalWindow active={modalActive4} setActive={setModalActive4} modalRefs={modalWindowClose}>
                <TestComponent/>
            </ModalWindow>
        </Button>
        <Footer/>
    </div>);
};

export default DashboardComponent;
