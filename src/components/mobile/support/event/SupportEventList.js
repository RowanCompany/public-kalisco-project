import React from "react";
import styles from "../mobile_support.module.scss";
import { Link, useLocation} from "react-router-dom";
import Datas from './SupportEventData';

export default function SupportEventList() {
    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }

    let query = useQuery();
    let type = query.get("type");
    if(type === "" || type === null){
        type = "all";
    }

    let dataList = Datas(type);
    const dataPanels = dataList.map((data, index) => (
        <Link key={index} to={"/supports/events/"+data.id}>
        <div className={styles.supportEventPanel}>
            <img src={data.image} className={styles.supportEventPanelImage} alt="img" />
            <div className={styles.supportEventPanelDesc}>
                <div className={styles.supportEventPanelTitle}>{data.title}</div>
                <div className={styles.supportEventPanelDate}>{data.createdAt}</div>
            </div>
        </div>
        </Link>
    ));

    return (
        <>
            <section className={styles.supportEventSection}>
                <div className={styles.supportEventWrapper}>
                    <div className={styles.supportEventPanels}>
                        {dataPanels}
                    </div>
                </div>
            </section>
        </>
    );
}