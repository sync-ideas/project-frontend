import React from "react";
import Link from "next/link";

interface LinkProps {
    link: string;
    text: string;
}

const LinkComponent: React.FC<LinkProps> = (props) => {
    return (
        <Link
            className={`text-base leading-6 text-text-disable hover:text-text-purple-dark hover:underline-offset-4 hover:underline hover:decoration-orange-basic hover:decoration-4 transition-all duration-300`}
            href={props.link}
        >
            {props.text}
        </Link>
    );
};

export default LinkComponent;
