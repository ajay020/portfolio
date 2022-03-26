import img from "../images/1.jpg";

const Project2 = ({ image, title, webLink }) => {
  return (
    <div style={{ height: "90vh" }} className="row my-0   w-100">
      <div
        className="col-sm-7
        p-0
      d-flex 
      align-items-center
      justify-content-center
      "
      >
        <img
          src={image}
          alt=""
          className="border"
          style={{
            width: "100%",
            height: "70%",
          }}
        />
      </div>
      <div
        className="
             col-sm-5
             d-flex
             align-items-center
             justify-content-center
            "
      >
        <div class="card bg-light-gray text-white ">
          <div class="card-body ms-5">
            <h5 class="card-title">{title}</h5>
            <p class="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a
              href={webLink}
              target="_blank"
              role="button"
              class="btn btn-outline-dark text-white bg-orange"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project2;
