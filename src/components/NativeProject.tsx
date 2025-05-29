import React from "react";

import {
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import Carousel from "./Carousel";
import styles from "../styles/NativeProject.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Project = {
  id: string;
  title: string;
  images: string[];
  techStack: string;
  projectLink: string;
  githubLink: string;
  about: string
};

type ProjectProps = {
  project: Project;
};

const NativeProject = ({ project }: ProjectProps) => {
  return (
    <div className={`flex flex-col  border  p-4 ${styles.container}`}>
      <div className="my-4 flex flex-col gap-2">
        <Link href={project.githubLink} className="flex items-center gap-2 text-blue-600 underline hover:text-blue-800 transition-colors">
          <h3 className="text-lg fw-800">
            {project.title}
          </h3>
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </Link>
        <p>{project.about}</p>
        <p> <span className={"font-bold"}>Tech Stack:</span> {project.techStack}</p>

      </div>

      <Carousel images={project.images} />
    </div>
  );
};

export default NativeProject;
