import React, { useContext, useState } from "react";

import Button from "../Button";
import ToastShelf from "../ToastShelf/ToastShelf";
import { ToastStateContext } from "../ToastProvider/ToastProvider";

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
    const {toasts, setToasts} = useContext(ToastStateContext)

    const [message, setMessage] = useState("");
    const [variant, setVarient] = useState("notice");

    return (
        <div className={styles.wrapper}>
            <header>
                <img alt="Cute toast mascot" src="/toast.png" />
                <h1>Toast Playground</h1>
            </header>

            <ToastShelf/>

            <div className={styles.controlsWrapper}>
                <form
                    onSubmit={(event) => {
                        event.preventDefault()
                        let newToasts = [
                            ...toasts,
                            {
                                variant,
                                message,
                                id: crypto.randomUUID(),
                            },
                        ];
                        setToasts(newToasts);
                        setMessage("");
                        setVarient("notice");
                    }}
                >
                    <div className={styles.row}>
                        <label
                            htmlFor="message"
                            className={styles.label}
                            style={{ alignSelf: "baseline" }}
                        >
                            Message
                        </label>
                        <div className={styles.inputWrapper}>
                            <textarea
                                id="message"
                                className={styles.messageInput}
                                value={message}
                                onChange={(event) => {
                                    setMessage(event.target.value);
                                }}
                            />
                        </div>
                    </div>

                    <div className={styles.row}>
                        <div className={styles.label}>Variant</div>
                        <div
                            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
                        >
                            {VARIANT_OPTIONS.map((vari, index) => (
                                <label
                                    htmlFor={`variant-notice-${vari}`}
                                    key={index}
                                >
                                    <input
                                        id={`variant-notice-${vari}`}
                                        type="radio"
                                        name="variant"
                                        value={vari}
                                        checked={vari === variant}
                                        onChange={(event) => {
                                            setVarient(event.target.value);
                                        }}
                                    />
                                    {vari}
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className={styles.row}>
                        <div className={styles.label} />
                        <div
                            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
                        >
                            <Button>Pop Toast!</Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ToastPlayground;
