import React, { createContext, useState } from "react";

import useKeyDown from "../../hooks/useKeyDown";

export const ToastStateContext = createContext();

function ToastProvider({ children }) {
    const [toasts, setToasts] = useState([]);

    let value = { toasts, setToasts };

    function handleEscapeKeyDown() {
        setToasts([]);
    }

    useKeyDown("Escape", handleEscapeKeyDown);

    return (
        <ToastStateContext.Provider value={value}>
            {children}
        </ToastStateContext.Provider>
    );
}

export default ToastProvider;
