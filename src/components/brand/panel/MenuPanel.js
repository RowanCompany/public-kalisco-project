import React, { useContext } from "react";
import styles from "./menu_panel.module.scss";
import { ModalContext } from "../modal/modal-context";

function MenuPanel(props) {
    const { setModalOpen } = useContext(ModalContext);
    return (
        <div className={styles.menuPanel} onClick={() => setModalOpen(props)}>
            <div>
                <img src={props.image} alt={props.title} className="img-fill" />
            </div>
            <div className={styles.panelTextWrapper}>
                <div className={styles.panelFlexWrapper}>
                    <div className={styles.panelTitleWrapper}>
                        <div className={styles.panelTitle}>{props.title}</div>
                        <div className={styles.panelEnTitle}>
                            {props.enTitle}
                        </div>
                    </div>
                    <div className={styles.panelPrice}>{props.price}</div>
                </div>
            </div>
        </div>
    );
}

export default MenuPanel;
