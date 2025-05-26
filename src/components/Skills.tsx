import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faReact,
  faHtml5,
  faJs,
  faAndroid,
  faNodeJs,
  faGitlab,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faExpand } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Skills.module.css";

const Skills: React.FC = () => {
  return (
    <div className={`${styles.skills}`}>

      <section id="skills" className={`my-8 p-4 max-w-4xl mx-auto`}>
        <h2 className="text-3xl font-bold text-center mb-6">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-base leading-relaxed p-8  border border-gray-200">
          <div>
            <h3 className="text-xl font-semibold mb-2"> Android Development</h3>
            <ul className="list-disc list-inside">
              <li>Kotlin, Jetpack Compose, XML Layouts</li>
              <li>Coroutine, Flow</li>
              <li>MVVM Architecture, Hilt (Dependency Injection)</li>
              <li>Firebase (Authentication, Firestore), Room Database</li>
              <li>Android Studio, Git & GitHub</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2"> Web Development (Basic)</h3>
            <ul className="list-disc list-inside">
              <li>HTML, CSS, JavaScript</li>
              <li>React, Node.js, Express.js</li>
              <li>REST APIs, MongoDB</li>
            </ul>
          </div>
        </div>
      </section>
    </div>

  );
};

export default Skills;
