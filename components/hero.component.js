import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
// Components
import { Headline } from "./headline.component";
import { Text } from "./text.component";
// Animation
import { animation } from "../animation/hero.animation";

import styles from "../styles/hero.module.scss";

export const Hero = ({ img, text, title, site }) => {
  const { ref, inView } = useInView();

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
        initial={{ width: "100%" }}
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
          <Headline center mb={text && true}>
            {title}
          </Headline>
        )}
        {text && <Text>{text}</Text>}
      </motion.div>
    </div>
  );
};
