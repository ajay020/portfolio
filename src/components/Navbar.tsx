import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 py-4 px-6 fixed top-0 w-full z-50 shadow-lg shadow-gray-500/50">
      <div className="flex items-center justify-between">
        <Link
          href="#home"
          scroll={false}
          className="text-2xl font-bold text-white"
        >
          Ajay
        </Link>

        <div className="hidden lg:flex space-x-4">
          <Link
            scroll={false}
            href="#home"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Home
          </Link>
          <Link
            scroll={false}
            href="#skills"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Skills
          </Link>
          <Link
            scroll={false}
            href="#projects"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Projects
          </Link>
        </div>

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
              <Link
                scroll={false}
                href="#home"
                className="text-white hover:text-gray-300 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                scroll={false}
                href="#skills"
                className="text-white hover:text-gray-300 transition duration-300"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                scroll={false}
                href="#projects"
                className="text-white hover:text-gray-300 transition duration-300"
              >
                Projects
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
