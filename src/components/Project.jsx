import img from "../images/1.jpg";

const Project = ({ image, title, webLink }) => {
  return (
    <>
      <div className="m-2 text-center card project_card">
        <div className="card-header m-0 p-0v bg-lighter-gray">
          <p className="fw-bold card-title">{title}</p>
        </div>
        <div className="card-body bg-success p-0">
          <a href={webLink} className="d-block" target="_blank">
            <img
              src={image}
              className="img-fluid"
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
