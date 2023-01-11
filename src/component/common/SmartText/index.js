import React from "react";

const SmartText = ({name="", text, length, styleClass}) => {
    const [showLess, setShowLess] = React.useState(true);

    if (text.length < length) {
        return <p className={styleClass}>{text}</p>;
    }

    return (
        <div>
            <p className={styleClass}>
                <span>{showLess ? `${text.slice(0, length)}...` : text}</span>
                <span className="text-blue-274 cursor-pointer whitespace-nowrap" onClick={() => setShowLess(!showLess)}>
                {name ? name : "Read"} {" "}{showLess ? "More" : "Less"}
                </span>
            </p>
        </div>
    );
};
export default SmartText;
