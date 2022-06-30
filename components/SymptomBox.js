import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Animation
import { animation } from "../animation/symptomBox.animation";
// Components
import { Headline } from "./headline.component";
import { Text } from "./text.component";
import { List } from "./list.component";
// Styles
import styles from "../styles/SymptomBox.module.scss";

const SymptomBox = ({ text, headline, list }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

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
        <Headline center secondary mb>
          {headline}
        </Headline>
        <Text center>{text}</Text>
        <List data={list} />
      </motion.div>
    </section>
  );
};

export default SymptomBox;

/*

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
              style={{
                margin: !list && 0,
              }}
            >
              {text}
            </motion.p>
          )}
          <div className={styles.listContainer}>
            {list &&
              list.map((item) => (
                <motion.span
                  className={styles.listItem}
                  key={item.id}
                  custom={item.id}
                  initial={{ opacity: 1 }}
                  variants={animation}
                  animate={listCtrl}
                >
                  • {item.title}
                </motion.span>
              ))}
          </div>
        </div>

*/
