import { useState } from "react";
import Link from "next/link";

import { motion } from "framer-motion";
import NavLink from "./NavLink";

const navItems = ["Home", "Skills", "Projects"];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Home");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 py-4 px-6 md:px-12 fixed top-0 w-full z-50 shadow-lg shadow-gray-500/50">
      <div className="flex items-center justify-between">
        <Link
          href="#home"
          scroll={false}
          className="text-2xl font-bold text-white"
        >
          Ajay
        </Link>

        <ul className="hidden lg:flex space-x-4">
          {navItems.map((item) => (
            <li onClick={() => setSelectedItem(item)} className={""} key={item}>
              <NavLink text={item} />
              {item === selectedItem ? (
                <motion.div
                  className="w-full border-2 border-sky-600"
                  layoutId="underline"
                />
              ) : null}
            </li>
          ))}
        </ul>

        <button
          className="text-white focus:outline-none lg:hidden"
          onClick={toggleMenu}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="mt-4 lg:hidden">
          <ul className="flex flex-col space-y-4">
            <li>
              <NavLink text="Home" />
            </li>
            <li>
              <NavLink text="Skills" />
            </li>
            <li>
              <NavLink text="Projects" />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
