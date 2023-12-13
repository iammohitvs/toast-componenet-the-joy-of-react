import React, { useContext } from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastStateContext } from "../ToastProvider/ToastProvider";

function ToastShelf() {
    const { toasts, setToasts } = useContext(ToastStateContext);

    return (
        <ol
            className={styles.wrapper}
            role="region"
            aria-live="polite"
            aria-label="Notification"
        >
            {toasts.map(({ variant, message, id }) => (
                <li className={styles.toastWrapper} key={id}>
                    <Toast variant={variant} message={message} id={id} />
                </li>
            ))}
        </ol>
    );
}

export default ToastShelf;
