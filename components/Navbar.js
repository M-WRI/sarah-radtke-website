import Link from "next/link";
import Image from "next/image";

import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const data = [
    { id: 1, title: "Akupunktur" },
    { id: 2, title: "Physiotherapie" },
    { id: 3, title: "Manuelle Therapie" },
  ];

  return (
    <nav className={styles.container}>
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
              <Link href="#">
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
