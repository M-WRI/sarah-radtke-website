import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// styles
import styles from "../styles/SymptomBox.module.css";

const SymptomBox = ({ text, headline, list }) => {
  const { ref, inView } = useInView();

  const animation = {
    head: {
      opacity: 1,
      transition: {
        delay: 0.5,
        ease: [0.7, 0.135, 0.235, 0.99],
        duration: 2.4,
      },
    },
  };

  return (
    <section ref={ref} className={styles.sectionThreeContainer}>
      <div className={styles.contentContainer}>
        {headline && (
          <motion.h2 className={styles.sectionHeadline}>{headline}</motion.h2>
        )}
        {text && <p className={styles.sectionText}>{text}</p>}
        <div className={styles.listContainer}>
          {list.map((item) => (
            <span className={styles.listItem} key={item.id}>
              • {item.title}{" "}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SymptomBox;
