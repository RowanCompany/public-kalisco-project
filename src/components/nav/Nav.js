import React, { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../static/svg/logo-header-or.svg";
import styles from "./nav.module.scss";

// TODO: About Hover 메뉴 만들어야 함
function Nav() {
    const location = useLocation();
    const currentPathRef = useRef(location.pathname);

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
                        <Link
                            to="/about"
                            className={`${styles.navLink} ${
                                currentPathRef.current.includes("about")
                                    ? styles.active
                                    : ""
                            }`}
                        >
                            About
                        </Link>
                    </div>
                    <div>
                        <Link
                            to="/brand"
                            className={`${styles.navLink} ${
                                currentPathRef.current.includes("brand")
                                    ? styles.active
                                    : ""
                            }`}
                        >
                            Brand
                        </Link>
                    </div>
                    <div>
                        <Link
                            to="/products"
                            className={`${styles.navLink} ${
                                currentPathRef.current.includes("products")
                                    ? styles.active
                                    : ""
                            }`}
                        >
                            Product
                        </Link>
                    </div>
                    <div>
                        <Link
                            to="/supports"
                            className={`${styles.navLink} ${
                                currentPathRef.current.includes("supports")
                                    ? styles.active
                                    : ""
                            }`}
                        >
                            Support
                        </Link>
                    </div>
                    <div>
                        <Link
                            to="/hr"
                            className={`${styles.navLink} ${
                                currentPathRef.current.includes("hr")
                                    ? styles.active
                                    : ""
                            }`}
                        >
                            HR
                        </Link>
                    </div>
                    <div>
                        <Link
                            to="/recruit"
                            className={`${styles.navLink} ${
                                currentPathRef.current.includes("recruit")
                                    ? styles.active
                                    : ""
                            }`}
                        >
                            Recruit
                        </Link>
                    </div>
                </li>
                {/* <li>
                    <div>고객소통</div>
                </li> */}
            </ul>
        </nav>
    );
}

export default Nav;
