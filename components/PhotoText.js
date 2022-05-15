import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import styles from "../styles/PhotoText.module.css";

const PhotoText = ({ img, headline, text, slug, invert = false }) => {
  const reference = useRef(null);
  const [innerHeight, setInnerHeight] = useState();
  const [offsetY, setOffsetY] = useState();

  const { ref, inView } = useInView();

  const handleScroll = () =>
    setOffsetY(reference.current.getBoundingClientRect().top);

  const handleInnerHeight = () => {
    setInnerHeight(window.innerHeight);
  };

  let scroll = offsetY - innerHeight;

  useEffect(() => {
    setInnerHeight(window.innerHeight);
    setOffsetY(reference.current.getBoundingClientRect().top);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleInnerHeight);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleInnerHeight);
    };
  }, []);

  const animation = {
    head: {
      y: 0,
      opacity: 1,
      transition: {
        ease: [0.7, 0.135, 0.235, 0.99],
        duration: 0.5,
      },
    },
    text: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.1,
        ease: [0.7, 0.135, 0.235, 0.99],
        duration: 0.5,
      },
    },
    link: {
      opacity: 1,
      transition: {
        delay: 0.2,
        ease: [0.7, 0.135, 0.235, 0.99],
        duration: 0.5,
      },
    },
  };

  const headCtrl = useAnimation();
  const textCtrl = useAnimation();
  const linkCtrl = useAnimation();

  useEffect(() => {
    if (inView) {
      headCtrl.start("head");
      textCtrl.start("text");
      linkCtrl.start("link");
    }
  }, [inView, headCtrl, textCtrl, linkCtrl]);
  return (
    <section
      ref={reference}
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
              y: `${scroll <= 0 && offsetY * 0.2}px`,
            }}
          ></motion.div>
        </div>
      </div>
      <div ref={ref} className={styles.sectionFourContent}>
        {headline && (
          <motion.h2
            className={styles.sectionFourHeadline}
            initial={{ y: "50%", opacity: 0 }}
            variants={animation}
            animate={headCtrl}
          >
            {headline}
          </motion.h2>
        )}
        {text && (
          <motion.p
            initial={{ y: "50%", opacity: 0 }}
            variants={animation}
            animate={textCtrl}
            className={styles.sectionFourText}
          >
            {text}
          </motion.p>
        )}
        {slug && (
          <Link href={slug}>
            <motion.a
              className={styles.link}
              initial={{ opacity: 0 }}
              variants={animation}
              animate={linkCtrl}
            >
              Mehr Informationen
            </motion.a>
          </Link>
        )}
      </div>
    </section>
  );
};

export default PhotoText;
