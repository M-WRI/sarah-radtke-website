import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import styles from "../styles/PhotoText.module.css";

const PhotoText = ({ img, headline, text, slug, invert = false }) => {
  const ref = useRef(null);
  const [innerHeight, setInnerHeight] = useState();
  const [offsetY, setOffsetY] = useState();

  const handleScroll = () =>
    setOffsetY(ref.current.getBoundingClientRect().top);

  const handleInnerHeight = () => {
    setInnerHeight(window.innerHeight);
  };

  let scroll = offsetY - innerHeight;

  useEffect(() => {
    setInnerHeight(window.innerHeight);
    setOffsetY(ref.current.getBoundingClientRect().top);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleInnerHeight);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleInnerHeight);
    };
  }, []);

  return (
    <section
      ref={ref}
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
        <div>
          <motion.div
            className={invert ? styles.imageWrapperInvert : styles.imageWrapper}
            style={{
              y: `${scroll <= 0 && offsetY * 0.1}px`,
            }}
          ></motion.div>
        </div>
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
