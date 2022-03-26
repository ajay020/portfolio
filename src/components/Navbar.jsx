const Navbar = () => {
  return (
    <nav class="navbar navbar-expand navbar-dark bg-light-gray mx-5">
      <div class="container">
        <a class="navbar-brand" href="#navbarNav">
          AJAY
        </a>
        <div class="" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#header">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#skills">
                SKILLS
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#projects">
                PROJECTS
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
