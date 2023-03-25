import Project from "./Project";

import styles from "../styles/ProjectList.module.css";
import { projectData } from "../util/data";

export default function ProjectList() {
  return (
    <div className={styles.project_list}>
      <h2>Projects</h2>
      {projectData.map((p) => (
        <Project
          key={p.id}
          src={p.imgSrc}
          title={p.title}
          description={p.description}
          projectLink={p.projectLink}
        />
      ))}
    </div>
  );
}
