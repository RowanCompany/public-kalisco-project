import React from "react";
import { a } from "./svg.module.scss";

//<defs><style>.a{fill:none;stroke:#707070;}</style></defs>
function RightArrow() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11.354"
            height="10.707"
            viewBox="0 0 11.354 10.707"
        >
            <g transform="translate(0 0.354)">
                <line className={a} x2="11" transform="translate(0 5)" />
                <line className={a} x2="5" y2="5" transform="translate(6)" />
                <line className={a} y1="5" x2="5" transform="translate(6 5)" />
            </g>
        </svg>
    );
}

export default RightArrow;
