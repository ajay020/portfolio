import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-light-gray mx-5">
      <div className="container">
        <a className="navbar-brand" href="#navbarNav">
          AJAY
        </a>
        <div className="" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#header">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://github.com/ajay020?tab=repositories"
                target="_blank"
              >
                Github link <FaGithub />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
