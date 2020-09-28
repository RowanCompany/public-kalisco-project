import React, { useContext } from "react";
import styles from "./saboten.module.scss";
import { ModalContext } from "./modal/modal-context";
import pastelImage from "../../static/images/img-p-pastel-gray.png";

function SabotenMenuFlexColumn(props) {
    const { setModalOpen } = useContext(ModalContext);
    const delayTotalKey = props.delayKey + 1;
    return (
        <div
            className={`${styles.menuListFlexColumn} animate__animated animate__fadeInUp`}
            style={{ "animation-delay": `${0.25 * delayTotalKey}s` }}
            onClick={() => setModalOpen(props)}
        >
            <div className={styles.menuListRecipeImageWrapper}>
                {props.image && (
                    <>
                        <img
                            src={pastelImage}
                            alt="pastel"
                            style={{
                                position: "absolute",
                                zIndex: 2,
                                width: "100%",
                                height: "100%",
                                left: 0,
                                opacity: "0.6",
                                transform: "scale(1.4)",
                            }}
                        />
                        <img
                            src={props.image}
                            alt="katsu"
                            className="img-fluid"
                        />
                    </>
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
