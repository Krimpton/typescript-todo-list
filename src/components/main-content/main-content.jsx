import React from "react";
import "./main-content.scss";
import ruster from "./ruster.jpg";

const MainContent = () => {
    return (
        <div className="container">
            <header className="d-flex justify-content-between">
                <div className="logo">
                    <span className="ToDo">ToDo</span>
                </div>

                <div className="person-info">
                    <div>
                        <span>James Smith</span>
                        <span className="material-icons">keyboard_arrow_down</span>
                    </div>

                    <div>
                        <img src={ruster} alt="ruster" />
                    </div>
                </div>
            </header>

            <main>
                <section className="tasks-info"></section>

                <section className="all-tasks"></section>
            </main>

            <footer></footer>
        </div>
    );
};

export default MainContent