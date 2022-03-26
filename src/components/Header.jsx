const Header = () => {
  return (
    <header
      style={{ height: "100vh" }}
      className="
        container-fluid
        p-0  m-0
        d-flex
        bg-light-gray
        align-items-center 
        justify-content-center 
      "
    >
      <div className=" w-50 m-auto">
        <div className="card-body text-white">
          <p className="fw-bold p-0 m-0">
            <h1 className="fw-bold p-0 m-0"> Hi, I'm Ajay Kumar Meena.</h1>
            <p className="mt-3 mb-0"> I'm a web developer from </p>
            <p className=" mt-0">Dausa, Rajasthan.</p>
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
