import Link from "next/link";
import Image from "next/image";

import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const data = [
    { id: 1, title: "CMD", slug: "cmd" },
    { id: 2, title: "Manuelle Therapie", slug: "manuelle-therapie" },
    { id: 3, title: "Massage", slug: "massage" },
    { id: 4, title: "Akupunktur", slug: "akupunktur" },
    { id: 5, title: "Über Mich", slug: "ueber-mich" },
  ];

  return (
    <nav className={styles.container}>
      <Link href="/">
        <a>
          <div className={styles.logoContainer}>
            <div className={styles.imageContainer}>
              <Image
                src="/img/sarah-radtke-logo.svg"
                alt="Sarah Radtke Logo"
                layout="fill"
                objectFit="contain"
                priority
              />
            </div>
            <h2 className={styles.logoFont}>Sarah Radtke</h2>
          </div>
        </a>
      </Link>

      <div>
        <div className={styles.hamburger}>
          <div>
            <div className={styles.line} />
            <div className={styles.line} />
          </div>
        </div>
        <ul className={styles.listContainer}>
          {data.map((item) => (
            <li key={item.id}>
              <Link href={item.slug}>
                <a>{item.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
