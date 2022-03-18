import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.addressInfoContainer}>
          <h2 className={styles.headline}>Sarah Radtke</h2>
          <span>
            Privatpraxis für Physiotherapie, <br /> Manuelle Therapie und
            Akupunktur
          </span>
          <address className={styles.adress}>
            Waitzstraße 7 22607 Hamburg
          </address>
        </div>
        <div className={styles.scheduleContainer}>
          Termine telefonisch von Mo | Fr 08 - 20 Uhr <br />
          Termine auch am Wochenende <br />
          Ich komme gerne auch zu Ihnen nach Hause
        </div>
        <div className={styles.contactContainer}>
          <span>
            040-88358553 <br /> praxis@sarahradtke.de
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
