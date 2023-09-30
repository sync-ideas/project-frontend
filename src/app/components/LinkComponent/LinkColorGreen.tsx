import React from "react";
import Link from "next/link";

interface LinkProps {
    link: string;
    text: string;
}

const LinkComponent: React.FC<LinkProps> = (props) => {
    return (
        <Link
            className="text-base leading-snug text-purple-disabled hover:text-purple-dark hover:underline-offset-4 hover:underline hover:decoration-green hover:decoration-4 transition-all duration-300 font-sans"
            href={props.link}
        >
            {props.text}
        </Link>
    );
};

export default LinkComponent;
