import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faReact,
  faHtml5,
  faJs,
  faAndroid,
  faGit,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faExpand } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Skills.module.css";

const Skills: React.FC = () => {
  return (
    <section id="skills" className={`${styles.skills} my-4`}>
      <h2 className="text-3xl font-bold">Skills</h2>
      <div className={`
        my-12 flex gap-4 p-12 border
          flex justify-center w-1/2 
          m-auto`}>
        <div>
          <SkillItem name="Android" icon={faAndroid} color="#0ac620" />
          <SkillItem name="React" icon={faReact} color="#3cbff4" />
          <SkillItem name="React Native" icon={faReact} color="#3cbff4" />
        </div>
        <div>
          <SkillItem name="JavaScript" icon={faJs} color="#f2d518" />
          <SkillItem name="HTML" icon={faHtml5} color="#f21f18" />
          <SkillItem name="CSS" icon={faCss3} color="#eef218" />
        </div>

        <div>
          <SkillItem name="Node.js" icon={faNodeJs} color="#3cf451" />
          <SkillItem name="Express" icon={faExpand} color="#ab0606" />
          <SkillItem name="MongoDB" icon={faDatabase} color="#0ac620" />
        </div>

      </div>
    </section>
  );
};

interface SkillItemProps {
  name: string;
  icon: any; // You might want to define a type for icon
  color: string;
}

const SkillItem: React.FC<SkillItemProps> = ({ name, icon, color }) => {
  return (
    <div className={styles.skill_list_item}>
      <span className="text-sm pr-2">{name}</span>
      <FontAwesomeIcon icon={icon} size="lg" style={{ color }} />
    </div>
  );
};

export default Skills;
