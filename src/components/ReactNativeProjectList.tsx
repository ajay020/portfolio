import React from "react";

import { nativeProjectData } from "@/util/nativeProjectData";

import NativeProject from "./NativeProject";
import styles from "../styles/ProjectList.module.css";

export const ReactNativeProjectList = () => {
  return (
    <div className={styles.project_list}>
      {/* <h2>Mobile Projects</h2> */}
      <div className="flex flex-col">
        {nativeProjectData.map((project) => (
          <NativeProject key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};
