import styles from "../styles/PreFooter.module.css";
import Overview from "./Overview";

const PreeFooter = ({ site }) => {
  const data = [
    { id: 1, title: "CMD", img: "1" },
    { id: 2, title: "Manuelle Therapie", img: "2" },
    { id: 3, title: "Massage", img: "3" },
    { id: 4, title: "Akupunktur", img: "4" },
  ];
  return (
    <section className={styles.container}>
      <div className={styles.sectionOne}>
        <h2 className={styles.headline}>Kosten</h2>
        <div className={styles.contentContainer}>
          <div className={styles.textBox}>
            <p>
              Heilpraktikerleistungen erfolgt nach dem Gebührenverzeichnis für
              Heilpraktiker (GebüH) . Private Versicherungen /
              Zusatzversicherungen übernehmen zum Teil die Kosten der
              Heilpraktikergebühren. Mit Privatrezept (in der Regel übernimmt
              die private Krankenversicherung oder Zusatzversicherung die Kosten
              im vollem Umfang) und Selbstzahler. Bitte fragen Sie vorab Ihrer
              private Versicherung.
            </p>
          </div>
          <div className={styles.priceInfoContainer}>
            <h3 className={styles.priceHeadline}>Private Physiotherapie</h3>
            <p className={styles.price}>
              Das Behandlungshonorar beträgt etwa <strong>90€/Std</strong>
            </p>
          </div>
        </div>
      </div>
      <Overview offer={data} site={site} />
    </section>
  );
};

export default PreeFooter;
