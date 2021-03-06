import React from "react";
import styles from "../main_footer_circle.module.scss";

function NoticeLogo({ hovered }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="56.408"
            height="53.377"
            viewBox="0 0 56.408 53.377"
        >
            <g transform="translate(0 0)">
                <path
                    className={hovered ? styles.hoveredLogo : styles.normalLogo}
                    d="M123.616,291.631a1.1,1.1,0,1,0-1.5-.4A1.1,1.1,0,0,0,123.616,291.631Zm0,0"
                    transform="translate(-108.526 -257.672)"
                />
                <path
                    className={hovered ? styles.hoveredLogo : styles.normalLogo}
                    d="M10.575,61.456l5.548,9.61a4.407,4.407,0,1,0,7.633-4.406l-3.305-5.726,2.862-1.653a1.1,1.1,0,0,0,.4-1.5l-1.433-2.481,21.1-4.139A3.3,3.3,0,0,0,46.065,46.2L42.4,39.862l2.34-3.544a1.1,1.1,0,0,0,.035-1.158l-2.2-3.816a1.1,1.1,0,0,0-1.02-.549l-4.239.254-4.065-7.041a3.276,3.276,0,0,0-2.821-1.652h-.042a3.276,3.276,0,0,0-2.783,1.524L13.213,42.214l-9.356,5.4a7.712,7.712,0,0,0,6.718,13.84Zm11.273,6.306a2.2,2.2,0,0,1-3.817,2.2l-5.509-9.542,3.816-2.2Zm-2.5-8.736-1.1-1.908,1.908-1.1,1.1,1.908ZM41.007,33.034l1.523,2.637-1.358,2.056-2.624-4.546ZM29.448,25.087a1.1,1.1,0,0,1,1.894.022l12.814,22.2a1.1,1.1,0,0,1-.927,1.652,4.044,4.044,0,0,0-.6.1L29.071,25.581C29.355,25.215,29.392,25.18,29.448,25.087ZM27.6,27.449,40.34,49.508l-19.221,3.77L15.275,43.155ZM2.942,57.049a5.5,5.5,0,0,1,2.016-7.525l8.587-4.958,5.509,9.541-8.587,4.958A5.515,5.515,0,0,1,2.942,57.049Zm0,0"
                    transform="translate(0 -19.892)"
                />
                <path
                    className={hovered ? styles.hoveredLogo : styles.normalLogo}
                    d="M49.656,310.124a1.1,1.1,0,0,0-1.5-.4l-1.908,1.1a1.1,1.1,0,0,1-1.5-.4,1.1,1.1,0,0,0-1.908,1.1,3.309,3.309,0,0,0,4.515,1.21l1.908-1.1A1.1,1.1,0,0,0,49.656,310.124Zm0,0"
                    transform="translate(-37.98 -275.466)"
                />
                <path
                    className={hovered ? styles.hoveredLogo : styles.normalLogo}
                    d="M442.98,42.62l-6.139,3.416a1.1,1.1,0,1,0,1.072,1.925l6.139-3.416a1.1,1.1,0,0,0-1.071-1.925Zm0,0"
                    transform="translate(-388.209 -37.8)"
                />
                <path
                    className={hovered ? styles.hoveredLogo : styles.normalLogo}
                    d="M445.707,137.8l-4.257-1.14a1.1,1.1,0,1,0-.57,2.128l4.257,1.14a1.1,1.1,0,1,0,.57-2.128Zm0,0"
                    transform="translate(-391.58 -121.569)"
                />
                <path
                    className={hovered ? styles.hoveredLogo : styles.normalLogo}
                    d="M384.672.817,383.53,5.074a1.1,1.1,0,1,0,2.129.571L386.8,1.388a1.1,1.1,0,1,0-2.128-.571Zm0,0"
                    transform="translate(-341.242 0)"
                />
            </g>
        </svg>
    );
}

export default NoticeLogo;
