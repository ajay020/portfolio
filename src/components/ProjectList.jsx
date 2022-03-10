import Project from "./Project";
import { FaGithub } from "react-icons/fa";
import { porjects } from "./../data";

const ProjectList = () => {
  return (
    <div className="container">
      <h3 className="text-center text-white my-4">
        <a href="https://github.com/ajay020?tab=repositories" target="_blank">
          {" "}
          Projects <FaGithub />
        </a>
      </h3>
      <section
        className="
        container
        d-flex 
        justify-content-center
        flex-wrap"
      >
        {porjects.map(({ title, image, webLink }) => (
          <Project key={title} title={title} image={image} webLink={webLink} />
        ))}
      </section>
    </div>
  );
};

export default ProjectList;
