import React from "react";
import "./header.scss";
import ButtonDropdownMain from "../../components/buttons-dropdown/button-dropdown-main";
import { useAuth } from "../../hooks/use-auth";
import { useHistory } from "react-router-dom";

const Header: React.FC = () => {

  const {email} = useAuth();

  const history = useHistory();

  const dashboardRedirect = () => {
    history.push('/dashboard');
  }

    return (
        <div className="block-row d-flex justify-content-center align-items-center">
            <span onClick={dashboardRedirect} className="header-logo">ToDo</span>

            <ButtonDropdownMain
                classNames={"header-dropdown"}
                iName={email}
                iIcons={"keyboard_arrow_down"}
                actionName={"User actions:"}
                action0={"Login"}
                action1={"Logout"}
            />
        </div>
    );
};

export default Header;
