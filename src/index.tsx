import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { store } from "./store/store";
import MainContent from "./router/main-content";

ReactDOM.render(
    <Provider store={store}>
        <MainContent />
    </Provider>,
    document.getElementById("root"),
);
