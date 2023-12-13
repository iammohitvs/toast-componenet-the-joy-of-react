import { useEffect } from "react";

function useKeyDown(keyType, handleKeyDownFunction) {
    useEffect(() => {
        function handleKeyDown(event) {
            if (event.code === keyType) {
                handleKeyDownFunction();
            }
        }

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []); //eslint-disable-line
    //reason: no dependancies given
}

export default useKeyDown;
