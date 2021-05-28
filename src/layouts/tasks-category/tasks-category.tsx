import React, {FC} from "react";
import "./tasks-category.scss";
import Checkbox from "../../components/checkbox/checkbox";
import TasksName from "../../components/tasks-name/tasks-name";
import TasksDate from "../../components/tasks-date/tasks-date";
import Pending from "../../components/tasks-status/pending/pending";
import Expired from "../../components/tasks-status/exprired/expired";
import Inactive from "../../components/tasks-status/inactive/inactive";
import Button from "../tasks-details/buttons/main-button/main-button";

const TasksCategory: FC = () => {
    return (<div className="wrapper-list">
            <div className="tasks-bar-list">
                <Checkbox/>
                <TasksName text={'Play Rust together'}/>

                <Button text={"Pending"} singleButton={"material-icons-margin-0"} classNames={"pending-button"}/>


                <TasksDate date={'1/03/2020, 10:23 AM'}/>
                <Button text={"View"} singleButton={"material-icons-margin-0"} classNames={"button-view"}/>

            </div>

            <div className="tasks-bar-list">
                <Checkbox/>
                <TasksName text={'Learn React'}/>

                <Button text={"Complete"} singleButton={"material-icons-margin-0"} classNames={"complete-button"}/>

                <TasksDate date={'1/03/2020, 10:24 PM'}/>
                <Button text={"View"} singleButton={"material-icons-margin-0"} classNames={"button-view"}/>
            </div>

            <div className="tasks-bar-list">
                <Checkbox/>
                <TasksName text={'Buy some skins in rust shop'}/>

                <Button text={"Expired"} singleButton={"material-icons-margin-0"} classNames={"expired-button"}/>

                <TasksDate date={'1/03/2020, 10:26 AM'}/>
                <Button text={"View"} singleButton={"material-icons-margin-0"} classNames={"button-view"}/>
            </div>

            <div className="tasks-bar-list">
                <Checkbox/>
                <TasksName text={'Walk outside the house'}/>

                <Button text={"Inactive"} singleButton={"material-icons-margin-0"} classNames={"inactive-button"}/>

                <TasksDate date={'1/03/2020, 10:29 PM'}/>
                <Button text={"View"} singleButton={"material-icons-margin-0"} classNames={"button-view"}/>
            </div>

        </div>
    )
}

export default TasksCategory;