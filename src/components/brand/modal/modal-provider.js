import React, { useState } from "react";
import { ModalContext } from "./modal-context";

export default function ModalProvider({ children }) {
    function setModalOpen(props) {
        setModal((prevState) => {
            return {
                ...prevState,
                isOpen: true,
                data: props,
            };
        });
    }

    function setModalClose() {
        setModal((prevState) => {
            return {
                ...prevState,
                isOpen: false,
            };
        });
    }

    const initialState = {
        isOpen: false,
        setModalOpen,
        setModalClose,
    };
    const [modal, setModal] = useState(initialState);

    return (
        <ModalContext.Provider value={modal}>{children}</ModalContext.Provider>
    );
}
