import { createContext } from "react";

export const defaultModalData = {
    isOpen: false,
    setModalOpen: () => {},
    setModalClose: () => {},
};

export const ModalContext = createContext(defaultModalData);
