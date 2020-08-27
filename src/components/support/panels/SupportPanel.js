import React from "react";
import { Link } from "react-router-dom";
import styles from "./panel.module.scss";

function SupportPanel({ link, icon, text }) {
    return (
        <div className={styles.panelWrapper}>
            <Link to={link} className={styles.panel}>
                <div className={styles.panelLogoWrapper}>
                    <img src={icon} alt={text} />
                </div>
                <div>{text}</div>
            </Link>
        </div>
    );
}

export default SupportPanel;
