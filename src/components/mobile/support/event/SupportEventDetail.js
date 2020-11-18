import React from "react";
import styles from "../mobile_support.module.scss";
import Datas from './SupportEventData';

export default function SupportEventDetail() {
    var path = window.location.pathname;
    var paths = path.split("/");
    var event = paths[paths.length-1];
    event = window.parseInt(event);

    let data = Datas("", event)[0];

    return (
        <>
            <section className={styles.supportEventDetailSection}>
                <div className={styles.supportEventDetailWrapper}>
                    <div className={styles.supportEventDetailTitle}>{data.title}</div>
                    <div className={styles.supportEventDetailDate}>{data.createdAt}</div>
                    <div className={styles.supportEventDetailHorizen}></div>
                    <img className={styles.supportEventDetailImage} src={data.image} alt="img"/>
                    <div className={styles.supportEventDetailDesc}>{data.description}</div>
                    <div className={styles.supportEventDetailHorizen}></div>
                </div>
            </section>
        </>
    );
}