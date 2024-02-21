import Image from "next/image";
import styles from "../styles/Header.module.css";
import {
  faGithub,
  faGithubSquare,
  faHackerrank,
  faHashnode,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Header() {
  return (
    <section id="home" className={styles.header}>
      <div className={styles.header__info}>
        <h1 className="my-4 text-white">
          Hello there! <br />
          I&apos;m <span className={` ${styles.textAnimation1}`}>Ajay.</span>
        </h1>
        <p className="font-bold py-2 text-xl">I&apos;m a</p>

        <div>
          <h2 className={`leading-normal ${styles.textAnimation2}`}>
            technical writer and web developer.
          </h2>
        </div>
        <div className="mt-2 flex gap-3">
          <Link href="https://github.com/ajay020" target="_blank">
            <FontAwesomeIcon icon={faGithubSquare} size="lg" />
          </Link>
          <Link href="https://ajay020.hashnode.dev/" target="_blank">
            <FontAwesomeIcon icon={faHashnode} size="lg" />
          </Link>
          <Link
            href="https://www.hackerrank.com/profile/ajay020"
            target="_blank"
          >
            <FontAwesomeIcon icon={faHackerrank} size="lg" />
          </Link>
        </div>
      </div>
      <div className={styles.header__pic}>
        {/* <Image
          src={"/profile2.png"}
          width={120}
          height={120}
          alt="profile pic"
        /> */}
      </div>
    </section>
  );
}
