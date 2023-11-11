import Link from "next/link";
import React from "react";

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
            <Link
              href={link.hiper}
              className={`${
                links.indexOf(link) === actual
                  ? "font-bold hover:underline"
                  : "hover:underline"
              }`}
            >
              {link.text}
            </Link>
            {links.indexOf(link) !== actual && " / "}
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
