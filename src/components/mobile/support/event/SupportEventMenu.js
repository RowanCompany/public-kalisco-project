import React from "react";
import styles from "../mobile_support.module.scss";
import { Link, useLocation } from "react-router-dom";

export default function SupportEventMenu() {
    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }

    let query = useQuery();
    let type = query.get("type");
    if(type === "" || type === null){type = "all"}

    return (
        <>
            <section className={styles.supportEventMenuSection}>
                <div className={styles.supportEventMenus}>
                    <Link to="/supports/events?type=all">
                    <div className={(type==="all" ? styles.supportEventMenuActive : styles.supportEventMenu)}>
                        <div className={styles.supportEventMenuText}>전체</div>
                    </div>
                    </Link>
                    <Link to="/supports/events?type=saboten">
                    <div className={(type==="saboten" ? styles.supportEventMenuActive : styles.supportEventMenu)}>
                        <div className={styles.supportEventMenuText}>사보텐</div>
                    </div>
                    </Link>
                    <Link to="/supports/events?type=hibarin">
                    <div className={(type==="hibarin" ? styles.supportEventMenuActive : styles.supportEventMenu)}>
                        <div className={styles.supportEventMenuText}>히바린</div>
                    </div>
                    </Link>
                </div>
                <div className={styles.supportEventMenus}>
                    <Link to="/supports/events?type=tacobell">
                    <div className={(type==="tacobell" ? styles.supportEventMenuActive : styles.supportEventMenu)}>
                        <div className={styles.supportEventMenuText}>타코벨</div>
                    </div>
                    </Link>
                    <Link to="/supports/events?type=centralkitchen">
                    <div className={(type==="centralkitchen" ? styles.supportEventMenuActive : styles.supportEventMenu)}>
                        <div className={styles.supportEventMenuText}>센츠럴키친</div>
                    </div>
                    </Link>
                    <Link to="/supports/events?type=kalisco">
                    <div className={(type==="kalisco" ? styles.supportEventMenuActive : styles.supportEventMenu)}>
                        <div className={styles.supportEventMenuText}>캘리스코</div>
                    </div>
                    </Link>
                </div>
            </section>
        </>
    );
}