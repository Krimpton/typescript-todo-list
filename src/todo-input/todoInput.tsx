import React, { ChangeEvent, useCallback, useState } from "react";
import { taskTypes } from "../store/types/types";
import { useDispatch } from "react-redux";
import { StatusTypesEnum } from "../store/constants/constans";
import { v4 as uuidv4 } from "uuid";
import "./todoInput.scss";
import Button from "../layouts/tasks-details/buttons/main-button/main-button";
import { useParams } from "react-router-dom";

export const TodoInput: React.FC = () => {

  const dispatch = useDispatch();

  // @ts-ignore
  const { id } = useParams();


  const defaultValue = StatusTypesEnum.INACTIVE;

  const [title, setTitle] = useState<string>("");

  const [status, setStatus] = useState<string>(defaultValue);

  const [taskNumber, setTaskNumber] = useState<number>(7);

  const uid = uuidv4();

  const expiredAt = "2021-07-20T16:09:00.765Z";

  const handleStatusChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => setStatus(event.target.value),
    []
  );


  const handleSubmits = (e) => {
    if (title.length < 12) {
      dispatch({
        type: taskTypes.ADD_TASK,
        payload: {
          uid,
          title,
          status,
          expiredAt,
          "categoryId": Number(id),
          taskNumber
        }
      });
      setTitle("");
      setTaskNumber(taskNumber + 1);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmits(e);
    }
  };

  const [dirtyField, setDirtyField] = useState(false);
  const [error, setError] = useState("Поле не должно быть пустым");
  const [formValid, setFormValid] = useState(false);

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "title": {
        setDirtyField(true);
        break;
      }
      default:
        setDirtyField(false);
    }
  };

  const dataHandler = (e) => {
    setTitle(e.target.value);
    if (e.target.value.length < 3 || e.target.value.length > 12) {
      setError("Длинна должна быть > 3 и < 12 символов");
      setFormValid(false);
    } else {
      setFormValid(true);
      setError("");
    }
  };

  return (
    <div>
      <div className="input-wrapper">
        <p className="input-todos-title mb-1 font-weight-bold d-flex justify-content-center">
          Title:
        </p>

        {error && dirtyField && <div style={{ color: "red" }}>{error}</div>}
        <input
          onBlur={e => blurHandler(e)}
          onChange={e => dataHandler(e)}
          className="big-input mb-2"
          value={title}
          name="title"
          onKeyDown={handleKeyPress}
          type="text"
          placeholder="type anything..."
          required
        />

      </div>

      <div className="ml-3 mt-3">
        <div>
          <p className="mb-1 font-weight-bold">Status:</p>
          <label
            className="d-flex align-items-center"
            htmlFor={`input_radio-${StatusTypesEnum.INACTIVE}`}
          >
            <input
              className="input-todos"
              value={StatusTypesEnum.INACTIVE}
              onChange={handleStatusChange}
              type="radio"
              name="status"
              defaultChecked={true}
              id={`input_radio-${StatusTypesEnum.INACTIVE}`}
            />
            <span className="status-text-block ml-2">Inactive</span>
          </label>
        </div>

        <div>
          <label
            className="d-flex align-items-center"
            htmlFor={`input_radio-${StatusTypesEnum.PENDING}`}
          >
            <input
              className="input-todos"
              value={StatusTypesEnum.PENDING}
              onChange={handleStatusChange}
              type="radio"
              name="status"
              id={`input_radio-${StatusTypesEnum.PENDING}`}
            />
            <span className="status-text-block ml-2">Pending</span>
          </label>
        </div>

        <div className="mb-2">
          <label
            className="d-flex align-items-center"
            htmlFor={`input_radio-${StatusTypesEnum.COMPLETED}`}
          >
            <input
              className="input-todos"
              value={StatusTypesEnum.COMPLETED}
              onChange={handleStatusChange}
              type="radio"
              name="status"
              id={`input_radio-${StatusTypesEnum.COMPLETED}`}
            />
            <span className="status-text-block ml-2">Completed</span>
          </label>
        </div>

        <div className="mb-2">
          <label
            className="d-flex align-items-center"
            htmlFor={`input_radio-${StatusTypesEnum.EXPIRED}`}
          >
            <input
              className="input-todos"
              value={StatusTypesEnum.EXPIRED}
              onChange={handleStatusChange}
              type="radio"
              name="status"
              id={`input_radio-${StatusTypesEnum.EXPIRED}`}
            />
            <span className="status-text-block ml-2">Expired</span>
          </label>
        </div>
        <div className="btn-wrapper">
          <Button
            text="Add task"
            classNames="add-category-task-list-button"
            action={handleSubmits}
            disabled={!formValid}
          />
        </div>
      </div>
    </div>
  );
};
