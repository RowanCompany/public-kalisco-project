import React from "react";

function MainFooterCircle(props) {
    return (
        <div
            className="col main-footer-circle"
            onMouseEnter={props.enterEvent}
            onMouseLeave={props.leaveEvent}
        >
            <div className="content">{props.children}</div>
        </div>
    );
}

export default MainFooterCircle;
