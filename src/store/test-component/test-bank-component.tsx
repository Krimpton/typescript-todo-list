import React from 'react';
import {useDispatch} from "react-redux";


const TestBankComponent: React.FC = () => {


    const dispatch = useDispatch();

    const addTask = (task) => {
        dispatch({type: "ADD_TASK", payload: task})
    }

    const deleteTask = (task) => {
        dispatch({type: "DELETE_TASK", payload: task})
    }

    const editTask = (task) => {
        dispatch({type: "EDIT_TASK", payload: task})
    }


    return (
        <div>
            <button onClick={() => addTask(String(prompt()))}>addTask</button>
            <button onClick={() => deleteTask}>deleteTask</button>
            <button onClick={() => editTask}>editTask</button>
        </div>
    );
};

export default TestBankComponent;


//reducer

//
// export interface testProps {
//     task?: string;
// }
// const defaultState = {
//     task: '333',
// }

// case "ADD_TASK":
// return {...state, task: state.task = action.payload}
// case "DELETE_TASK":
// return {...state, task: state.task = 'dsada'}
// case "EDIT_TASK":
// return {...state}


//store

// export interface TaskProps {
//     task: string | null;
// }
