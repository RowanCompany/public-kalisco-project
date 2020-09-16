import React from "react";
import styles from "./fab.module.scss";
import iconInstargram from "../../../static/svg/icon_insta.svg";
import iconFacebook from "../../../static/svg/icon_facebook.svg";
import iconSupport from "../../../static/svg/fab_support.svg";
import { Link } from "react-router-dom";

function Fab({ subject }) {
    const data = {
        saboten: {
            facebook: "https://www.facebook.com/sabotenkorea",
            instagram: "https://www.instagram.com/saboten_korea/",
        },
        hibarin: {
            facebook: "https://www.facebook.com/hibarinkr",
            instagram: "https://www.instagram.com/hibarin_korea/",
        },
    };

    return (
        <div className={styles.fabWrapper}>
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
