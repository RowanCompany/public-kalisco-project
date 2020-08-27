import React from "react";
import SupportBanner from "./SupportBanner";
import { useParams } from "react-router-dom";
import styles from "./support.module.scss";
import EventContent from "./event/EventContent";

function SupportDetailContent() {
    const { subject } = useParams();

    return (
        <>
            <SupportBanner subject={subject} />
            <SupportCaseRenderer subject={subject} />
        </>
    );
}

// TODO: 새로 컨텐츠 나올떄 변경해야 함
function SupportCaseRenderer({ subject }) {
    switch (subject) {
        case "membership":
        case "partnership":
        case "kakaotalk-friends":
        case "giveaway":
            return (
                <div className={styles.tempDetailContent}>
                    <div className={styles.tempDetailButtonWrapper}>
                        <button
                            type="button"
                            className={styles.tempDetailButton}
                        >
                            조회하기
                        </button>
                    </div>
                </div>
            );
        case "events":
            return <EventContent />;
        default:
            return <></>;
    }
}

export default SupportDetailContent;
