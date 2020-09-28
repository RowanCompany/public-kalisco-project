import React from "react";
import styles from "./fab.module.scss";
import iconInstargram from "../../../static/svg/icon_insta.svg";
import iconFacebook from "../../../static/svg/icon_facebook.svg";
import iconSupport from "../../../static/svg/fab_support.svg";
import iconPlaceholder from "../../../static/svg/icon-placeholder.svg";
import { Link } from "react-router-dom";

function Fab({ subject }) {
    const data = {
        saboten: {
            facebook: "https://www.facebook.com/sabotenkorea",
            instagram: "https://www.instagram.com/saboten_korea/",
            map:
                "https://map.naver.com/v5/search/%EC%82%AC%EB%B3%B4%ED%85%90?placeSearchOption=fromNxList=true%26noredirect=1%26entry=pll&c=14135681.1787198,4517242.0563975,13,0,0,0,dh",
        },
        hibarin: {
            facebook: "https://www.facebook.com/hibarinkr",
            instagram: "https://www.instagram.com/hibarin_korea/",
            map:
                "https://map.naver.com/v5/search/%ED%9E%88%EB%B0%94%EB%A6%B0?placeSearchOption=fromNxList=true%26noredirect=1%26entry=pll&c=14135529.7255359,4513992.1748852,13,0,0,0,dh",
        },
    };

    return (
        <div className={styles.fabWrapper}>
            {data[subject] && (
                <a
                    className="d-block"
                    href={data[subject]["map"]}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className={styles.mapPlaceholderIcon}>
                        <img src={iconPlaceholder} alt="placeholder" />
                    </div>
                </a>
            )}
            <Link to={`/contact?subject=${subject}`} className="d-inline-block">
                <div className={styles.supportIcon}>
                    <img src={iconSupport} alt="instagram" />
                </div>
            </Link>
            {data[subject] && (
                <>
                    <a
                        href={data[subject]["facebook"]}
                        rel="noopener noreferrer"
                        className="d-block"
                        target="_blank"
                    >
                        <div className={styles.facebookIcon}>
                            <img src={iconFacebook} alt="instagram" />
                        </div>
                    </a>
                    <a
                        href={data[subject]["instagram"]}
                        rel="noopener noreferrer"
                        className="d-block"
                        target="_blank"
                    >
                        <div className={styles.instagramIcon}>
                            <img src={iconInstargram} alt="instagram" />
                        </div>
                    </a>
                </>
            )}
        </div>
    );
}

export default Fab;
