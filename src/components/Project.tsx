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
    <section className={styles.project}>
      <h3 className="my-4 m-4">{title}</h3>
      <div className={styles.wrapper}>
        <Image
          className=" w-full h-auto"
          src={`/${src}`}
          width={0}
          height={0}
          sizes="100vw"
          alt="picture"
        />
        <div className={styles.project_des}>
          <p>Tech Stack: {description}</p>
          <button>
            <Link href={projectLink} target="_blank">
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
