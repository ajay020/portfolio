import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Project.module.css";

type Props = {
  src: string;
  title: string;
  description: string;
  projectLink: string;
  githubLink: string;
};

export default function Project({
  src,
  title,
  description,
  projectLink,
  githubLink,
}: Props) {
  return (
    <section id="projects" className={styles.project}>
      <h3>{title}</h3>
      <div className={styles.wrapper}>
        <Image
          className={styles.image}
          src={`/${src}`}
          width={820}
          height={500}
          alt="picture"
        />
        <div className={styles.project_des}>
          <p>{description}</p>
          <button>
            <Link href={projectLink} target="_blank">
              {" "}
              Live Demo
            </Link>
          </button>
          <button>
            <Link href={githubLink} target="_blank">
              GitHub Link
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
}
