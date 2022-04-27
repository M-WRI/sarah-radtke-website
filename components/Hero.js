import styles from "../styles/Hero.module.css";

const Hero = ({ img, text, title, site }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}></div>
      <div
        className={
          site === "index"
            ? styles.heroTextContainerIndex
            : styles.heroTextContainer
        }
      >
        {title && (
          <h1
            className={
              site === "index" ? styles.heroTitleIndex : styles.heroTitle
            }
          >
            {title}
          </h1>
        )}
        {text && <p className={styles.heroText}>{text}</p>}
      </div>
    </div>
  );
};

export default Hero;
