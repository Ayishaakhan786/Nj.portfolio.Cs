import Image from "next/image";
import Ayisha from "./ayishakhan.jpg"; // Image public folder mein honi chahiye
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <samp className={styles.samp}>NAME</samp>
        <h1 className={styles.name}>Ayisha Khan</h1>
        <samp className={styles.samp}>EMAIL Address</samp>
        <h1 className={styles.email}>Ayishakhan228276@gmail.com</h1>
        <samp className={styles.samp}>GIT Repository</samp>
        <h1 className={styles.github}>
          <a
            href="https://github.com/Ayishaakhan786"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Ayishakhan786
          </a>
        </h1>
      </div>
      <div>
        <Image
          src={Ayisha}
          alt="Ayisha Khan"
          width={200}
          height={200}
          className={styles.image}
          priority
        />
      </div>
    </div>
  );
}

