import styles from "../styles/Hero.module.css";

const Hero = ({ img, text }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}></div>
      <div className={styles.heroTextContainer}>
        <h1 className={styles.heroText}>
          Privatpraxis für Physiotherapie, Manuelle Therapie und Akupunktur
        </h1>
      </div>
    </div>
  );
};

export default Hero;
