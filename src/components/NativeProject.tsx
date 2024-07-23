import React from "react";

import Carousel from "./Carousel";
import styles from "../styles/NativeProject.module.css";

type Project = {
  id: string;
  title: string;
  images: string[];
  description: string;
  projectLink: string;
  githubLink: string;
  about: string
};

type ProjectProps = {
  project: Project;
};

const NativeProject = ({ project }: ProjectProps) => {
  return (
    <div className={`flex flex-col ${styles.container}`}>
      <div className="my-4 ">
        <h3 className="text-lg fw-800">{project.title}</h3>
        <p>Developed with: {project.description}</p>
        <p>{project.about}</p>

      </div>

      <Carousel images={project.images} />
    </div>
  );
};

export default NativeProject;
