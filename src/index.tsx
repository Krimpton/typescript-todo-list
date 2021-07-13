import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from "react-redux";
import {storeOwn} from "./storeOwn/storeOwn";

ReactDOM.render(
    <Provider store={storeOwn}>
        <App/>
    </Provider>,
    document.getElementById('root')
);