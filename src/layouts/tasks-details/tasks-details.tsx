import React, { ChangeEvent, FC, useCallback, useState } from "react";
import "./tasks-details.scss";
import Button from "./buttons/main-button/main-button";
import { useHistory } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { taskTypes } from "../../store/types/types";
import { useDispatch } from "react-redux";
import { StatusTypesEnum } from "../../store/constants/constans";
import { time } from "../../store/reducers/tasks-list-reducer";

const TasksDetails: FC = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [isOpenSecond, setIsOpenSecond] = useState<boolean>(false);

  const toggleVisibleHandler = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  const toggleVisibleHandlerSecond = () => {
    setIsOpenSecond((isOpenSecond) => !isOpenSecond);
  };

  const removeTodo = (id) => {
    setIsOpenSecond((prev) => !prev);
    dispatch({
      type: taskTypes.DELETE_TASK,
      payload: { id }
    });
  };


  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const [expiredAt, setExpiredAt] = useState<string>(time);

  const handleTitleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => setTitle(event.target.value),
    []
  );

  const handleDescriptionChange = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>) => setDescription(event.target.value),
    []
  );

  const handleExpiredAtChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => setExpiredAt(event.target.value),
    []
  );

  const history = useHistory();

  const handleClickTasks = () => {
    history.push("/tasksList");
  };

  const handleSetStatusDone = (id) => {
    dispatch({
      type: taskTypes.COMPLETED_STATUS,
      payload: {
        id,
        status: "Completed"
      }
    });
  };

  const { todos } = useTypedSelector((state) => state.taskList);

  const [dirty, setDirty] = useState(false);
  const [error, setError] = useState('Поле не должно быть пустым');
  const [formValid, setFormValid] = useState(false)

  const [dirty2, setDirty2] = useState(false);
  const [error2, setError2] = useState('');
  const [formValid2, setFormValid2] = useState(false)

  const [dirty3, setDirty3] = useState(false);
  const [error3, setError3] = useState('');
  const [formValid3, setFormValid3] = useState(false)

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'title': {
        setDirty(true)
        break;
      }
      case 'expired': {
        setDirty2(true)
        break;
      }
      case 'description': {
        setDirty3(true)
        break;
      }
      default:
        // setDirty(false);
        // setDirty2(false);
        // setDirty3(false);
    }
  }

  const dataHandler = (e) => {
    setTitle(e.target.value);
    if (e.target.value.length < 3 || e.target.value.length > 12) {
      setError('Длинна должна быть > 3 и < 12 символов')
      setFormValid(false)
    } else {
      setFormValid(true)
      setError('')
    }
  }

  const dataHandler2 = (e) => {
    setExpiredAt(e.target.value);
    if (e.target.value.length > 42) {
      setError2('Длинна должна быть < 42 символов')
      setFormValid2(false)
    } else {
      setFormValid2(true)
      setError2('')
    }
  }

  const dataHandler3 = (e) => {
    setDescription(e.target.value);
    if (e.target.value.length > 22) {
      setError3('Длинна должна быть < 22 символов')
      setFormValid3(false)
    } else {
      setFormValid3(true)
      setError3('')
    }
  }

  const todosEverything = todos.map((todo, index) => (
    <div key={index}>
      <p onClick={() => handleCLickEditTask(todo.id)} className="tasks-title">{todo.title} </p>
      <h1 className="tasks-created">{todo.expiredAt}</h1>
      <h1 className="tasks-expired ">{todo.expiredAt}</h1>
      <div className={"button-status d-flex justify-content-end"}>
        <Button text={todo.status} classNames={todo.status} />
      </div>
      <div className="status-wrapper">
        <Button
          text={"Done"}
          action={() => handleSetStatusDone(todo.id)}
          classNames={"done-button"}
          singleButton={"material-icons-mg-0"}
        />
        <Button
          text={"Edit"}
          action={toggleVisibleHandler}
          classNames={"edit-button"}
          singleButton={"material-icons-mg-0"}
        />
        <Button
          text={"Remove"}
          action={toggleVisibleHandlerSecond}
          classNames={"remove-button"}
          singleButton={"material-icons-mg-0"}
        />
      </div>

      <div className="status-text">
        <p>{todo.description}</p>
      </div>
      {isOpenSecond && (
        <div className="isModal-task-details-second" onClick={() => setIsOpenSecond(false)}>
          <div className="task-task-details-second" onClick={(e) => e.stopPropagation()}>
            <div className="details-title">Do you want to delete task?</div>
            <div className="details-subtitle">
              If you are really want to remove this task please<br />click to remove button.
            </div>
            <div className="button-block">
              <Button
                text="Cancel"
                classNames="cancel-button"
                action={() => setIsOpenSecond((prev) => !prev)}
              />
              <Button
                text="Delete"
                classNames="delete-button"
                action={() => removeTodo(todo.id)}
              />
            </div>
          </div>
        </div>
      )}

      <div className="d-flex justify-content-end align-items-center">
        <div className="details-return">
          <Button
            text="Return"
            classNames={"return-button"}
            action={handleClickTasks}
          />
        </div>
      </div>






      {isOpen && (
        <div className="isModal-task-details" onClick={() => setIsOpen(false)}>
          <div className="task-task-details" onClick={(e) => e.stopPropagation()}>
            <div className="edit-wrapper">
              <div className="edit-header d-flex justify-content-center align-items-center">
                <p className="task-title">Task edit</p>
                <span onClick={toggleVisibleHandler} className="material-icons">cancel</span>
              </div>
              <div className="edit-main-content d-flex justify-content-start align-items-start flex-column">
                <div>
                  <div className="name-title">Name:</div>
                  {error && dirty && <div style={{color: "red"}}>{error}</div>}
                  <input value={title} onBlur={e => blurHandler(e)} onChange={e => dataHandler(e)}
                  name='title' type='text' placeholder="type anything..." />
                </div>

                <div>
                  <div className="expired-title">Expired at:</div>
                  {error2 && dirty2 && <div style={{color: "red"}}>{error2}</div>}
                  <input value={expiredAt} onBlur={e => blurHandler(e)} onChange={e => dataHandler2(e)}
                  name='expired'/>
                </div>

                <div className="description-block">
                  <div className="description-title">Description:</div>
                  {error3 && dirty3 && <div style={{color: "red"}}>{error3}</div>}
                  <textarea
                    className="description-textarea"
                    value={description}
                    onChange={e => dataHandler3(e)}
                    onBlur={e => blurHandler(e)}
                    name='description'
                  />
                </div>
              </div>
              <div className="edit-footer">
                <Button
                  text={"Cancel"}
                  action={toggleVisibleHandler}
                  classNames={"cancel-button"}
                  singleButton={"material-icons-margin-0"}
                />
                <Button
                  text={"Save"}
                  action={() => handleCLickEditTask(todo.id)}
                  classNames={"save-button"}
                  singleButton={"material-icons-margin-0"}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  ));
  const handleCLickEditTask = (id) => {
    if (title) {
      dispatch({
        type: taskTypes.EDIT_TASK,
        payload: {
          id,
          title,
          expiredAt,
          description
        }
      });
      setTitle("");
      setDescription("");
      setExpiredAt(time);
    }
  };

  const dashboardRedirect = () => {
    history.push("/dashboard");
  };

  return todosEverything.length > 0 ? (
    <div className="tasks-details-wrapper d-flex justify-content-center align-items-center">
      <div className="tasks-wrapper">
        {todosEverything}
      </div>
    </div>
  ) : (<div className="empty-task-details d-flex align-items-center flex-md-column">
    <div className="empty-task-details-wrapper d-flex align-items-center flex-md-column">
      <div className="mb-2">Now your task list is empty.</div>
      <div className="subtitle mb-2">But you can add a new task it will improve your personal skills.</div>
      <div className="subtitle mb-2">Just press <span className="dashboard-redirect" onClick={dashboardRedirect}>Go to dashboard</span>
      </div>
      <div className="subtitle mb-2">Good Luck.</div>
    </div>
  </div>);
};

export default TasksDetails;