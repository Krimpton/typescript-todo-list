import React, {useRef, useState} from "react";
import "./tasks-details.scss"
import ModalWindow from "../../components/modal-windows/modal-tasks-datails-delete/modal-window";
import Button from "./buttons/main-button/main-button";
import InputComponent from "../../components/input-component/input-component";
import TasksText from "../a-complete-layouts/tasks-details-component/tasks-text/tasks-text";


export type TasksDetailsProps = {
    active: boolean;
    setActive: (active: boolean) => void;
    modalRefs?: any
}

export type InputDetailsProps = {
    inputTitle: string;
    expiredAt?: string,
    description?: string;
}

const TasksDetails: React.FC = () => {

    const [modalActive2, setModalActive2] = useState<boolean>(true);
    const [modalActive3, setModalActive3] = useState<boolean>(true);

    const modalWindowClose = useRef();

    const closeModal = (e: any): void => {
        if (modalWindowClose.current === e.targer) {
            setModalActive2(false);
            setModalActive3(false);
        }
    };
    return (
        <div className="tasks-wrapper">
            <ModalWindow active={modalActive2} setActive={setModalActive2} modalRefs={modalWindowClose}>
                <div className="edit-wrapper">
                    <div className="edit-header d-flex justify-content-center align-items-center">
                        <p>Task edit</p>
                        <span onClick={closeModal} className="material-icons">cancel</span>
                    </div>
                    <div className="edit-main-content">
                        <InputComponent inputTitle={"Name"} description={"Description"} expiredAt={"Expired at"}/>
                    </div>
                    <div className="edit-footer">
                        <Button text={'Cancel'} action={closeModal} classNames={'cancel-button'}
                                singleButton={'material-icons-margin-0'}/>
                        <Button text={'Save'} action={closeModal} classNames={'save-button'}
                                singleButton={'material-icons-margin-0'}/>
                    </div>
                </div>
            </ModalWindow>

            <ModalWindow active={modalActive3} setActive={setModalActive3} modalRefs={modalWindowClose}>
                <div className="delete-wrapper">
                    <div className="delete-text">
                        <p className="delete-title">Do you want to delete task?</p>
                        <p className="delete-content">If you are really want to remove this task please<br/>
                            click remove button.</p>
                    </div>
                    <div className="delete-block-bottom">
                        <Button text={'Cancel'} action={closeModal} classNames={'cancel-button'}
                                singleButton={'material-icons-margin-0'}/>

                        <Button text={'Delete'} action={setModalActive3} classNames={'delete-button'}
                                singleButton={'material-icons-margin-0'}/>
                    </div>
                </div>
            </ModalWindow>

            <p className="tasks-title">Lorem ipsum dolor</p>
            <h1 className="tasks-created">Created at: 20/02/2020, 07:00 pm</h1>
            <h1 className="tasks-expired">Expired at: 21/02/2020, 07:58 am</h1>
            <Button text={"Pending"} classNames={"button-pending"}/>


            <div className="status-wrapper">

                <Button text={'Done'} classNames={'done-button'} mIcons={'done'}/>

                <Button text={'Edit'} classNames={'edit-button'} mIcons={'edit'} action={setModalActive2}/>

                <Button text={'Remove'} classNames={'remove-button'} mIcons={'remove'} action={setModalActive3}/>

            </div>

            <div className="status-text">
                <TasksText/>
            </div>
        </div>)
}

export default TasksDetails