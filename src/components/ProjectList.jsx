import Project from "./Project";

import calculator from "../images/calculator.png";
import todo from "../images/todo.png";
import blog from "../images/blog.png";
import moodtracker from "../images/moodtracker.png";
import ecommarce from "../images/ecommarce.png";

const porjects = [
  {
    title: "Blog App",
    image: blog,
    webLink: "https://blogappajay.herokuapp.com/",
  },
  {
    title: "Moodtracker App",
    image: moodtracker,
    webLink: "#",
  },
  {
    title: "Calculator App",
    image: calculator,
    webLink: "#",
  },
  {
    title: "Ecommarce Store",
    image: ecommarce,
    webLink: "https://ecommarce-store-ajay.netlify.app/",
  },
  {
    title: "Todo App",
    image: todo,
    webLink: "https://ajay020.github.io/calculator",
  },
];

const ProjectList = () => {
  return (
    <div className="container">
      <h3 className="text-center my-4">My projects</h3>
      <section
        className="
        container
        d-flex 
        bg-secondary
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
