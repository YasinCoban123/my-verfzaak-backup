import Link from 'next/link';
import styles from '/styles/page.module.css';
export default function Nav() {
  return (
    <section className={styles.normcss}>
    <nav className={styles.navbar}>
      <Link href="/">
      <img src="/verfzaakLogo.png" alt="Your Picture" className={styles.picture} />
      </Link>
      <ul className={styles.navlist}>
        <li className={styles.navitem}>
          <h1 className={styles.title}>
            <Link href="/" className={styles.navlink}>
              Homepagina
            </Link>
          </h1>
        </li>
        <li className={styles.navitem}>
          <h1 className={styles.title}>
            <Link href="/over" className={styles.navlink}>
              Over ons
            </Link>
          </h1>
        </li>
        <li className={styles.navitem}>
          <h1 className={styles.title}>
            <Link href="/contact" className={styles.navlink}>
              Contact
            </Link>
          </h1>
        </li>
        <li className={styles.navitem}>
          <h1 className={styles.title}>
            <Link href="/locatie" className={styles.navlink}>
              Locatie
            </Link>
          </h1>
        </li>
      </ul>
    </nav>
    </section>
  );
}
