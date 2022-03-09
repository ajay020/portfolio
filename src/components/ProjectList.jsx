import Project from "./Project";

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
        <Project title="Blog App" />
        <Project title="MoodTracker App" />
        <Project title="Ecommarce app" />
        <Project title="Todo" />
        <Project title="Calculator" />
      </section>
    </div>
  );
};

export default ProjectList;
