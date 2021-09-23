import React, { useState } from "react";
import { IconsTypesEnum } from "../../store/constants/constans";
import { useDispatch } from "react-redux";
import { taskBlockTypes } from "../../store/types/types";

function Dropdown({ selected, setSelected }) {
  const [isActive, setIsActive] = useState(false);

  const options = [
    IconsTypesEnum.LIST,
    IconsTypesEnum.PAID,
    IconsTypesEnum.GLOBAL,
    IconsTypesEnum.FAVORITE,
    IconsTypesEnum.SAVINGS,
  ];

  const defaultValue = IconsTypesEnum.LIST;

  const [icon, setIcon] = useState<string>(defaultValue);

  console.log(icon);

  const dispatch = useDispatch();

  const handleDashboardSubmit = (e) => {
    if (icon) {
      dispatch({
        type: taskBlockTypes.ADD_TASK_BLOCK,
        payload: {
          icon,
        },
      });
      setIcon(defaultValue);
    }
  };

  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        {selected}
        <span className="fas fa-caret-down" />
      </div>
      {isActive && (
        <div className="dropdown-content">
          {options.map((option, index) => (
            <div
              onSubmit={handleDashboardSubmit}
              key={index}
              onClick={(e) => {
                setSelected(option);
                setIsActive(false);
                setIcon(option);
              }}
              className="dropdown-item"
            >
              {option}
              <span className="material-icons tasks-icons d-flex justify-content-center">
                                shop
                            </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
