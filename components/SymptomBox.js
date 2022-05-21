import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// styles
import styles from "../styles/SymptomBox.module.css";

const SymptomBox = ({ text, headline, list }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const animation = {
    bg: {
      y: 0,
      transition: {
        ease: [0.7, 0.135, 0.235, 0.99],
        duration: 1,
      },
    },
    head: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.8,
        ease: [0.7, 0.135, 0.235, 0.99],
        duration: 0.5,
      },
    },
    text: {
      opacity: 1,
      transition: {
        delay: 1.1,
        ease: [0.7, 0.135, 0.235, 0.99],
        duration: 0.5,
      },
    },
    item: (i) => ({
      opacity: 1,
      transition: {
        delay: !text ? 1.1 + i * 0.1 : 1.3 + i * 0.1,
      },
    }),
  };

  const bgCtrl = useAnimation();
  const headCtrl = useAnimation();
  const textCtrl = useAnimation();
  const listCtrl = useAnimation();

  useEffect(() => {
    if (inView) {
      headCtrl.start("head");
      textCtrl.start("text");
      listCtrl.start("item");
      bgCtrl.start("bg");
    }
  }, [inView, headCtrl, textCtrl, listCtrl, bgCtrl]);

  return (
    <section ref={ref} className={styles.sectionThreeContainer}>
      <motion.div
        className={styles.bg}
        initial={{ y: "100%" }}
        variants={animation}
        animate={bgCtrl}
      >
        <div className={styles.contentContainer}>
          {headline && (
            <motion.h2
              className={styles.sectionHeadline}
              initial={{ y: "50%", opacity: 0 }}
              variants={animation}
              animate={headCtrl}
            >
              {headline}
            </motion.h2>
          )}
          {text && (
            <motion.p
              className={styles.sectionText}
              initial={{ opacity: 0 }}
              variants={animation}
              animate={textCtrl}
            >
              {text}
            </motion.p>
          )}
          <div className={styles.listContainer}>
            {list.map((item) => (
              <motion.span
                className={styles.listItem}
                key={item.id}
                custom={item.id}
                initial={{ opacity: 0 }}
                variants={animation}
                animate={listCtrl}
              >
                • {item.title}{" "}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default SymptomBox;
