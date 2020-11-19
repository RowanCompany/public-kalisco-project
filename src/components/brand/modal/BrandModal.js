import React, { useContext } from "react";
import ReactModal from "react-modal";
import { ModalContext } from "./modal-context";
import styles from "./modal.module.scss";

function BrandModal() {
  ReactModal.setAppElement("#root");

  const { data, isOpen, setModalClose } = useContext(ModalContext);
  return (
    <ReactModal
      isOpen={isOpen}
      overlayClassName={styles.overlayWrapper}
      className={styles.contentWrapper}
      bodyOpenClassName="menu-modal-open"
      onRequestClose={() => setModalClose()}
    >
      <div className="position-relative" style={{ flexGrow: 1, flexBasis: 0 }}>
        <div
          className={`${styles.closeButtonWrapper} ${styles.brandModalWrapper}`}
        >
          <button
            type="button"
            className={`${styles.close} ${styles.white}`}
            onClick={() => setModalClose()}
          >
            &times;
          </button>
        </div>
        {data && (
          <div>
            <img src={data.image} alt="brand" className="img-fluid" />
          </div>
        )}
        <div className={styles.brandDescription}>
          {data && data.description}
        </div>
      </div>
    </ReactModal>
  );
}

export default BrandModal;
