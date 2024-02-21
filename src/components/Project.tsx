import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Project.module.css";

type Props = {
  src: string;
  title: string;
  description: string;
  projectLink: string;
  githubLink: string;
  about?: string;
};

export default function Project({
  src,
  title,
  description,
  projectLink,
  githubLink,
  about,
}: Props) {
  return (
    <section
      className={`border w-[400px] hover:border-blue-600 rounded-md p-4`}
    >
      <div className=" rounded-md">
        {src && (
          <Image
            className="w-full rounded-md"
            src={`/${src}`}
            width={280}
            height={400}
            sizes="100vw"
            alt="picture"
          />
        )}
        <div className={styles.wrapper}>
          <h3 className="my-2 text-lg font-bold text-left">{title}</h3>
          <p className=" text-left my-2">{about}</p>
          <p>{description}</p>
          <div className="flex mt-2 gap-2">
            <button className="text-blue-400  underline hover:text-blue-500">
              {projectLink != "" && (
                <Link href={projectLink} target="_blank">
                  Live Demo
                </Link>
              )}
            </button>
            <button className=" text-blue-400 underline hover:text-blue-500">
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
