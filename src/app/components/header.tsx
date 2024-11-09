import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/about">About</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/contact">Contact Us</Link>
        </li>
      </ul>
    </div>
  );
}
