import Project from "./Project";

import styles from "../styles/ProjectList.module.css";
import { projectData } from "../util/data";

export default function ProjectList() {
  return (
    <div
      className={`flex 
      flex-wrap  gap-4  sm:w-[500px]
    justify-center
      md:w-[900px] m-auto pb-8`}
    >
      {/* <h2>Web Projects</h2> */}
      {projectData.map((p) => (
        <Project
          key={p.id}
          src={p.imgSrc}
          title={p.title}
          description={p.description}
          projectLink={p.projectLink}
          githubLink={p.githubLink}
        />
      ))}
    </div>
  );
}
