import React from "react";
import Link from "next/link";

interface LinkProps {
  link: string;
  text: string;
  decorationColor: string;
  textColor: string;
  textColorHover: string;
}

const LinkComponent: React.FC<LinkProps> = (props) => {
  return (
    <Link
      className={`text-base leading-snug hover:underline-offset-4 hover:underline hover:decoration-4 transition-all duration-300 ${props.textColor} ${props.decorationColor} ${props.textColorHover}`}
      href={props.link}
    >
      {props.text}
    </Link>
  );
};

export default LinkComponent;
