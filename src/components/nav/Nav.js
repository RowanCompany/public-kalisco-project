import React from "react";
import { Link } from "react-router-dom";
import logo from "../../static/svg/logo-header-or.svg";
import styles from "./nav.module.scss";

function nav() {
    return (
        <nav className={styles.homeNav}>
            <ul>
                <li>
                    <Link to="/">
                        <img src={logo} alt="Brand logo" />
                    </Link>
                </li>
                {/* TODO: 2단 메뉴 구성해야 함 */}
                <li className="mx-auto d-flex align-self-center">
                    <div>
                        <Link to="/about" className={styles.navLink}>
                            About
                        </Link>
                    </div>
                    <div>Brand</div>
                    <div>Product</div>
                    <div>HR</div>
                    <div>Recruit</div>
                </li>
                <li>
                    <div>고객소통</div>
                </li>
            </ul>
        </nav>
    );
}

export default nav;
