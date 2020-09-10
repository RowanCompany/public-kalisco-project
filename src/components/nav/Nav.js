import React, { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../static/svg/logo-header-or.svg";
import styles from "./nav.module.scss";
import SubNavData from "./SubNavData";

function ConditionalLinkRenderer({ link, title }, ref) {
    if (link && link.includes("http")) {
        return (
            <a
                href={link}
                rel="noopener noreferrer"
                className={`${styles.navLink}`}
                target="_blank"
            >
                {title}
            </a>
        );
    } else if (link) {
        return (
            <Link
                to={link}
                className={`${styles.navLink} ${
                    ref.current.includes(link) ? styles.active : ""
                }`}
            >
                {title}
            </Link>
        );
    } else {
        return <div className={styles.navLink}>{title}</div>;
    }
}

function Nav() {
    const location = useLocation();
    const currentPathRef = useRef(location.pathname);
    const [currentHovered, setCurrentHovered] = useState("");

    return (
        <nav
            className={styles.homeNav}
            onMouseLeave={() => setCurrentHovered("")}
        >
            <ul className={styles.homeNavWrapper}>
                <li>
                    <Link to="/">
                        <img src={logo} alt="Brand logo" />
                    </Link>
                </li>
                <li className="mx-auto d-flex align-self-center">
                    <div>
                        <Link
                            to="/about"
                            className={`${styles.navLink} ${
                                currentPathRef.current.includes("about") ||
                                currentHovered.includes("about")
                                    ? styles.active
                                    : ""
                            }`}
                            onMouseEnter={() => setCurrentHovered("about")}
                        >
                            About
                        </Link>
                    </div>
                    <div>
                        <Link
                            to="/brand"
                            className={`${styles.navLink} ${
                                currentPathRef.current.includes("brand") ||
                                currentHovered.includes("brand")
                                    ? styles.active
                                    : ""
                            }`}
                            onMouseEnter={() => setCurrentHovered("brand")}
                        >
                            Brand
                        </Link>
                    </div>
                    <div>
                        <Link
                            to="/products"
                            className={`${styles.navLink} ${
                                currentPathRef.current.includes("products") ||
                                currentHovered.includes("products")
                                    ? styles.active
                                    : ""
                            }`}
                            onMouseEnter={() => setCurrentHovered("products")}
                        >
                            Product
                        </Link>
                    </div>
                    <div>
                        <Link
                            to="/supports"
                            className={`${styles.navLink} ${
                                currentPathRef.current.includes("supports") ||
                                currentHovered.includes("supports")
                                    ? styles.active
                                    : ""
                            }`}
                            onMouseEnter={() => setCurrentHovered("supports")}
                        >
                            Support
                        </Link>
                    </div>
                    <div>
                        <Link
                            to="/hr"
                            className={`${styles.navLink} ${
                                currentPathRef.current.includes("hr") ||
                                currentHovered.includes("hr")
                                    ? styles.active
                                    : ""
                            }`}
                            onMouseEnter={() => setCurrentHovered("hr")}
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
                            onMouseEnter={() => setCurrentHovered("recruit")}
                        >
                            Recruit
                        </Link>
                    </div>
                </li>
                <li style={{ opacity: 0, visibility: "hidden" }}>
                    <Link to="/">
                        <img src={logo} alt="Brand logo" />
                    </Link>
                </li>
                {/* <li>
                    <div>고객소통</div>
                </li> */}
            </ul>
            {SubNavData[currentHovered] && (
                <ul className={styles.homeNavWrapper}>
                    <li className="mx-auto d-flex align-self-center">
                        {SubNavData[currentHovered].map((d, i) => {
                            return (
                                <div key={i}>
                                    {/* <Link
                                        to={d.link}
                                        className={`${styles.navLink} ${
                                            currentPathRef.current.includes(
                                                d.link
                                            )
                                                ? styles.active
                                                : ""
                                        }`}
                                    >
                                        {d.title}
                                    </Link> */}
                                    {ConditionalLinkRenderer(d, currentPathRef)}
                                </div>
                            );
                        })}
                    </li>
                </ul>
            )}
        </nav>
    );
}

export default Nav;
