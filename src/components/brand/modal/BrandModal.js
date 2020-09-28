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
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "#fff",
        padding: 0,
        WebkitOverflowScrolling: "touch",
        outline: "none",
        width: "640px",
        height: "650px",
        boxShadow: "rgba(0, 0, 0, 0.16)",
        boxSizing: "border-box",
        borderRadius: "20px",
        display: "flex",
        border: "none",
    },
};
ReactModal.setAppElement("#root");

function BrandModal() {
    const { data, isOpen, setModalClose } = useContext(ModalContext);
    return (
        <ReactModal
            isOpen={isOpen}
            style={modalStyle}
            bodyOpenClassName="menu-modal-open"
            onRequestClose={() => setModalClose()}
        >
            <div
                className="position-relative"
                style={{ flexGrow: 1, flexBasis: 0 }}
            >
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
                        <img
                            src={data.image}
                            alt="brand"
                            className="img-fluid"
                        />
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
