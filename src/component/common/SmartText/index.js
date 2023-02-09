import React from "react";

const SmartText = ({name="", text, length, styleClass}) => {
    const [showLess, setShowLess] = React.useState(true);

    if (text.length < length) {
        return <p className={styleClass}>{text}</p>;
    }

    return (
            <p className={styleClass}>
                {showLess ? `${text.slice(0, length)}...` : text}
                <span className="text-blue-274 font-bold cursor-pointer whitespace-nowrap ml-2" onClick={() => setShowLess(!showLess)}>
                {name ? name : "Read"} {" "}{showLess ? "More" : "Less"}
                </span>
            </p>
    );
};
export default SmartText;
