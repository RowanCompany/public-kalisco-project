import React, { useContext } from "react";
import styles from "./mobile_saboten.module.scss";
import { ModalContext } from "../../../brand/modal/modal-context";

export default function SabotenMenuPanel(props) {
  const { setModalOpen } = useContext(ModalContext);

  return (
    <div
      className={styles.menuDetailWrapper}
      onClick={() => setModalOpen(props)}
    >
      {props.image && (
        <div className={styles.menuDetailImageWrapper}>
          <img src={props.image} alt="food" />
        </div>
      )}
      <div className={styles.menuDetailDescriptionWrapper}>
        <div className={styles.menuDetailEnTitle}>{props.enTitle}</div>
        <div className={styles.menuDetailTitle}>{props.title}</div>
        <div className={styles.menuDetailPrice}>{props.price}</div>
      </div>
    </div>
  );
}
