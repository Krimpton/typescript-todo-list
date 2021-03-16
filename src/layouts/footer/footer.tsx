import React from "react";
import "./footer.scss";

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <p>
                © 2019 Todo. Created by <span className="footer-name">Kirill Panov</span>
            </p>
        </footer>
    )
}

export default Footer
