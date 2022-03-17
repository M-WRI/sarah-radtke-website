import { useState } from "react";
import { motion } from "framer-motion";

import styles from "../styles/ServiceGallery.module.css";

const ServiceGallery = () => {
  const [hoverState, setHoverState] = useState(0);
  const [linkActive, setLinkActive] = useState(1);

  const data = [
    {
      id: 1,
      title: "Akupunktur",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      img: "1",
    },
    {
      id: 2,
      title: "Physiotherapie",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      img: "2",
    },
    {
      id: 3,
      title: "Manuelle Therapie",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      img: "3",
    },
  ];

  let linkData = data.find((el) => el.id === linkActive);

  const animation = {
    lineHover: {
      width: 25,
      transition: { bounce: 0, ease: "easeOut", duration: 0.3 },
    },
    lineOff: {
      width: 0,
      transition: { bounce: 0, ease: "easeOut", duration: 0.3 },
    },
    linkActive: {
      color: "#cbbb9f",
    },
    linkOff: {
      color: "#dfd6c5",
    },
  };

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
        <div className={styles.contentContainer}>
          <div className={styles.contentImage}>{linkData.img}</div>
          <div className={styles.textBox}>
            <h2 className={styles.textBoxHeadline}>{linkData.title}</h2>
            <p className={styles.text}>{linkData.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceGallery;
