import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faReact,
  faHtml5,
  faJs,
  faGit,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import styles from "../styles/Skills.module.css";
import { faDatabase, faExpand } from "@fortawesome/free-solid-svg-icons";

export default function Skills() {
  return (
    <div className={styles.skills}>
      <h2>Skills</h2>
      <ul>
        <li>
          <span>JavaScript</span>
          <FontAwesomeIcon icon={faJs} size="lg" style={{ color: "#f2d518" }} />
        </li>
        <li>
          <span>HTML</span>
          <FontAwesomeIcon
            icon={faHtml5}
            size="lg"
            style={{ color: "#f21f18" }}
          />
        </li>
        <li>
          <span>CSS</span>
          <FontAwesomeIcon
            icon={faCss3}
            size="lg"
            style={{ color: "#eef218" }}
          />
        </li>
        <li>
          <span>ReactJs</span>
          <FontAwesomeIcon
            icon={faReact}
            size="lg"
            style={{ color: "#3cbff4" }}
          />
        </li>
        <li>
          <span>Nodejs</span>
          <FontAwesomeIcon
            icon={faNodeJs}
            size="lg"
            style={{ color: "#3cf451" }}
          />
        </li>
        <li>
          <span>Express</span>
          <FontAwesomeIcon
            icon={faExpand}
            size="lg"
            style={{ color: "#ab0606" }}
          />
        </li>
        <li>
          <span>MongoDB</span>
          <FontAwesomeIcon
            icon={faDatabase}
            size="lg"
            style={{ color: "#0ac620" }}
          />
        </li>
      </ul>
    </div>
  );
}
