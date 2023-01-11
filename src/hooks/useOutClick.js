import React, { useRef, useEffect, useCallback } from "react";
function useOutsideAlerter(ref, setOpen) {
    const handleClickOutside = useCallback((event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setOpen(false);
        }
    },[setOpen, ref]);

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [handleClickOutside]);
}
export default function OutsideClick(props) {
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, props?.setOpen);
    return <div ref={wrapperRef} style={{ position: "relative" }}>{props?.children}</div>;
}
