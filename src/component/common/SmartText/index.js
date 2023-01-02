import React from "react";

const SmartText = ({name, text, length, styleClass}) => {
    const [showLess, setShowLess] = React.useState(true);

    if (text.length < length) {
        return <p className={styleClass}>{text}</p>;
    }

    return (
        <div>
            <p className={styleClass}>{showLess ? `${text.slice(0, length)}...` : text}</p>
            <span className="viewMoreText" onClick={() => setShowLess(!showLess)}>
                {name ? name : "Read"} {" "}{showLess ? "More" : "Less"}
            </span>
        </div>
    );
};
export default SmartText;
