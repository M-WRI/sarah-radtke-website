import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
// Data
import data from "../data/serviceGallery.data.json";
// Components
import { Headline } from "./headline.component";
import { Text } from "./text.component";
// Animations
import { animation } from "../animation/serviceGallery.animation";
// Styles
import styles from "../styles/serviceGallery.module.scss";

export const ServiceGallery = () => {
  const [hoverState, setHoverState] = useState(0);
  const [linkActive, setLinkActive] = useState(1);

  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  let linkData = data.find((el) => el.id === linkActive);

  const imgCtrl = useAnimation();
  const boxCtrl = useAnimation();

  useEffect(() => {
    if (inView) {
      imgCtrl.start("image");
      boxCtrl.start("contentBox");
    }
  }, [inView, imgCtrl, boxCtrl]);

  return (
    <div className={styles.container}>
      <div className={styles.galleryContainer}>
        <ul className={styles.serviceGalleryList}>
          {data.map((item) => (
            <motion.li
              key={item.id}
              className={styles.serviceGalleryItem}
              onMouseEnter={() => setHoverState(item.id)}
              onMouseLeave={() => setHoverState(0)}
              onClick={() => setLinkActive(item.id)}
              variants={animation}
              animate={item.id === linkActive ? "linkActive" : "linkOff"}
            >
              <motion.div
                style={{
                  background: linkActive === item.id ? "#cbbb9f" : "#dfd6c5",
                }}
                animate={
                  hoverState === item.id || linkActive === item.id
                    ? "lineHover"
                    : "lineOff"
                }
                variants={animation}
                className={styles.line}
              ></motion.div>
              {item.title}
            </motion.li>
          ))}
        </ul>
        <div ref={ref} className={styles.contentContainer}>
          <div className={styles.contentImage}>
            <motion.div
              initial={{ y: "100%" }}
              variants={animation}
              animate={imgCtrl}
              className={styles.image}
            >
              {linkData.img}
            </motion.div>
          </div>
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            variants={animation}
            animate={boxCtrl}
            className={styles.textBox}
          >
            <Headline mb>{linkData.title}</Headline>
            <Text>{linkData.text}</Text>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
