import React, { useState } from "react";
import "./button-dropdown-main.scss";

import { ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import { useHistory } from "react-router-dom";
import ruster from "../../assets/photos/ruster.jpg";
import { useDispatch } from "react-redux";
import { UserAuthActionTypes } from "../../store/types/types";

export type iProps = {
  classNames?: string;
  iName?: string;
  iIcons?: string;
  toggle?: any;
  actionName?: string;
  action0?: string;
  action1?: string;
  action2?: string;
};

const ButtonDropdownMain: React.FC<iProps> = ({
                                                classNames,
                                                iName,
                                                iIcons,
                                                action0,
                                                action1, action2,
                                                actionName
                                              }) => {
  const [dropdownOpen, setOpen] = useState<boolean>(false);

  const toggle = () => setOpen(!dropdownOpen);

  const dispatch = useDispatch();

  const history = useHistory();

  const handleLogin = () => {
    history.push("/login");
  };

  const dashboardRedirect = () => {
    history.push("/dashboard");
  };

  const handleLogout = () => {
    dispatch({
      type: UserAuthActionTypes.REMOVE_USER,
      payload: {
        email: null,
        id: null,
        token: null
      }
    });
    history.push("/login");
  };

  return (
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle} className={classNames}>
      <DropdownToggle className="text-toggle d-flex justify-content-center align-items-center">
        <span className="action-title">{iName}</span>
        <span className="material-icons header-arrow">keyboard_arrow_down</span>
        <span className="material-icons dropdown-material">{iIcons}</span>
      </DropdownToggle>
      <DropdownMenu>
        <div className="dropdown-items">
          <DropdownItem
            className="disabled-dropdown-item d-flex justify-content-center align-items-center"
            disabled>{actionName}</DropdownItem>
          <DropdownItem
            className="dropdown-item d-flex justify-content-center align-items-center"
            onClick={dashboardRedirect}>{action2}</DropdownItem>
          <DropdownItem
            className="dropdown-item d-flex justify-content-center align-items-center"
            onClick={handleLogin}>{action0}</DropdownItem>
          <DropdownItem
            className="dropdown-item d-flex justify-content-center align-items-center"
            onClick={handleLogout}>{action1}</DropdownItem>

        </div>
      </DropdownMenu>
      <img className="photo-ruster" src={ruster} alt="ruster" onClick={toggle} />
    </ButtonDropdown>
  );
};

export default ButtonDropdownMain;
