import { motion } from "framer-motion";
import NavLink from "./NavLink";

interface PropType {
  isOpen: boolean;
  toggleMenu: () => void;
}

const navItems = ["Home", "Skills", "Projects"];

const Sidebar = ({ isOpen, toggleMenu }: PropType) => {
  return (
    <motion.div
      onClick={toggleMenu}
      className="bg-black
       bg-opacity-50
       transparent
       fixed
       top-16
       bottom-0
       w-full
         h-screen
        z-50 lg:hidden"
      initial={{ x: "-100%" }}
      animate={{ x: isOpen ? "0%" : "-100%" }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className={`bg-gray-700
         
         px-6 py-8 w-1/2  h-screen `}
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
        transition={{ duration: 0.3 }}
      >
        <ul className="flex flex-col space-y-4">
          {navItems.map((item) => (
            <li onClick={toggleMenu} key={item}>
              <NavLink text={item} />
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default Sidebar;
