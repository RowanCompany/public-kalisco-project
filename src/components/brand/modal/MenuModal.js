import React, { useContext } from "react";
import ReactModal from "react-modal";
import { ModalContext } from "../modal/modal-context";
import styles from "./modal.module.scss";

const modalStyle = {
    overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 400,
    },
    content: {
        position: "absolute",
        top: "50%",
        left: "70%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "#fff",
        WebkitOverflowScrolling: "touch",
        outline: "none",
        padding: "40px",
        width: "800px",
        height: "560px",
        borderRadius: 0,
        boxShadow: "rgba(0, 0, 0, 0.16)",
    },
};
ReactModal.setAppElement("#root");

function MenuModal() {
    const { data, isOpen, setModalClose } = useContext(ModalContext);
    return (
        <ReactModal
            isOpen={isOpen}
            style={modalStyle}
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
                    <div className={styles.normalTitle}>
                        {data && data.title}
                    </div>
                    <div className={styles.enTitle}>{data && data.enTitle}</div>
                </div>
                <div className={styles.price}>{data && data.price}</div>
            </div>
            <div className={styles.description}>{data && data.description}</div>
            {data && data["image"] && (
                <div className={styles.imageBackgroundWrapper}>
                    <img
                        src={data.image}
                        alt={data.title}
                        className="img-fluid"
                    />
                </div>
            )}
        </ReactModal>
    );
}

export default MenuModal;
