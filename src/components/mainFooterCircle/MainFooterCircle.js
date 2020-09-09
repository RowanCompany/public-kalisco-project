import React from "react";
import styles from "./main_footer_circle.module.scss";

function MainFooterCircle(props) {
    return (
        <div
            className="col main-footer-circle"
            onMouseEnter={props.enterEvent}
            onMouseLeave={props.leaveEvent}
        >
            <div className={styles.content}>{props.children}</div>
        </div>
    );
}

export default MainFooterCircle;
