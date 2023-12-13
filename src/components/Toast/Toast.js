import React, { useContext } from "react";
import {
    AlertOctagon,
    AlertTriangle,
    CheckCircle,
    Info,
    X,
} from "react-feather";

import VisuallyHidden from "../VisuallyHidden";
import { ToastStateContext } from "../ToastProvider/ToastProvider";

import styles from "./Toast.module.css";

const ICONS_BY_VARIANT = {
    notice: Info,
    warning: AlertTriangle,
    success: CheckCircle,
    error: AlertOctagon,
};

function Toast({ variant, message, id }) {
    const { toasts, setToasts } = useContext(ToastStateContext);
    const Tag = ICONS_BY_VARIANT[variant];

    return (
        <div className={`${styles.toast} ${styles[variant]}`}>
            <div className={styles.iconContainer}>
                <Tag size={24} />
            </div>
            <p className={styles.content}>
                <VisuallyHidden>{variant}</VisuallyHidden>
                {message}
            </p>
            <button
                className={styles.closeButton}
                aria-label="Dismiss message"
                aria-live="off"
            >
                <X
                    size={24}
                    onClick={() => {
                        const newToasts = toasts.filter((toast) => {
                            return toast.id !== id;
                        });
                        setToasts(newToasts);
                    }}
                />
                <VisuallyHidden>Dismiss message</VisuallyHidden>
            </button>
        </div>
    );
}

export default Toast;
