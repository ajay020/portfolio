import { skills } from "../data";

const Skills = () => {
  return (
    <div id="skills" className="container row" style={{ height: "50vh" }}>
      <div
        className="
            col-sm-6
            d-flex
            flex-wrap
            align-content-center 
        "
      >
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
        <h4 className="text-white">My Skills</h4>
      </div>
    </div>
  );
};

export default Skills;
