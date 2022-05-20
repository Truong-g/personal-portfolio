

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './button.css'



const Button = ({
    to,
    onClick,
    onSubmit,
    href,
    title,
    size = "",
    icon,
    type = "default",
    isActive = false,
    ...passProps
}) => {

    const [width, setWidth] = useState(window.innerWidth)

    const IconComp = icon
    let Comp = 'button'

    const props = {
        onClick,
        onSubmit,
        ...passProps

    }

    if (!!to) {
        Comp = Link
        props.to = to
    } else if (!!href) {
        Comp = 'a'
        props.href = href
        props.target = "_blank"
    }

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
        }

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])


    return (
        <Comp

            className={
                `btn btn-${size ? size : (width <= 992 ? "small" : "medium")}
                ${type === "solid" ? "btn-solid" : ""}`
            }
            {...props}
        >
            {
                title && (
                    <span className="btn-title">
                        {title}
                    </span>
                )
            }
            <span className={`btn-icon flex-center ${isActive ? "active" : ""}`}>
                {<IconComp />}
            </span>
        </Comp>
    );
}

export default Button;
