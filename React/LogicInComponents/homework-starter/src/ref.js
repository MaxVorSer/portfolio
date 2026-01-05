import { useEffect } from "react";

export function useAutoFocus(ref) {
    useEffect(() => {
        if (ref.current) {
            ref.current.focus();
        }
    }, [ref]);
}