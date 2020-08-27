import React from "react";
import { b } from "./svg.module.scss";

//<defs><style>.b{fill:none;stroke:#707070;}</style></defs>
function LeftArrow() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11.354"
            height="10.707"
            viewBox="0 0 11.354 10.707"
        >
            {/* className="a" */}
            <g transform="translate(-1218.146 -610.146)">
                <line
                    className={b}
                    x1="11"
                    transform="translate(1218.5 615.5)"
                />
                <line
                    className={b}
                    x1="5"
                    y2="5"
                    transform="translate(1218.5 610.5)"
                />
                <line
                    className={b}
                    x1="5"
                    y1="5"
                    transform="translate(1218.5 615.5)"
                />
            </g>
        </svg>
    );
}

export default LeftArrow;
