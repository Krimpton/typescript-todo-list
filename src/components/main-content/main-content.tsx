import React  from "react";
import "./main-content.scss";
import ruster from "./ruster.jpg";

const MainContent: React.FC = () => {
    return (
        <div className="main-wrapper">






            <div className="main-content">
                <div className="second-wrapper">
                    <div className="tasks-info">
                        <div className="tasks-container">
                            <p>57</p>
                            <span>Created tasks</span>
                        </div>

                        <div className="tasks-container">
                            <p>22</p>
                            <span>Completed tasks</span>
                        </div>
                    </div>

                    <div className="tasks-category">
                        <div className="mini-tasks">
                            <span className="material-icons">list</span>
                            <h6>All tasks</h6>
                            <p>50 tasks</p>
                        </div>

                        <div className="mini-tasks">
                            <span className="material-icons">gamepad</span>
                            <h6>Rust</h6>
                            <p>21 tasks</p>
                        </div>

                        <div className="mini-tasks">
                            <span className="material-icons">add_business</span>
                            <h6>Supermarket</h6>
                            <p>21 tasks</p>
                        </div>
                    </div>
                </div>
                <div className="category wrapper">
                    <div className="category-btn">
                        <span className="material-icons">add</span>
                        <p>Add category</p>
                    </div>
                </div>
            </div>





            <footer className="footer">
                <p>
                    © 2019 Todo. Created by <span>Kirill Panov.</span>
                </p>
            </footer>
        </div>
    );
};


export default MainContent;
