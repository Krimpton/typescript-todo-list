import React, {FC} from "react";
import "./page-buttons.scss"
import Button from "../../layouts/tasks-details/buttons/main-button/main-button";

const PageButtons: FC = () => {
    return (<div>
        <div className="button-list">
            <Button text={'1'} classNames={'pagination-button'} singleButton={"material-icons-margin-0"}/>

            <Button text={'2'} classNames={'pagination-button'} singleButton={"material-icons-margin-0"}/>

            <Button text={'...'} classNames={'pagination-button'} singleButton={"material-icons-margin-0"}/>

            <Button text={'10'} classNames={'pagination-button'} singleButton={"material-icons-margin-0"}/>

        </div>
    </div>)
}

export default PageButtons