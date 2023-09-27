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
};

type ProjectProps = {
  project: Project;
};

const NativeProject = ({ project }: ProjectProps) => {
  return (
    <div className={`flex flex-col items-center ${styles.container}`}>
      <h3 className="my-4 ">{project.title}</h3>
      <Carousel images={project.images} />
    </div>
  );
};

export default NativeProject;
