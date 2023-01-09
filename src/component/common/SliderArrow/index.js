import SvgIcon from "../../../constant/SvgIcon";

export function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <SvgIcon.SLeftArrow
            className={className}
            style={{ ...style, height: "unset", width: "unset", scale: "0.6"}}
            onClick={onClick}
        />
    );
}
  
export function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <SvgIcon.SRightArrow
            className={className}
            style={{ ...style, height: "unset", width: "unset", scale: "0.6"}}
            onClick={onClick}
        />
    );
}