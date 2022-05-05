import Link from "next/link";

import styles from "../styles/PhotoText.module.css";

const PhotoText = ({ img, headline, text, slug, invert = false }) => {
  return (
    <section
      className={
        invert ? styles.sectionFourContainerInvert : styles.sectionFourContainer
      }
    >
      <div className={styles.imageContainer}>
        <div
          className={
            invert ? styles.bgImageElementInvert : styles.bgImageElement
          }
        ></div>
        <div
          className={invert ? styles.imageWrapperInvert : styles.imageWrapper}
        ></div>
      </div>
      <div className={styles.sectionFourContent}>
        {headline && <h2 className={styles.sectionFourHeadline}>{headline}</h2>}
        {text && <p className={styles.sectionFourText}>{text}</p>}
        {slug && (
          <Link href={slug}>
            <a className={styles.link}>Mehr Informationen</a>
          </Link>
        )}
      </div>
    </section>
  );
};

export default PhotoText;
