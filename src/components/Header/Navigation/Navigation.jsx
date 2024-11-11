import Link from "next/link";
import styles from "./Navigation.module.css";

export default function Navigation({ openMenu }) {

  const navItems = ["Home", "About", "Services", "News", "Contact"];

  return (
    <nav className={openMenu ? styles.openNav : styles.closeNav}>
      <ul className={styles.navList}>
        {navItems.map((text, index) => (
          <li key={index} className={styles.navItem}>
            <Link href={`/${text.toLowerCase()}`} className={styles.navText}>
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}