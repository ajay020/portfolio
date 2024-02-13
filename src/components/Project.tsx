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
    <section className={`border w-[400px] rounded-md p-4`}>
      <div className=" rounded-md">
        <Image
          className="w-full rounded-md"
          src={`/${src}`}
          width={280}
          height={400}
          sizes="100vw"
          alt="picture"
        />
        <div className={styles.wrapper}>
          <h3 className="my-4 m-4 text-left">{title}</h3>

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
      </div>
    </section>
  );
}
