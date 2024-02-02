import Image from "next/image";
import styles from "../styles/Header.module.css";

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
            Full Stack Web Developer
          </h2>
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
