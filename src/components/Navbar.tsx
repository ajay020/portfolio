import { useState } from "react";
import Link from "next/link";

import { motion } from "framer-motion";
import NavLink from "./NavLink";
import Sidebar from "./Sidebar";

const navItems = ["Home", "Skills", "Projects"];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Home");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      <nav
        className="bg-gray-800 py-4
     px-6 md:px-12 fixed top-0 w-full
      z-30 shadow-lg shadow-gray-500/50"
      >
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
              <li
                onClick={() => setSelectedItem(item)}
                className={""}
                key={item}
              >
                <NavLink text={item} />
                {item === selectedItem ? (
                  <motion.div
                    className="w-full border-2 border-sky-600"
                    layoutId="underline"
                  />
                ) : null}
              </li>
            ))}
            <li>
              <Link
                target="blank"
                href={"https://ajay020.hashnode.dev/"}
                className="text-white hover:text-gray-300 transition duration-300"
              >
                Blogs
              </Link>
            </li>
          </ul>

          <motion.button
            className="text-white focus:outline-none lg:hidden"
            onClick={toggleMenu}
            initial={{ opacity: 0 }} // Initial opacity of the cross icon
            animate={{ opacity: 1 }} // Animates the opacity to 1
            transition={{ duration: 0.3 }} // Sets the transition duration to 0.3 seconds
          >
            {!isMenuOpen ? (
              <motion.svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <motion.path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                  initial={{ pathLength: 0, rotate: -60 }} // Initial path length of the icon
                  animate={{ pathLength: 1, rotate: 0 }} // Animates the path length to 1
                  transition={{ duration: 0.3 }} // Sets the transition duration to 0.3 seconds
                />
              </motion.svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <motion.path
                  d="M18 6L6 18M6 6l12 12"
                  initial={{ opacity: 0, rotate: -60 }} // Initial opacity of the cross icon
                  animate={{ opacity: 1, rotate: 0 }} // Animates the opacity to 1
                  transition={{ duration: 0.3 }} // Sets the transition duration to 0.3 seconds
                />
              </svg>
            )}
          </motion.button>
        </div>
      </nav>
      <Sidebar isOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </div>
  );
};

export default Navbar;
