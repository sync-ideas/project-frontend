import React from "react";
import Link from "next/link";

interface LinkProps {
    link: string;
    text: string;
    decorationColor: string;
    textColor: string;
}

const LinkComponent: React.FC<LinkProps> = (props) => {
    const textColor = `text-${props.textColor}`;
    const decorationColor = `hover:decoration-${props.decorationColor}`;

    return (
        <Link
            className={`text-base leading-snug hover:text-purple-dark hover:underline-offset-4 hover:underline hover:decoration-4 transition-all duration-300 font-sans ${textColor} ${decorationColor}`}
            href={props.link}
        >
            {props.text}
        </Link>
    );
};

export default LinkComponent;
