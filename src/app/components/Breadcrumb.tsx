import Link from "next/link";
import React from "react";
import LinkComponent from "./LinkComponent/LinkComponentCustom";
import BreadcrumbLinkComponent from "./LinkComponent/BreadcrumbLink";

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
            <BreadcrumbLinkComponent
              link={link.hiper}
              textColor="purple-disabled"
              textColorHover="purple-text"
              text={link.text}
              active={links.indexOf(link) === actual}
            />
            {links.indexOf(link) !== actual && " / "}
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
