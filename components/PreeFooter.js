import styles from "../styles/PreFooter.module.css";

const PreeFooter = () => {
  const data = [
    { id: 1, title: "Akupunktur", img: "1" },
    { id: 2, title: "Physiotherapie", img: "2" },
    { id: 3, title: "Manuelle Therapie", img: "3" },
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
      <div className={styles.sectionTwo}>
        <h2 className={styles.headline}>Das Angebot im Überblick</h2>
        <div className={styles.gallery}>
          {data.map((el) => (
            <div key={el.id} className={styles.imageWrapper}>
              <h3 className={styles.imgTitle}>{el.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PreeFooter;
