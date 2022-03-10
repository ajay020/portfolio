const Header = () => {
  return (
    <header className="container-fluid p-2 m-auto">
      <div className="card w-50 m-auto">
        <div className="card-body text-white bg-lighter-gray">
          <p className="fw-bold p-0 m-0">
            <p className="fw-bold p-0 m-0"> Hi, My name is Ajay.</p>
            <p className="fw-bold p-0 m-0"> I'm a web developer from </p>
            <p className="fw-bold p-0 m-0">Dausa, Rajasthan.</p>
          </p>
          <span className="mt-2 d-block">Skills: </span>
          <p>ReactJs, Redux, HTML, CSS, JavaScript, Nodejs, Express, MongoDB</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
