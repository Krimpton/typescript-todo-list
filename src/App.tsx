import React from "react";
import "./App.scss";
import MainContent from "./router/main-content";
import {ButtonProps} from "./store/store";

const App: React.FC<ButtonProps> = () => {
    return (
        <div>
            <MainContent/>
        </div>
    );
};

export default App;
