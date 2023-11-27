import React from "react";
import Link from "next/link";

interface LinkProps {
  link: string;
  text: string;
  decorationColor?: string;
  textColor: string;
  textColorHover: string;
  active: boolean;
}

const BreadcrumbLinkComponent: React.FC<LinkProps> = (props) => {
  const textColor = `text-${props.textColor}`;
  const decorationColor = `${
    props.active
      ? ""
      : props.decorationColor
      ? `hover:decoration-${props.decorationColor} hover:underline-offset-4  hover:underline hover:decoration-4`
      : "hover:decoration-green hover:underline-offset-4  hover:underline hover:decoration-4"
  }`;
  const textColorHover = `hover:text-${props.textColorHover}`;
  const linkActive = `${props.active ? `font-bold cursor-default` : ``}`;

  return (
    <Link
      className={`text-base leading-snug  transition-all duration-300 ${textColor} ${decorationColor} ${textColorHover} ${linkActive}`}
      href={props.active ? "#" : props.link}
    >
      {props.text}
    </Link>
  );
};

export default BreadcrumbLinkComponent;
