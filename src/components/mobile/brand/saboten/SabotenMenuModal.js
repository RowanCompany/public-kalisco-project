import React, { useContext } from "react";
import ReactModal from "react-modal";
import { ModalContext } from "../../../brand/modal/modal-context";
import styles from "./modal.module.scss";

ReactModal.setAppElement("#root");

export default function SabotenMenuModal() {
  const { data, isOpen, setModalClose } = useContext(ModalContext);
  return (
    <ReactModal
      isOpen={isOpen}
      overlayClassName={styles.menuOverlayWrapper}
      className={styles.menuContentWrapper}
      bodyOpenClassName="menu-modal-open"
      onRequestClose={() => setModalClose()}
    >
      <div className={styles.closeButtonWrapper}>
        <button
          type="button"
          className={styles.close}
          onClick={() => setModalClose()}
        >
          &times;
        </button>
      </div>
      <div className={styles.titleLayerWrapper}>
        <div className={styles.titleWrapper}>
          <div className={styles.normalTitle}>{data && data.title}</div>
          <div className={styles.price}>{data && data.price}</div>
          <div className={styles.enTitle}>{data && data.enTitle}</div>
        </div>
      </div>
      <div className={styles.description}>{data && data.description}</div>
      {data && data["image"] && (
        <div className={styles.imageBackgroundWrapper}>
          <img src={data.image} alt={data.title} className="img-fluid" />
        </div>
      )}
    </ReactModal>
  );
}
