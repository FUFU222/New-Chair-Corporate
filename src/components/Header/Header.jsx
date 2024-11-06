import Image from "next/image"
import Link from "next/link"
import styles from "./Header.module.css"

export default function Header() {
  return (
    <header className={styles.Header}>
      <Image 
        src="/images/companyLogo.png"
        alt="株式会社CHAIRMANのロゴ"
        width={200}
        height={40}
        priority
        />
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/about">About</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/services">Services</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}