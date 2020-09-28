import React, { useContext } from "react";
import styles from "./saboten.module.scss";
import { ModalContext } from "./modal/modal-context";

function SabotenMenuFlexColumn(props) {
    const { setModalOpen } = useContext(ModalContext);
    return (
        <div
            className={styles.menuListFlexColumn}
            onClick={() => setModalOpen(props)}
        >
            <div className={styles.menuListRecipeImageWrapper}>
                {props.image && (
                    <img src={props.image} alt="katsu" className="img-fluid" />
                )}
            </div>
            <div>
                <div className={styles.menuListEnTitle}>{props.enTitle}</div>
                <div className={styles.menuListTitle}>{props.title}</div>
                <div className={styles.menuListPrice}>{props.price}</div>
            </div>
        </div>
    );
}

export default SabotenMenuFlexColumn;
