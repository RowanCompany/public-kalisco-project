import React from "react";
import styles from "../main_footer_circle.module.scss";

function RecruitLogo({ hovered }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="56"
            height="56"
            viewBox="0 0 56 56"
        >
            <g transform="translate(-4 -4)">
                <path
                    className={hovered ? styles.hoveredLogo : styles.normalLogo}
                    d="M32,34a6.393,6.393,0,0,1-6.354-5.916l-.216-3.028a6.587,6.587,0,1,1,13.141,0l-.217,3.028A6.393,6.393,0,0,1,32,34Zm0-14a4.587,4.587,0,0,0-4.575,4.914l.216,3.028a4.37,4.37,0,0,0,8.718,0l.216-3.028A4.587,4.587,0,0,0,32,20Z"
                />
                <path
                    className={hovered ? styles.hoveredLogo : styles.normalLogo}
                    d="M43,44H21a1,1,0,0,1-1-1V39.22a6.012,6.012,0,0,1,3.516-5.46l5.329-2.429a1,1,0,1,1,.83,1.819l-5.33,2.43A4.009,4.009,0,0,0,22,39.22V42H42V39.22a4.009,4.009,0,0,0-2.344-3.64l-5.331-2.43a1,1,0,1,1,.83-1.819l5.33,2.43A6.012,6.012,0,0,1,44,39.22V43A1,1,0,0,1,43,44Z"
                />
                <path
                    className={hovered ? styles.hoveredLogo : styles.normalLogo}
                    d="M31,26a25.742,25.742,0,0,1-4.767-.488,1,1,0,1,1,.374-1.965A25.483,25.483,0,0,0,30,23.973V23a1,1,0,0,1,1.707-.707c.006,0,1.466,1.36,4.946,1.65l.937.017a1,1,0,0,1-.04,2l-1-.02A13.162,13.162,0,0,1,32,24.8V25A1,1,0,0,1,31,26Z"
                />
                <path
                    className={hovered ? styles.hoveredLogo : styles.normalLogo}
                    d="M32,14a1,1,0,0,1-1-1V5a1,1,0,0,1,2,0v8A1,1,0,0,1,32,14Z"
                />
                <path
                    className={hovered ? styles.hoveredLogo : styles.normalLogo}
                    d="M13,33H5a1,1,0,0,1,0-2h8a1,1,0,0,1,0,2Z"
                />
                <path
                    className={hovered ? styles.hoveredLogo : styles.normalLogo}
                    d="M32,60a1,1,0,0,1-1-1V51a1,1,0,0,1,2,0v8A1,1,0,0,1,32,60Z"
                />
                <path
                    className={hovered ? styles.hoveredLogo : styles.normalLogo}
                    d="M59,33H51a1,1,0,0,1,0-2h8a1,1,0,0,1,0,2Z"
                />
                <path
                    className={hovered ? styles.hoveredLogo : styles.normalLogo}
                    d="M32,58A26,26,0,1,1,58,32,26,26,0,0,1,32,58ZM32,8A24,24,0,1,0,56,32,24,24,0,0,0,32,8Z"
                />
                <path
                    className={hovered ? styles.hoveredLogo : styles.normalLogo}
                    d="M32,54A22,22,0,1,1,54,32,22,22,0,0,1,32,54Zm0-42A20,20,0,1,0,52,32,20,20,0,0,0,32,12Z"
                />
            </g>
        </svg>
    );
}

export default RecruitLogo;
