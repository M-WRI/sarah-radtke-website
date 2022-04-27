import styles from "../styles/PhotoText.module.css";

const PhotoText = () => {
  return (
    <section className={styles.sectionFourContainer}>
      <div className={styles.imageContainer}>
        <div className={styles.bgImageElement}></div>
        <div className={styles.imageWrapper}></div>
      </div>
      <div className={styles.sectionFourContent}>
        <h2 className={styles.sectionFourHeadline}>Sarah Radtke</h2>
        <p className={styles.sectionFourText}>
          Mein Name ist Sarah Radtke. Ich wurde 1983 in Köln geboren, bin
          verheiratet und lebe mit meinen 2 Kindern und meinem Mann seit 2004 in
          Hamburg. Nach meinen Studium der Zahnmedizin an der Uniklinik
          Eppendorf folgten eine Physiotherapieausbildung und weitere
          Qualifikationen und Fortbildungen in den Bereichen Lymphdrainage,
          Rückentraining, Kiefergelenkbehandlungen (CMD) und Manuelle Therapie.
          Heilpraktiker- und Akupunkturausbildung (Spezalisiert bei
          Kinderwunsch)
        </p>
      </div>
    </section>
  );
};

export default PhotoText;
