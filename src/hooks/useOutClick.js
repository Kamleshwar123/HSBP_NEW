import React, { useRef, useEffect } from "react";
function useOutsideAlerter(ref, setOpen) {
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setOpen(false);
            }
        }
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [ref]);
}
export default function OutsideClick(props) {
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, props?.setOpen);
    return <div ref={wrapperRef} style={{ position: "relative" }}>{props?.children}</div>;
}
