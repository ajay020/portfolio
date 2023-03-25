import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Project.module.css";

type Props = {
  src: string;
  title: string;
  description: string;
  projectLink: string;
};

export default function Project({
  src,
  title,
  description,
  projectLink,
}: Props) {
  return (
    <div className={styles.project}>
      <h3>{title}</h3>
      <div className={styles.wrapper}>
        <Image src={`/${src}`} width={900} height={500} alt="picture" />
        <div className={styles.project_des}>
          <p>{description}</p>
          <button>
            <Link href={projectLink} target="_blank">
              {" "}
              Live Demo
            </Link>
          </button>
          <button>GitHub Link</button>
        </div>
      </div>
    </div>
  );
}
