import Link from "next/link";
import React from "react";
import LinkComponent from "./LinkComponent/LinkComponentCustom";

interface BreadcrumbProps {
  links: Array<{ hiper: string; text: string }>;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ links }) => {
  const actual = links.length - 1;
  return (
    <div>
      {links.map((link) => {
        return (
          <span key={links.indexOf(link)}>
            <LinkComponent
              link={link.hiper}
              decorationColor="green"
              textColor="purple-disabled"
              textColorHover="purple"
              text={link.text}
            />
            {links.indexOf(link) !== actual && " / "}
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
