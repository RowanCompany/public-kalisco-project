import React from "react";
import { Link } from "react-router-dom";
import styles from "./event.module.scss";
import EventPanelImage from "../../../static/images/img-event-saboten-1.png";

// TODO: 데이터 연동해야 함
function EventPanel() {
    return (
        <Link to="" className={styles.eventLinkWrapper}>
            <div>
                <div>
                    <img
                        src={EventPanelImage}
                        alt="Temp event"
                        className={styles.panelImageFill}
                    />
                </div>
                <div className={styles.eventLinkboxWrapper}>
                    <div className={styles.eventLinkTitle}>
                        사보텐 벤또 출시!
                    </div>
                    <div className={styles.eventLinkDate}>2020-08-03</div>
                    <div className={styles.eventLinkMore}>More &gt;</div>
                </div>
            </div>
        </Link>
    );
}

export default EventPanel;
