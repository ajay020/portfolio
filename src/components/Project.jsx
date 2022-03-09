import img from "../images/1.jpg";

const Project = ({ image, title }) => {
  return (
    <>
      <div className="m-2 text-center card">
        <div className="card-header m-0 p-0v bg-primary">
          <p className="fw-bold card-title  text-white">{title}</p>
        </div>
        <div className="card-body bg-success p-0">
          <a href="#" className="d-block">
            <img
              src={image ? image : img}
              className="img-fluid img-thumbnail"
              style={{ width: "320px", height: "320px" }}
              alt=""
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Project;
