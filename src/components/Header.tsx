import Image from "next/image";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.header__info}>
        <p>
          <span> Hi,</span> my name is Ajay. <span>I am a web developer</span>
          from Dausa, Rajasthan.
        </p>
      </div>
      <div className={styles.header__divider}></div>
      <div className={styles.header__pic}>
        <Image
          src={"/profile.jpg"}
          width={120}
          height={120}
          alt="profile pic"
        />
      </div>
    </div>
  );
}
