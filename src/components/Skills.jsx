import { skills } from "../data";

const Skills = () => {
  return (
    <div
      id="skills"
      className="container row d-flex align-items-center"
      style={{ height: "50vh" }}
    >
      <div
        className="
            col-sm-6
            d-flex
            flex-wrap
            align-content-center 
        "
      >
        <h5 className="text-white">My Skills</h5>

        <div
          className="card p-4 
            bg-light-gray
            border 
            d-flex
            flex-wrap
            flex-row 
            align-content-center"
        >
          {skills.map((skill) => (
            <span
              key={skill}
              className="bg-dark rounded d-block text-white py-1 px-2 m-1"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
      <div className="col-sm-6 d-flex align-items-center justify-content-center ">
        <p className="text-white  p-2  ">
          I'm open to Job opportunities where I can contribute, learn and grow.
          If you have a good opportunity that matches my skills and experience
          then you can contact me.
        </p>
      </div>
    </div>
  );
};

export default Skills;
