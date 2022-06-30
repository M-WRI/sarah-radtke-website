import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import styles from "../styles/Hero.module.scss";

const Hero = ({ img, text, title, site }) => {
  const { ref, inView } = useInView();

  const animation = {
    imageContainer: {
      width: "90vw",
      transition: {
        delay: 0.5,
        ease: [0.7, 0.135, 0.235, 0.99],
        duration: 2.4,
      },
    },
    image: {
      y: 0,
      transition: {
        delay: 0.5,
        ease: [0.7, 0.135, 0.235, 0.99],
        duration: 1.2,
      },
    },
    textContainer: {
      opacity: 1,
      y: "0%",
      transition: {
        delay: 0.8,
        ease: [0.7, 0.135, 0.235, 0.99],
        duration: 1.2,
      },
    },
  };

  const imgConCtrl = useAnimation();
  const imgCtrl = useAnimation();
  const textBox = useAnimation();

  useEffect(() => {
    if (inView) {
      imgConCtrl.start("imageContainer");
      imgCtrl.start("image");
      textBox.start("textContainer");
    }
  }, [inView, imgCtrl, imgConCtrl, textBox]);

  return (
    <div ref={ref} className={styles.container}>
      <motion.div
        initial={{ width: "100vw" }}
        variants={animation}
        animate={imgConCtrl}
        className={styles.imageContainer}
      >
        <motion.div
          initial={{ y: "100%" }}
          variants={animation}
          animate={imgCtrl}
          className={styles.image}
        ></motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: "50%" }}
        variants={animation}
        animate={textBox}
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
      </motion.div>
    </div>
  );
};

export default Hero;
