import Link from "next/link";
import React from "react";

type PropType = {
  text: string;
};

function NavLink({ text }: PropType) {
  return (
    <Link
      scroll={false}
      href={`#${text.toLocaleLowerCase()}`}
      className="text-white hover:text-gray-300 transition duration-300"
    >
      {text}
    </Link>
  );
}

export default NavLink;
