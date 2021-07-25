import React, {FC} from "react";
import "./footer.scss";

const Footer: FC = () => {
    return (
        <footer className="footer d-flex justify-content-center">
            <p>© 2019 Todo. Created by <span className="footer-name">Kirill Panov</span></p>
        </footer>
    )
}

export default Footer
