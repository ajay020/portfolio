import React, { useState } from "react";

import ProjectList from "./ProjectList";
import styles from "../styles/ProjectTabs.module.css";
import { ReactNativeProjectList } from "./ReactNativeProjectList";

function ProjectTabs() {
  const [activeTab, setActiveTab] = useState("MobileProject");

  const handleTabChange = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <section id="projects" className={styles.projectTab}>
      <h2>Projects</h2>
      <div
        className={`p-5  flex space-x-4 justify-center ${styles.tab_container}`}
      >
        <button
          className={`tabBtn focus:outline-none ${
            activeTab === "MobileProject"
              ? " border-b-4 border-blue-600 text-white"
              : "text-gray-500"
          }  ${styles.tabBtn}`}
          onClick={() => handleTabChange("MobileProject")}
        >
          Mobile Project
        </button>

        <button
          className={` focus:outline-none ${
            activeTab === "WebProject"
              ? "  border-b-4 border-blue-600 text-white"
              : " text-gray-500"
          }  ${styles.tabBtn}`}
          onClick={() => handleTabChange("WebProject")}
        >
          Web Project
        </button>
      </div>

      <div className="tab-content">
        {activeTab === "WebProject" && (
          <div>
            <ProjectList />
          </div>
        )}
        {activeTab === "MobileProject" && (
          <div>
            <ReactNativeProjectList />
          </div>
        )}
      </div>
    </section>
  );
}

export default ProjectTabs;
